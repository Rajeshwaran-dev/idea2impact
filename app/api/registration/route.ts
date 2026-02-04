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
      countryCode,
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
      countryCode,
      college,
      year,
      department,
      teamSize,
      experience,
      skills,
      motivation,
    });

    // 2️⃣ SMTP Transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 3️⃣ Send Email
    await transporter.sendMail({
      from: `"Idea2Impact" <${process.env.MAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Idea2Impact 2026 – Registration Successful 🚀",
      html: `
       <div style="max-width: 650px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
    
    <!-- Modern Header with Icon -->
    <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px 30px; position: relative;">
      <div style="text-align: center;">
        <div style="display: inline-block; background: rgba(255,255,255,0.2); border-radius: 50%; padding: 15px; margin-bottom: 15px;">
          <span style="font-size: 40px;">📋</span>
        </div>
        <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">
          New Registration Received
        </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">
          ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>

    <!-- Content Container -->
    <div style="padding: 35px 30px;">
      
      <!-- Personal Information Card -->
      <div style="margin-bottom: 30px;">
        <div style="display: flex; align-items: center; margin-bottom: 18px;">
          <div style="width: 4px; height: 24px; background: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%); border-radius: 2px; margin-right: 12px;"></div>
          <h2 style="margin: 0; font-size: 18px; font-weight: 700; color: #1f2937;">
            👤 Personal Information
          </h2>
        </div>
        
        <div style="background: #f9fafb; border-radius: 12px; padding: 20px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; width: 35%; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 15px; font-weight: 600; color: #111827;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${email}" style="font-size: 15px; color: #6366f1; text-decoration: none; font-weight: 500;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
              </td>
              <td style="padding: 12px 0;">
                <span style="font-size: 15px; color: #111827; font-weight: 500;">${countryCode} ${phone}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <!-- Academic Information Card -->
      <div style="margin-bottom: 30px;">
        <div style="display: flex; align-items: center; margin-bottom: 18px;">
          <div style="width: 4px; height: 24px; background: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%); border-radius: 2px; margin-right: 12px;"></div>
          <h2 style="margin: 0; font-size: 18px; font-weight: 700; color: #1f2937;">
            🎓 Academic Information
          </h2>
        </div>
        
        <div style="background: #f9fafb; border-radius: 12px; padding: 20px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; width: 35%; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">College</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 15px; color: #111827; font-weight: 500;">${college}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Year</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 15px; color: #111827; font-weight: 500;">${year}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Department</span>
              </td>
              <td style="padding: 12px 0;">
                <span style="font-size: 15px; color: #111827; font-weight: 500;">${department}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <!-- Team & Experience Card -->
      <div style="margin-bottom: 30px;">
        <div style="display: flex; align-items: center; margin-bottom: 18px;">
          <div style="width: 4px; height: 24px; background: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%); border-radius: 2px; margin-right: 12px;"></div>
          <h2 style="margin: 0; font-size: 18px; font-weight: 700; color: #1f2937;">
            💼 Team & Experience
          </h2>
        </div>
        
        <div style="background: #f9fafb; border-radius: 12px; padding: 20px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; width: 35%; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Team Size</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 15px; color: #111827; font-weight: 500;">${teamSize}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Experience</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 15px; color: #111827; font-weight: 500;">${experience || "<span style='color: #9ca3af; font-style: italic;'>Not provided</span>"}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Skills</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="font-size: 15px; color: #111827; font-weight: 500;">${skills || "<span style='color: #9ca3af; font-style: italic;'>Not provided</span>"}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; vertical-align: top;">
                <span style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Motivation</span>
              </td>
              <td style="padding: 12px 0;">
                <div style="font-size: 15px; color: #111827; line-height: 1.6; font-weight: 400;">${motivation || "<span style='color: #9ca3af; font-style: italic;'>Not provided</span>"}</div>
              </td>
            </tr>
          </table>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; font-weight: 500;">
        This is an automated notification from your registration system
      </p>
      <p style="margin: 0; color: #9ca3af; font-size: 12px;">
        © ${new Date().getFullYear()} Idea2Impact. All rights reserved.
      </p>
    </div>

  </div>
      `,
    });

    return NextResponse.json(
      { success: true, id: registration._id },
      { status: 200 },
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
      { status: 500 },
    );
  }
}
