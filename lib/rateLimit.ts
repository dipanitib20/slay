/**
 * In-memory sliding window rate limiter for Next.js API routes.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const ipMap = new Map<string, RateLimitRecord>();

// Cleanup stale records periodically (every 10 minutes)
const CLEANUP_INTERVAL = 10 * 60 * 1000;
let lastCleanup = Date.now();

function purgeExpiredEntries(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;

  for (const [ip, record] of ipMap.entries()) {
    const validTimestamps = record.timestamps.filter((ts) => now - ts < windowMs);
    if (validTimestamps.length === 0) {
      ipMap.delete(ip);
    } else {
      record.timestamps = validTimestamps;
    }
  }
}

export function getClientIp(request: Request): string {
  // Headers commonly set by reverse proxies (Vercel, Cloudflare, Nginx, etc.)
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const clientIp = forwardedFor.split(",")[0].trim();
    if (clientIp) return clientIp;
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp?.trim()) return realIp.trim();

  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp?.trim()) return cfConnectingIp.trim();

  return "127.0.0.1";
}

export interface RateLimitOptions {
  /** Time window in milliseconds (default: 15 minutes) */
  windowMs?: number;
  /** Maximum allowed requests within the window (default: 5) */
  max?: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetInSeconds: number;
}

/**
 * Check if the given client IP has exceeded the rate limit.
 */
export function checkRateLimit(
  ip: string,
  options: RateLimitOptions = {}
): RateLimitResult {
  const windowMs = options.windowMs ?? 15 * 60 * 1000; // 15 minutes
  const max = options.max ?? 5; // 5 submissions per 15 minutes
  const now = Date.now();

  purgeExpiredEntries(windowMs);

  const record = ipMap.get(ip) || { timestamps: [] };
  // Filter out timestamps outside the active window
  const activeTimestamps = record.timestamps.filter((ts) => now - ts < windowMs);

  if (activeTimestamps.length >= max) {
    const oldestTimestamp = activeTimestamps[0];
    const resetTime = oldestTimestamp + windowMs;
    const resetInSeconds = Math.max(1, Math.ceil((resetTime - now) / 1000));

    return {
      success: false,
      limit: max,
      remaining: 0,
      resetInSeconds,
    };
  }

  // Record this request
  activeTimestamps.push(now);
  ipMap.set(ip, { timestamps: activeTimestamps });

  const remaining = Math.max(0, max - activeTimestamps.length);
  const resetInSeconds = Math.ceil(windowMs / 1000);

  return {
    success: true,
    limit: max,
    remaining,
    resetInSeconds,
  };
}
