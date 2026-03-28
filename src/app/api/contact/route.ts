import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  interests: string[];
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }
    if (!body.message?.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // TODO: Integrate with an email service (e.g., Resend, SendGrid, Nodemailer)
    // For now, log the submission and return success.
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      interests: body.interests,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
