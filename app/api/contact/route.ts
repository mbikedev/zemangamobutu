import { NextResponse } from 'next/server';

// This is an example API route for sending emails
// Choose one of the following methods:

// ============================================
// METHOD 1: Using Resend (Recommended - Modern & Simple)
// ============================================
// 1. Install: npm install resend
// 2. Get API key from: https://resend.com
// 3. Add to .env.local: RESEND_API_KEY=your_key_here
// 4. Uncomment the code below:

/*
import { Resend } from 'resend';
import { ContactNotificationTemplate, AutoReplyTemplate } from '@/components/email/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification to site owner
    const notificationResult = await resend.emails.send({
      from: 'Site Web <noreply@mobutuzemanga.com>',
      to: 'info@mobutuzemanga.com',
      subject: `Nouveau message de ${name}`,
      react: ContactNotificationTemplate({
        senderName: name,
        senderEmail: email,
        message
      }),
    });

    // Send auto-reply to sender
    const autoReplyResult = await resend.emails.send({
      from: 'Mobutu Zemanga <info@mobutuzemanga.com>',
      to: email,
      subject: 'Confirmation de réception de votre message',
      react: AutoReplyTemplate({ recipientName: name }),
    });

    return NextResponse.json({
      success: true,
      notificationId: notificationResult.data?.id,
      autoReplyId: autoReplyResult.data?.id,
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
*/

// ============================================
// METHOD 2: Using Nodemailer (Traditional SMTP)
// ============================================
// 1. Install: npm install nodemailer @react-email/render
// 2. Install types: npm install --save-dev @types/nodemailer
// 3. Add SMTP credentials to .env.local:
//    SMTP_HOST=smtp.gmail.com
//    SMTP_PORT=465
//    SMTP_USER=your-email@gmail.com
//    SMTP_PASSWORD=your-app-password
// 4. Uncomment the code below:

/*
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ContactNotificationTemplate, AutoReplyTemplate } from '@/components/email/EmailTemplate';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Render email templates to HTML
    const notificationHtml = await render(
      await ContactNotificationTemplate({
        senderName: name,
        senderEmail: email,
        message
      })
    );

    const autoReplyHtml = await render(
      await AutoReplyTemplate({ recipientName: name })
    );

    // Send notification to site owner
    await transporter.sendMail({
      from: '"Site Web Mobutu Zemanga" <noreply@mobutuzemanga.com>',
      to: 'info@mobutuzemanga.com',
      subject: `Nouveau message de ${name}`,
      html: notificationHtml,
    });

    // Send auto-reply to sender
    await transporter.sendMail({
      from: '"Mobutu Zemanga" <info@mobutuzemanga.com>',
      to: email,
      subject: 'Confirmation de réception de votre message',
      html: autoReplyHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
*/

// ============================================
// METHOD 3: Using SendGrid
// ============================================
// 1. Install: npm install @sendgrid/mail @react-email/render
// 2. Get API key from: https://sendgrid.com
// 3. Add to .env.local: SENDGRID_API_KEY=your_key_here
// 4. Uncomment the code below:

/*
import sgMail from '@sendgrid/mail';
import { render } from '@react-email/render';
import { ContactNotificationTemplate, AutoReplyTemplate } from '@/components/email/EmailTemplate';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Render email templates to HTML
    const notificationHtml = await render(
      await ContactNotificationTemplate({
        senderName: name,
        senderEmail: email,
        message
      })
    );

    const autoReplyHtml = await render(
      await AutoReplyTemplate({ recipientName: name })
    );

    // Send notification to site owner
    await sgMail.send({
      from: 'noreply@mobutuzemanga.com',
      to: 'info@mobutuzemanga.com',
      subject: `Nouveau message de ${name}`,
      html: notificationHtml,
    });

    // Send auto-reply to sender
    await sgMail.send({
      from: 'info@mobutuzemanga.com',
      to: email,
      subject: 'Confirmation de réception de votre message',
      html: autoReplyHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
*/

// ============================================
// METHOD 4: Using LWS SMTP (ACTIVE)
// ============================================
// LWS hosting with webmail - CONFIGURED AND ACTIVE

import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ContactNotificationTemplate, AutoReplyTemplate } from '@/components/email/EmailTemplate';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.lws.fr',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER, // Your LWS email: info@mobutuzemanga.com
    pass: process.env.SMTP_PASSWORD, // Your LWS email password
  },
  tls: {
    rejectUnauthorized: false // For development, remove in production if SSL works
  }
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Render email templates to HTML
    const notificationHtml = await render(
      await ContactNotificationTemplate({
        senderName: name,
        senderEmail: email,
        message
      })
    );

    const autoReplyHtml = await render(
      await AutoReplyTemplate({ recipientName: name })
    );

    // Send notification to you (site owner)
    await transporter.sendMail({
      from: `"Site Web Mobutu Zemanga" <${process.env.SMTP_USER}>`,
      to: 'info@mobutuzemanga.com',
      subject: `Nouveau message de ${name}`,
      html: notificationHtml,
      replyTo: email, // So you can reply directly to the sender
    });

    // Send auto-reply to sender
    await transporter.sendMail({
      from: `"Mobutu Zemanga" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Confirmation de réception de votre message',
      html: autoReplyHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Emails sent successfully'
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
