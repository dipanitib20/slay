import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getClientIp, checkRateLimit } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  try {
    // 0. IP Rate Limiting (max 5 submissions per 15 minutes per IP)
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // max 5 submissions per 15 min window
    });

    if (!rateLimit.success) {
      const waitMinutes = Math.ceil(rateLimit.resetInSeconds / 60);
      return NextResponse.json(
        {
          success: false,
          error: `Too many submissions from this connection. Please try again in ${waitMinutes} minute${waitMinutes > 1 ? "s" : ""}.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.resetInSeconds),
            "X-RateLimit-Limit": String(rateLimit.limit),
            "X-RateLimit-Remaining": String(rateLimit.remaining),
            "X-RateLimit-Reset": String(rateLimit.resetInSeconds),
          },
        }
      );
    }

    const body = await request.json();
    const {
      name,
      companyName = "",
      serviceNeeded = "",
      brandDetails = "",
      email,
      countryCode = "+91",
      phone,
    } = body || {};

    // 1. Validate Name (only alphabets and spaces allowed)
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(trimmedName)) {
      return NextResponse.json(
        {
          success: false,
          error: "Name can only contain alphabetic letters and spaces.",
        },
        { status: 400 }
      );
    }

    // 2. Validate Email (strictly valid email format)
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Validate Phone (strictly numerics only)
    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    const trimmedPhone = phone.trim();
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(trimmedPhone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Phone number must contain only numeric digits.",
        },
        { status: 400 }
      );
    }

    if (trimmedPhone.length < 5 || trimmedPhone.length > 16) {
      return NextResponse.json(
        {
          success: false,
          error: "Phone number must be between 5 and 16 digits.",
        },
        { status: 400 }
      );
    }

    // Combine sanitized contact data
    const submissionData = {
      name: trimmedName,
      companyName: typeof companyName === "string" ? companyName.trim() : "",
      serviceNeeded: typeof serviceNeeded === "string" ? serviceNeeded.trim() : "",
      brandDetails: typeof brandDetails === "string" ? brandDetails.trim() : "",
      email: trimmedEmail.toLowerCase(),
      countryCode: typeof countryCode === "string" ? countryCode.trim() : "+91",
      phone: trimmedPhone,
      fullPhoneNumber: `${typeof countryCode === "string" ? countryCode.trim() : "+91"}${trimmedPhone}`,
      status: "new",
      createdAt: serverTimestamp(),
    };

    // Save to Firestore 'contacts' collection using credentials in lib/firebase.js
    const docRef = await addDoc(collection(db, "contacts"), submissionData);

    return NextResponse.json(
      {
        success: true,
        message: "Your contact request has been received.",
        id: docRef.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving contact submission to Firestore:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          "Failed to submit contact request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
