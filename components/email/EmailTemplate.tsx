// Email Template for Mobutu Zemanga Website
// This template can be used with React Email or similar libraries
// Compatible with services like Resend, SendGrid, Nodemailer

import * as React from 'react';

// ============================================
// CONFIGURATION
// ============================================

const config = {
  name: 'Mobutu Zemanga',
  email: 'info@mobutuzemanga.com',
  phone: '+243 85 290 82 97',
  website: 'https://mobutuzemanga.com',
  // Use Netlify URL for email images (more reliable)
  emailBaseUrl: 'https://zemanga.netlify.app',
  motto: 'Ad majoribus dei auxilio',
  mottoTranslation: 'Avec l\'aide de Dieu et des ancêtres',
  titles: [
    'Chef d\'Entreprises',
    'Dirigeant d\'ONGs',
    'Directeur de Centres de Recherches',
    'Consultant International'
  ]
};

// ============================================
// COLOR PALETTE (matching the coat of arms)
// ============================================

const colors = {
  gold: '#d4a017',
  goldLight: '#e8c547',
  goldDark: '#b8860b',
  green: '#1a5f2a',
  greenLight: '#2d8a42',
  greenDark: '#145224',
  black: '#1a1a1a',
  white: '#ffffff',
  gray: '#f5f5f5',
  grayMedium: '#666666',
  grayDark: '#333333',
};

// ============================================
// INLINE STYLES (for email compatibility)
// ============================================

const styles = {
  // Container
  body: {
    backgroundColor: colors.gray,
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    margin: 0,
    padding: 0,
    width: '100%',
  },
  container: {
    backgroundColor: colors.white,
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },

  // Header
  header: {
    backgroundColor: colors.black,
    padding: '30px 40px',
    textAlign: 'center' as const,
  },
  headerBorder: {
    height: '4px',
    background: `linear-gradient(90deg, ${colors.green} 0%, ${colors.gold} 50%, ${colors.green} 100%)`,
  },
  logo: {
    width: '80px',
    height: 'auto',
    marginBottom: '15px',
  },
  headerName: {
    color: colors.gold,
    fontSize: '28px',
    fontWeight: 'bold' as const,
    letterSpacing: '3px',
    margin: '0 0 8px 0',
    textTransform: 'uppercase' as const,
  },
  headerMotto: {
    color: colors.white,
    fontSize: '14px',
    fontStyle: 'italic' as const,
    margin: 0,
    opacity: 0.8,
  },

  // Content
  content: {
    padding: '40px',
  },
  greeting: {
    fontSize: '18px',
    color: colors.grayDark,
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: colors.grayMedium,
    marginBottom: '20px',
  },

  // Highlight Box
  highlightBox: {
    backgroundColor: colors.gray,
    borderLeft: `4px solid ${colors.gold}`,
    padding: '20px 25px',
    margin: '25px 0',
  },
  highlightText: {
    fontSize: '15px',
    color: colors.grayDark,
    margin: 0,
    lineHeight: '1.6',
  },

  // Button
  buttonContainer: {
    textAlign: 'center' as const,
    margin: '30px 0',
  },
  button: {
    backgroundColor: colors.green,
    color: colors.white,
    padding: '14px 35px',
    fontSize: '16px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    borderRadius: '4px',
    display: 'inline-block',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    color: colors.gold,
    padding: '12px 30px',
    fontSize: '14px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    borderRadius: '4px',
    display: 'inline-block',
    border: `2px solid ${colors.gold}`,
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  },

  // Divider
  divider: {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '30px 0',
  },
  dividerGold: {
    height: '2px',
    background: `linear-gradient(90deg, transparent 0%, ${colors.gold} 50%, transparent 100%)`,
    margin: '30px auto',
    width: '60%',
  },

  // Signature
  signature: {
    marginTop: '30px',
  },
  signatureName: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: colors.grayDark,
    margin: '0 0 5px 0',
  },
  signatureTitle: {
    fontSize: '14px',
    color: colors.gold,
    margin: '0 0 15px 0',
    fontStyle: 'italic' as const,
  },
  signatureContact: {
    fontSize: '13px',
    color: colors.grayMedium,
    margin: '3px 0',
  },

  // Footer
  footer: {
    backgroundColor: colors.black,
    padding: '30px 40px',
    textAlign: 'center' as const,
  },
  footerText: {
    color: colors.white,
    fontSize: '12px',
    margin: '0 0 10px 0',
    opacity: 0.7,
  },
  footerMotto: {
    color: colors.gold,
    fontSize: '13px',
    fontStyle: 'italic' as const,
    margin: '15px 0 0 0',
  },
  socialLinks: {
    margin: '20px 0',
  },
  socialIcon: {
    display: 'inline-block',
    margin: '0 10px',
    width: '30px',
    height: '30px',
  },

  // Titles list
  titlesList: {
    listStyle: 'none' as const,
    padding: 0,
    margin: '15px 0',
  },
  titlesItem: {
    fontSize: '13px',
    color: colors.grayMedium,
    padding: '3px 0',
  },
};

