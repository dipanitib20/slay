import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/services",
        destination: "/Services",
      },
    ];
  },
};

export default nextConfig;
