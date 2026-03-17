import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0d1424, #273c6c); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #d4a930; margin: 0; font-size: 24px;">Hüda Tekstil</h1>
          <p style="color: rgba(255,255,255,0.6); margin: 8px 0 0;">New Contact Form Submission</p>
        </div>
        <div style="background: #f5f5f6; padding: 30px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #4b4b54; font-weight: bold;">Name:</td>
              <td style="padding: 10px 0; color: #19191c;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #4b4b54; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; color: #19191c;">${email}</td>
            </tr>
            ${company ? `<tr><td style="padding: 10px 0; color: #4b4b54; font-weight: bold;">Company:</td><td style="padding: 10px 0; color: #19191c;">${company}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding: 10px 0; color: #4b4b54; font-weight: bold;">Phone:</td><td style="padding: 10px 0; color: #19191c;">${phone}</td></tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #4b4b54; font-weight: bold;">Subject:</td>
              <td style="padding: 10px 0; color: #19191c;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #d4a930;">
            <p style="color: #4b4b54; font-weight: bold; margin: 0 0 8px;">Message:</p>
            <p style="color: #19191c; margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
      </div>
    `;

    // Only send email if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"Hüda Tekstil Web" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
        replyTo: email,
        subject: `[Web İletişim] ${subject} - ${name}`,
        html: htmlContent,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
