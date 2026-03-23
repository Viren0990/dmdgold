import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { Name, Business, Email, Phone } = body;

    // Validate request
    if (!Name || !Email) {
      return NextResponse.json(
        { error: 'Name and Email are required.' },
        { status: 400 }
      );
    }

    // Configure the mail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup the email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `New Demo Request from ${Name} - ${Business || 'No Business'}`,
      text: `
        You have received a new demo request!
        
        Name: ${Name}
        Business: ${Business}
        Email: ${Email}
        Phone: ${Phone}
      `,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #FAF9F6; padding: 40px 20px; color: #2C2C2C;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-top: 4px solid #C6A87C;">
            <h2 style="margin-top: 0; color: #2C2C2C; font-size: 24px; font-weight: 600;">New Demo Request</h2>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 30px;">
              You have received a new contact form submission from the DMD GOLD website.
            </p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 30%; color: #666;">Name</td>
                <td style="padding: 15px 0; border-bottom: 1px solid #eee; color: #2C2C2C; font-weight: 500;">${Name}</td>
              </tr>
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Business</td>
                <td style="padding: 15px 0; border-bottom: 1px solid #eee; color: #2C2C2C; font-weight: 500;">${Business || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Email</td>
                <td style="padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 500;">
                  <a href="mailto:${Email}" style="color: #C6A87C; text-decoration: none;">${Email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Phone</td>
                <td style="padding: 15px 0; border-bottom: 1px solid #eee; color: #2C2C2C; font-weight: 500;">${Phone || 'Not provided'}</td>
              </tr>
            </table>

            <div style="margin-top: 40px; text-align: center;">
              <a href="mailto:${Email}" style="display: inline-block; background-color: #2C2C2C; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Reply to Customer</a>
            </div>
            
            <p style="margin-top: 40px; margin-bottom: 0; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
              This email was automatically generated from the DMD GOLD contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