// ============================================
// EMAIL COMPONENTS
// ============================================

interface EmailTemplateProps {
  recipientName: string;
  subject?: string;
  content: string;
  ctaText?: string;
  ctaUrl?: string;
  showSignature?: boolean;
}

// Main Email Template Component
export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  recipientName,
  content,
  ctaText,
  ctaUrl,
  showSignature = true,
}) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Message de {config.name}</title>
      </head>
      <body style={styles.body}>
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            {/* Coat of Arms - replace with actual image URL when deployed */}
            <img
              src={`${config.emailBaseUrl}/images/ad-majoribus.webp`}
              alt="Blason Mobutu Zemanga"
              style={styles.logo}
            />
            <h1 style={styles.headerName}>{config.name}</h1>
            <p style={styles.headerMotto}>{config.motto}</p>
          </div>
          <div style={styles.headerBorder} />

          {/* Content */}
          <div style={styles.content}>
            <p style={styles.greeting}>
              Cher(e) {recipientName},
            </p>

            <div
              style={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* CTA Button */}
            {ctaText && ctaUrl && (
              <div style={styles.buttonContainer}>
                <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
                  <tr>
                    <td style={{
                      backgroundColor: colors.green,
                      borderRadius: '4px',
                      textAlign: 'center' as const,
                    }}>
                      <a
                        href={ctaUrl}
                        style={{
                          backgroundColor: colors.green,
                          color: colors.white,
                          padding: '14px 35px',
                          fontSize: '16px',
                          fontWeight: 'bold' as const,
                          textDecoration: 'none',
                          borderRadius: '4px',
                          display: 'inline-block',
                          textTransform: 'uppercase' as const,
                          letterSpacing: '1px',
                        }}
                      >
                        {ctaText}
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            )}

            <div style={styles.dividerGold} />

            {/* Signature */}
            {showSignature && (
              <div style={styles.signature}>
                <p style={styles.signatureName}>{config.name}</p>
                <p style={styles.signatureTitle}>
                  {config.titles[0]} • {config.titles[3]}
                </p>
                <p style={styles.signatureContact}>
                  📧 {config.email}
                </p>
                <p style={styles.signatureContact}>
                  📞 {config.phone}
                </p>
                <p style={styles.signatureContact}>
                  🌐 {config.website}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div style={styles.footer}>
            <p style={styles.footerText}>
              {config.titles.join(' • ')}
            </p>
            <p style={styles.footerText}>
              © {new Date().getFullYear()} {config.name}. Tous droits réservés.
            </p>
            <p style={styles.footerMotto}>
              « {config.motto} »
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

// ============================================
// CONTACT FORM NOTIFICATION TEMPLATE
// ============================================

interface ContactNotificationProps {
  senderName: string;
  senderEmail: string;
  message: string;
  date?: string;
}

export const ContactNotificationTemplate: React.FC<ContactNotificationProps> = ({
  senderName,
  senderEmail,
  message,
  date = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }),
}) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nouveau message - {config.name}</title>
      </head>
      <body style={styles.body}>
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <img
              src={`${config.emailBaseUrl}/images/ad-majoribus.webp`}
              alt="Blason Mobutu Zemanga"
              style={styles.logo}
            />
            <h1 style={styles.headerName}>Nouveau Message</h1>
            <p style={styles.headerMotto}>via {config.website}</p>
          </div>
          <div style={styles.headerBorder} />

          {/* Content */}
          <div style={styles.content}>
            <p style={styles.greeting}>
              Vous avez reçu un nouveau message depuis votre site web.
            </p>

            {/* Sender Info */}
            <div style={styles.highlightBox}>
              <p style={{ ...styles.highlightText, marginBottom: '10px' }}>
                <strong>De :</strong> {senderName}
              </p>
              <p style={{ ...styles.highlightText, marginBottom: '10px' }}>
                <strong>Email :</strong>{' '}
                <a
                  href={`mailto:${senderEmail}?subject=Re: Message depuis ${config.website}`}
                  style={{
                    color: colors.gold,
                    fontWeight: 'bold' as const,
                    textDecoration: 'underline'
                  }}
                >
                  {senderEmail}
                </a>
              </p>
              <p style={styles.highlightText}>
                <strong>Date :</strong> {date}
              </p>
              <p style={{
                ...styles.highlightText,
                marginTop: '15px',
                fontSize: '14px',
                fontStyle: 'italic' as const,
                color: colors.green
              }}>
                💡 Cliquez sur l'adresse email ci-dessus pour répondre directement
              </p>
            </div>

            <div style={styles.divider} />

            {/* Message */}
            <h3 style={{ color: colors.grayDark, marginBottom: '15px' }}>
              Message :
            </h3>
            <p style={{ ...styles.paragraph, whiteSpace: 'pre-wrap' as const }}>
              {message}
            </p>

            {/* Reply Button */}
            <div style={styles.buttonContainer}>
              <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
                <tr>
                  <td style={{
                    backgroundColor: colors.green,
                    borderRadius: '4px',
                    textAlign: 'center' as const,
                  }}>
                    <a
                      href={`mailto:${senderEmail}?subject=Re: Message depuis ${config.website}`}
                      style={{
                        backgroundColor: colors.green,
                        color: colors.white,
                        padding: '14px 35px',
                        fontSize: '16px',
                        fontWeight: 'bold' as const,
                        textDecoration: 'none',
                        borderRadius: '4px',
                        display: 'inline-block',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '1px',
                      }}
                    >
                      Répondre
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div style={styles.footer}>
            <p style={styles.footerText}>
              Ce message a été envoyé via le formulaire de contact de votre site web.
            </p>
            <p style={styles.footerMotto}>
              « {config.motto} »
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

