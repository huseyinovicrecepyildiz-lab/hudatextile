import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: toEmail,
      subject: subject
        ? `[Hüda Tekstil İletişim] ${subject}`
        : `[Hüda Tekstil İletişim] Yeni Mesaj`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Ad Soyad:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">E-posta:</td>
              <td style="padding: 8px 0; color: #1a1a1a;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Firma:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${company}</td>
            </tr>` : ''}
            ${phone ? `
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Telefon:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${phone}</td>
            </tr>` : ''}
            ${subject ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Konu:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${subject}</td>
            </tr>` : ''}
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 6px; border-left: 4px solid #c9a84c;">
            <p style="font-weight: bold; color: #555; margin: 0 0 10px 0;">Mesaj:</p>
            <p style="color: #1a1a1a; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 20px; text-align: center;">
            Bu mesaj hudateks.com iletişim formundan gönderilmiştir.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
