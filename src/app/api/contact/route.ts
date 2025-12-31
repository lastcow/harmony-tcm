import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // In a real application, you would send an email here using a service like:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES

    // For this demo, we'll simulate sending an email
    const emailData = {
      to: 'hello@harmonytcm.com', // Dummy recipient
      from: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      body: `
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone || 'Not provided'}
        Service Interest: ${body.service || 'Not specified'}

        Message:
        ${body.message}
      `,
    };

    // Log the email data (simulating email send)
    console.log('=== Contact Form Submission ===');
    console.log('To:', emailData.to);
    console.log('From:', emailData.from);
    console.log('Subject:', emailData.subject);
    console.log('Body:', emailData.body);
    console.log('==============================');

    // Simulate a small delay as if sending email
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
