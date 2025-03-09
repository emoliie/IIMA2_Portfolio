import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log("📨 Sending email...");

    // 📧 Configuration SMTP pour Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true", // `false` pour TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("✅ Transporter created!");

    // ✉️ Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Ton email Gmail
      to: process.env.EMAIL_USER, // Où recevoir les messages
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    console.log("📩 Sending email with:", mailOptions);

    // 📩 Envoi de l’email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        message: `Error sending email: ${(error as Error).message}`,
      },
      { status: 500 }
    );
  }
}
