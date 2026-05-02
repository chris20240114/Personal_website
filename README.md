# Chris Portfolio

A polished personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. The site is designed for recruiter-friendly scanning while still giving engineers enough detail to evaluate projects seriously.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Server API route for the contact form
- Structured content files for easy editing

## Project Structure

```txt
src/
  app/                     Route pages, metadata, and API routes
  app/api/contact/route.ts HTTP backend route for the contact form
  backend/                 Clear backend files
  backend/contact.ts       Contact validation and email delivery
  frontend/                Clear frontend files
  frontend/contact-form.tsx Client contact form behavior
  components/              Shared server-safe UI components
  content/                 Editable portfolio data
```

See `ARCHITECTURE.md` for the frontend/backend split.

## Edit Your Content

- Update name, email, GitHub, LinkedIn, and resume path in `src/content/site.ts`.
- Update project case studies in `src/content/projects.ts`.
- Update skills and evidence mappings in `src/content/skills.ts`.
- Add or edit writing posts in `src/content/posts.ts`.
- Replace visual assets in `public/projects`.
- Replace the resume PDF at `public/resume.pdf`.
- Add project GitHub/demo links directly in each project's `links` array.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deployment

The simplest production path is Vercel:

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Set the framework preset to Next.js.
4. Add the environment variables from `.env.example`.
5. Deploy.

## Contact Form Email

The contact form sends email through Resend from `src/backend/contact.ts`.

Required production variables:

```txt
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAILS=cs.mizuwari@berkeley.edu,christopher.cs.shen@gmail.com
CONTACT_FROM_EMAIL=Chris Shen Portfolio <contact@your-domain.com>
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Before production, verify your sending domain in Resend and use that verified address for `CONTACT_FROM_EMAIL`.
