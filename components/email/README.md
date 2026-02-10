# Email Templates for Mobutu Zemanga Website

Professional email templates with matching branding (gold, green, black color scheme from the coat of arms).

## 📧 Available Templates

### 1. **ContactNotificationTemplate**
Sends a notification to the site owner when someone submits the contact form.

### 2. **AutoReplyTemplate**
Sends an automatic response to the person who submitted the contact form.

### 3. **WelcomeEmailTemplate**
Sends a welcome email with general information about services.

### 4. **EmailTemplate** (Base)
Customizable base template for any other email needs.

## 🚀 Quick Start

### Option 1: Using Resend (Recommended)

**Why Resend?**
- Modern, simple API
- Built for React and Next.js
- 100 free emails/day
- No credit card required to start
- Best developer experience

**Setup:**

```bash
npm install resend
```

Add to `.env.local`:
```env
RESEND_API_KEY=re_your_key_here
```

Get your API key: https://resend.com

**Update `app/api/contact/route.ts`:**
Uncomment the Resend section (METHOD 1) in the file.

### Option 2: Using Nodemailer (Traditional SMTP)

**Good for:**
- Using existing email accounts (Gmail, Outlook, etc.)
- Custom SMTP servers

**Setup:**

```bash
npm install nodemailer @react-email/render
npm install --save-dev @types/nodemailer
```

Add to `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

**For Gmail:**
1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the app password in `SMTP_PASSWORD`

**Update `app/api/contact/route.ts`:**
Uncomment the Nodemailer section (METHOD 2) in the file.

### Option 3: Using SendGrid

**Good for:**
- High volume emails
- Advanced email analytics
- 100 emails/day free

**Setup:**

```bash
npm install @sendgrid/mail @react-email/render
```

Add to `.env.local`:
```env
SENDGRID_API_KEY=your_key_here
```

Get your API key: https://sendgrid.com

**Update `app/api/contact/route.ts`:**
Uncomment the SendGrid section (METHOD 3) in the file.

## 📝 Usage Examples

### Example 1: Send Contact Notification

```typescript
import { ContactNotificationTemplate } from '@/components/email/EmailTemplate';

// With Resend
await resend.emails.send({
  from: 'Site Web <noreply@mobutuzemanga.com>',
  to: 'info@mobutuzemanga.com',
  subject: `Nouveau message de ${name}`,
  react: ContactNotificationTemplate({
    senderName: 'Jean Dupont',
    senderEmail: 'jean@example.com',
    message: 'Je souhaite en savoir plus sur vos services...'
  }),
});
```

### Example 2: Send Auto-Reply

```typescript
import { AutoReplyTemplate } from '@/components/email/EmailTemplate';

await resend.emails.send({
  from: 'Mobutu Zemanga <info@mobutuzemanga.com>',
  to: 'client@example.com',
  subject: 'Confirmation de réception de votre message',
  react: AutoReplyTemplate({ recipientName: 'Jean' }),
});
```

### Example 3: Custom Email

```typescript
import { EmailTemplate } from '@/components/email/EmailTemplate';

await resend.emails.send({
  from: 'Mobutu Zemanga <info@mobutuzemanga.com>',
  to: 'recipient@example.com',
  subject: 'Votre sujet ici',
  react: EmailTemplate({
    recipientName: 'Jean',
    content: '<p>Votre contenu HTML ici...</p>',
    ctaText: 'Voir mon site',
    ctaUrl: 'https://mobutuzemanga.com',
    showSignature: true
  }),
});
```

## 🔗 Integration with Current Contact Form

You have two options:

### Option A: Keep Web3Forms + Add Styled Emails

Your contact form currently uses Web3Forms. You can keep it and add styled emails:

```typescript
// In Contact.tsx
async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  if (formData.honeypot) return;

  setLoading(true);
  setError("");

  try {
    // Keep existing Web3Forms
    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '60703374-0885-4d4c-91be-907d9cf8423a',
        subject: 'Nouveau message depuis mobutuzemanga.com',
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    // Add styled email via your API
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await web3Response.json();
    if (data.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    }
  } catch (err) {
    setError("Impossible d'envoyer le message.");
  } finally {
    setLoading(false);
  }
}
```

### Option B: Replace Web3Forms Completely

```typescript
// In Contact.tsx
async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  if (formData.honeypot) return;

  setLoading(true);
  setError("");

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } else {
      setError(data.error || "Une erreur est survenue.");
    }
  } catch (err) {
    setError("Impossible d'envoyer le message.");
  } finally {
    setLoading(false);
  }
}
```

## 🎨 Customization

### Update Colors

Edit the `colors` object in `EmailTemplate.tsx`:

```typescript
const colors = {
  gold: '#d4a017',
  green: '#1a5f2a',
  black: '#1a1a1a',
  // ... etc
};
```

### Update Configuration

Edit the `config` object in `EmailTemplate.tsx`:

```typescript
const config = {
  name: 'Mobutu Zemanga',
  email: 'info@mobutuzemanga.com',
  phone: '+243 85 290 82 97',
  website: 'https://mobutuzemanga.com',
  motto: 'Ad majoribus dei auxilio',
  // ... etc
};
```

### Change Logo/Image

The template uses `/images/ad-majoribus.webp` as the coat of arms. To change it:

1. Add your image to the `public/images/` directory
2. Update the `src` attribute in the template:

```typescript
<img
  src={`${config.website}/images/your-image.png`}
  alt="Blason Mobutu Zemanga"
  style={styles.logo}
/>
```

## 🧪 Testing

### Test Locally

```bash
# Start the dev server
npm run dev

# Test the API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Preview Emails

Install React Email CLI for previewing:

```bash
npm install -D @react-email/cli
```

Add to `package.json`:

```json
{
  "scripts": {
    "email:preview": "email dev"
  }
}
```

Run:
```bash
npm run email:preview
```

## 📚 Resources

- [Resend Documentation](https://resend.com/docs)
- [Nodemailer Documentation](https://nodemailer.com)
- [SendGrid Documentation](https://docs.sendgrid.com)
- [React Email](https://react.email)

## 🔒 Security Notes

1. **Never commit API keys** - Use `.env.local` and add it to `.gitignore`
2. **Validate input** - Always validate form data before sending emails
3. **Rate limiting** - Consider adding rate limiting to prevent abuse
4. **Honeypot** - The contact form already has a honeypot field (good!)

## 📧 Email Deliverability Tips

1. **Verify your domain** - Set up SPF, DKIM, and DMARC records
2. **Use a custom domain** - Don't send from @gmail.com in production
3. **Warm up gradually** - Start with low volume and increase slowly
4. **Monitor bounces** - Check for and remove invalid email addresses
5. **Avoid spam triggers** - Test your content with mail-tester.com

## 🆘 Troubleshooting

### Emails not sending

1. Check API key is set correctly in `.env.local`
2. Check server logs for errors
3. Verify your email service is configured properly
4. Test with a simple email first

### Emails going to spam

1. Verify your domain
2. Set up SPF/DKIM/DMARC records
3. Use a dedicated sending domain
4. Check content with https://mail-tester.com

### Gmail App Password not working

1. Enable 2-factor authentication first
2. Generate a new App Password
3. Use the 16-character password (no spaces)
4. Make sure "Less secure app access" is not blocking it

## 💡 Next Steps

1. Choose an email service (Resend recommended)
2. Install required packages
3. Add API keys to `.env.local`
4. Uncomment the appropriate section in `app/api/contact/route.ts`
5. Test with the contact form
6. Deploy and verify in production

---

For questions or issues, contact: info@mobutuzemanga.com