// ============================================
// WELCOME EMAIL TEMPLATE
// ============================================

interface WelcomeEmailProps {
  recipientName: string;
}

export const WelcomeEmailTemplate: React.FC<WelcomeEmailProps> = ({
  recipientName,
}) => {
  const content = `
    <p>Je vous remercie de l'intérêt que vous portez à mes services.</p>
    <p>Fort de mon expérience en tant que Chef d'Entreprises, Dirigeant d'ONGs,
    Directeur de Centres de Recherches et Consultant International, je me tiens
    à votre disposition pour discuter de vos projets et de la manière dont je
    pourrais vous accompagner.</p>
    <p>N'hésitez pas à me contacter directement pour toute demande particulière.</p>
  `;

  return (
    <EmailTemplate
      recipientName={recipientName}
      content={content}
      ctaText="Visiter mon site"
      ctaUrl={config.website}
      showSignature={true}
    />
  );
};

// ============================================
// AUTO-REPLY TEMPLATE
// ============================================

interface AutoReplyProps {
  recipientName: string;
}

export const AutoReplyTemplate: React.FC<AutoReplyProps> = ({
  recipientName,
}) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmation - {config.name}</title>
      </head>
      <body style={styles.body}>
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <img
              src={`${config.emailBaseUrl}/images/ad-majoribus.webp`}
              alt="Blason Mobutu Zemanga"
              style={styles.logo}
            />
            <h1 style={styles.headerName}>{config.name}</h1>
            <p style={styles.headerMotto}>{config.motto}</p>
          </div>
          <div style={styles.headerBorder} />

          {/* Content */}
          <div style={styles.content}>
            <p style={styles.greeting}>
              Cher(e) {recipientName},
            </p>

            <p style={styles.paragraph}>
              Je vous remercie pour votre message. J'ai bien reçu votre demande
              et je vous répondrai dans les plus brefs délais.
            </p>

            <div style={styles.highlightBox}>
              <p style={styles.highlightText}>
                Votre message est important pour moi. Je m'efforce de répondre
                à toutes les demandes sous 24 à 48 heures ouvrables.
              </p>
            </div>

            <p style={styles.paragraph}>
              En attendant, je vous invite à découvrir mon parcours et mes
              différentes activités sur mon site web.
            </p>

            <div style={styles.buttonContainer}>
              <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
                <tr>
                  <td style={{
                    backgroundColor: colors.green,
                    borderRadius: '4px',
                    textAlign: 'center' as const,
                  }}>
                    <a
                      href={config.website}
                      style={{
                        backgroundColor: colors.green,
                        color: colors.white,
                        padding: '14px 35px',
                        fontSize: '16px',
                        fontWeight: 'bold' as const,
                        textDecoration: 'none',
                        borderRadius: '4px',
                        display: 'inline-block',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '1px',
                      }}
                    >
                      Découvrir mon parcours
                    </a>
                  </td>
                </tr>
              </table>
            </div>

            <div style={styles.dividerGold} />

            {/* Signature */}
            <div style={styles.signature}>
              <p style={styles.signatureName}>{config.name}</p>
              <ul style={styles.titlesList}>
                {config.titles.map((title, index) => (
                  <li key={index} style={styles.titlesItem}>• {title}</li>
                ))}
              </ul>
              <p style={styles.signatureContact}>
                📧 {config.email}
              </p>
              <p style={styles.signatureContact}>
                📞 {config.phone}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div style={styles.footer}>
            <p style={styles.footerText}>
              Ceci est un message automatique. Merci de ne pas y répondre directement.
            </p>
            <p style={styles.footerText}>
              © {new Date().getFullYear()} {config.name}. Tous droits réservés.
            </p>
            <p style={styles.footerMotto}>
              « {config.motto} »
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

