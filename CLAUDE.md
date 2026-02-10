# CLAUDE.md - Mobutu Zemanga Website

## Project Overview

Professional portfolio/business website for Mobutu Zemanga. Single-page French-language site with contact form and branded email notifications.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19, TypeScript (strict)
- **Styling**: Tailwind CSS v4, shadcn/ui (New York style, RSC-enabled)
- **Email**: Nodemailer + @react-email/render via LWS SMTP (smtp.lws.fr:587)
- **Deployment**: Netlify with @netlify/plugin-nextjs
- **Icons**: Lucide React

## Project Structure

```
app/
  api/contact/route.ts    # POST endpoint: sends notification + auto-reply emails
  layout.tsx               # Root layout with fonts
  page.tsx                 # Home page (assembles all sections)
  globals.css              # Global styles + Tailwind theme
components/
  email/EmailTemplate.tsx  # Branded email templates
  ui/                      # shadcn/ui primitives (button, card, input, etc.)
  Header.tsx, Hero.tsx, About.tsx, Services.tsx, Contact.tsx, Footer.tsx
  CoatOfArms.tsx           # Custom SVG component
lib/
  utils.ts                 # cn() utility (clsx + twMerge)
public/images/             # Static assets
```

## Key Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Conventions

- **File naming**: PascalCase for components, camelCase for utilities
- **Imports**: Use `@/` path alias (e.g., `@/components/ui/button`, `@/lib/utils`)
- **Components**: Default exports for page sections, named exports for UI primitives
- **Client vs Server**: Use `"use client"` only for interactive components (Header, Contact). Static sections are Server Components by default.
- **Language**: All user-facing content is in French
- **Styling**: Utility-first Tailwind classes, `cn()` for conditional classes

## Environment Variables

Required in `.env.local` (and Netlify dashboard for production):

```
SMTP_HOST=smtp.lws.fr
SMTP_PORT=587
SMTP_USER=info@mobutuzemanga.com
SMTP_PASSWORD=<password>
```

## Brand Colors

- Gold: `#d4a017`
- Green: `#1a5f2a`
- Black: `#1a1a1a`

## Important Notes

- No database — all content is hardcoded, contact form sends emails only
- Images are unoptimized in next.config.ts (required for Netlify static hosting)
- Contact form includes honeypot field for spam protection
- Email recipient: info@mobutuzemanga.com
- Site URL: https://mobutuzemanga.com (Netlify)
