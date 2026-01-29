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

    await sendRegistrationEmail(body);

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

interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  department: string;
  teamSize: string;
  experience?: string;
  skills?: string;
  motivation?: string;
}

export function sendRegistrationEmail(data: EmailPayload): void {
  // Fire-and-forget async IIFE
  (async () => {
    try {
      if (
        !process.env.MAIL_USER ||
        !process.env.MAIL_PASS ||
        !process.env.RECIPIENT_EMAIL
      ) {
        throw new Error("Mail environment variables missing");
      }

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      transporter.sendMail({
        from: `"Idea2Impact" <${process.env.MAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: "Idea2Impact 2026 – Registration Successful 🚀",
        html: `
       <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; border-radius: 12px;">
  <div style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg,#00e5ff 0%,#06f 100%); padding: 30px; text-align: center;">
      <h2 style="color: white; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: 0.5px;">
        🎉 New Registration Received
      </h2>
    </div>
    
    <!-- Table Content -->
    <table style="width: 100%; border-collapse: collapse; background: white;">
      <tbody>
        <!-- Personal Information Section -->
        <tr style="background: #f8f9fa;">
          <td colspan="2" style="padding: 15px 25px; font-weight: 600; color: #667eea; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea;">
            👤 Personal Information
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; width: 40%; vertical-align: top;">
            <span style="color: #667eea;">●</span> Name
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            ${data.name}
          </td>
        </tr>
        
        <tr style="background: #f8f9fa; border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> Email
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> Phone
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            ${data.phone}
          </td>
        </tr>
        
        <!-- Academic Information Section -->
        <tr style="background: #f8f9fa;">
          <td colspan="2" style="padding: 15px 25px; font-weight: 600; color: #667eea; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea;">
            🎓 Academic Information
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> College
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            ${data.college}
          </td>
        </tr>
        
        <tr style="background: #f8f9fa; border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> Year
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            ${data.year}
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> Department
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            ${data.department}
          </td>
        </tr>
        
        <!-- Team & Experience Section -->
        <tr style="background: #f8f9fa;">
          <td colspan="2" style="padding: 15px 25px; font-weight: 600; color: #667eea; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea;">
            💼 Team & Experience
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> Team Size
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            ${data.teamSize}
          </td>
        </tr>
        
        <tr style="background: #f8f9fa; border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> Experience
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            ${data.experience || "<span style='color: #6c757d; font-style: italic;'>Not provided</span>"}
          </td>
        </tr>
        
        <tr style="border-bottom: 1px solid #e9ecef;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> Skills
          </td>
          <td style="padding: 18px 25px; color: #212529;">
            ${data.skills || "<span style='color: #6c757d; font-style: italic;'>Not provided</span>"}
          </td>
        </tr>
        
        <tr style="background: #f8f9fa;">
          <td style="padding: 18px 25px; font-weight: 600; color: #495057; vertical-align: top;">
            <span style="color: #667eea;">●</span> Motivation
          </td>
          <td style="padding: 18px 25px; color: #212529; line-height: 1.6;">
            ${data.motivation || "<span style='color: #6c757d; font-style: italic;'>Not provided</span>"}
          </td>
        </tr>
      </tbody>
    </table>
    
    <!-- Footer -->
    <div style="background: #f8f9fa; padding: 20px 25px; text-align: center; border-top: 3px solid #667eea;">
      <p style="margin: 0; color: #6c757d; font-size: 13px;">
        Received on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
      </p>
    </div>
  </div>
</div>
      `,
      });

      console.log("✅ Registration email sent");
    } catch (err) {
      console.error(
        "❌ Email send failed:",
        err instanceof Error ? err.message : err,
      );
    }
  })();
}
