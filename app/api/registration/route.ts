import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { connectDB } from "@/lib/db";
import Registration from "@/models/registration";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      name,
      email,
      phone,
      college,
      year,
      department,
      teamSize,
      experience,
      skills,
      motivation,
    } = body;

    // 1️⃣ Save to MongoDB
    const registration = await Registration.create({
      name,
      email,
      phone,
      college,
      year,
      department,
      teamSize,
      experience,
      skills,
      motivation,
    });
console.log(process.env.MAIL_PASS,process.env.MAIL_USER,process.env.SMPT_HOST,"============")
    // 2️⃣ SMTP Transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port:587,
      secure: false, 
      auth: {
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS,
      },
    });

    // 3️⃣ Send Email
    await transporter.sendMail({
      from: `"Idea2Impact" <${process.env.MAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Idea2Impact 2026 – Registration Successful 🚀",
      html: `
        <h2>New Registration Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>College:</b> ${college}</p>
        <p><b>Year:</b> ${year}</p>
        <p><b>Department:</b> ${department}</p>
        <p><b>Team Size:</b> ${teamSize}</p>
        <p><b>Experience:</b> ${experience || "N/A"}</p>
        <p><b>Skills:</b> ${skills || "N/A"}</p>
        <p><b>Motivation:</b> ${motivation || "N/A"}</p>
      `,
    });

    return NextResponse.json(
      { success: true, id: registration._id },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Registration API Error:", error);
    const errMessage =
    error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
        error: errMessage,
      },
      { status: 500 }
    );
  }
}