// ============================================
// EXPORT DEFAULT
// ============================================

export default EmailTemplate;

// ============================================
// USAGE EXAMPLES (for API routes)
// ============================================

/*
// Example 1: Using with Resend (Recommended)
// First install: npm install resend
// app/api/contact/route.ts

import { Resend } from 'resend';
import { ContactNotificationTemplate, AutoReplyTemplate } from '@/components/email/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    // Send notification to site owner
    await resend.emails.send({
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
    await resend.emails.send({
      from: 'Mobutu Zemanga <info@mobutuzemanga.com>',
      to: email,
      subject: 'Confirmation de réception de votre message',
      react: AutoReplyTemplate({ recipientName: name }),
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

// Example 2: Using with Nodemailer
// First install: npm install nodemailer @react-email/render
// app/api/contact/route.ts

import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ContactNotificationTemplate, AutoReplyTemplate } from '@/components/email/EmailTemplate';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    // Render email templates to HTML
    const notificationHtml = render(
      ContactNotificationTemplate({
        senderName: name,
        senderEmail: email,
        message
      })
    );

    const autoReplyHtml = render(
      AutoReplyTemplate({ recipientName: name })
    );

    // Send notification to site owner
    await transporter.sendMail({
      from: '"Site Web" <noreply@mobutuzemanga.com>',
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

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

// Example 3: Integration with existing Web3Forms
// Update your Contact.tsx component to also send styled emails

async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  if (formData.honeypot) return;

  setLoading(true);
  setError("");

  try {
    // Send via Web3Forms (existing functionality)
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '60703374-0885-4d4c-91be-907d9cf8423a',
        subject: 'Nouveau message depuis mobutuzemanga.com',
        from_name: formData.name,
        email: formData.email,
        replyto: formData.email,
        'Message': formData.message,
      }),
    });

    // Also send styled email via your API route
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (web3formsResponse.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    }
  } catch (err) {
    setError("Impossible d'envoyer le message.");
  } finally {
    setLoading(false);
  }
}
*/
