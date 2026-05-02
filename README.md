# Chris Shen Portfolio

A polished personal portfolio for software engineering internships and full-stack/backend roles. It is built with Next.js, React, TypeScript, and Tailwind CSS, with structured content files so projects, skills, links, and resume details are easy to update.

Live site hosted with vercel: https://homeofchris.vercel.app/

## Features

- Modern responsive portfolio UI
- Dark mode toggle
- Animated hero, cards, and reveal-on-scroll polish
- Recruiter-friendly homepage
- Searchable and filterable projects page
- Detailed project case-study pages
- Resume page with embedded PDF
- Contact form with server-side validation and Resend email delivery
- Portfolio assistant that answers questions from local project and skills data
- SEO metadata, favicon, and Open Graph basics

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vercel deployment
- Resend for contact form email

## Project Structure

```txt
src/
  app/                       Pages, metadata, layouts, and API routes
  app/api/ask/route.ts       Portfolio assistant API route
  app/api/contact/route.ts   Contact form API route
  backend/                   Server-side logic
  backend/contact.ts         Contact validation and Resend email sending
  backend/portfolio-assistant.ts
                             Grounded Q&A over local portfolio data
  components/                Shared UI components
  content/                   Editable portfolio content
  frontend/                  Client-side interactive features
  frontend/contact-form.tsx  Contact form behavior
  frontend/portfolio-assistant.tsx
                             Homepage portfolio assistant UI
```

See `ARCHITECTURE.md` for more detail on the frontend/backend split.

## Edit Content

- Profile, email, GitHub, LinkedIn, and resume path: `src/content/site.ts`
- Project write-ups: `src/content/projects.ts`
- Skills and evidence mappings: `src/content/skills.ts`
- Resume PDF: `public/resume.pdf`
- Favicon: `public/favicon.svg`

To add a new project, add an object to the `projects` array in `src/content/projects.ts`. The project detail page is generated automatically from the slug.

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

```txt
http://localhost:3000
```

Stop the dev server with `Ctrl + C`.

## Useful Commands

```bash
npm run dev        # Start local dev server
npm run build      # Production build
npm run start      # Run production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

## Environment Variables

Create `.env.local` from `.env.example`.

For local development, the site works without email credentials. The contact form will only send real email when `RESEND_API_KEY` is configured.

```txt
NEXT_PUBLIC_SITE_URL=https://your-vercel-url.vercel.app
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAILS=christopher.cs.shen@gmail.com
CONTACT_FROM_EMAIL=Chris Shen Portfolio <onboarding@resend.dev>
```

If using Resend without a custom domain, use `onboarding@resend.dev` for testing. Resend may restrict this sender to the email address associated with the Resend account.

## Portfolio Assistant

The homepage includes an "Ask my work directly" assistant. It answers from local structured data in `src/content/projects.ts` and `src/content/skills.ts` through `src/app/api/ask/route.ts`.

It does not require an AI provider key right now. To upgrade it later to Gemini/OpenAI, replace the answer-generation logic in `src/backend/portfolio-assistant.ts` while keeping the same API response shape.

## Deploy To Vercel

1. Push the repo to GitHub.
2. Import the repo in Vercel.
3. Keep the framework preset as Next.js.
4. Add environment variables in Vercel Project Settings.
5. Deploy.

After the first deploy, copy the Vercel URL and set:

```txt
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
```

Then redeploy.

## Redeploy

If the Vercel project is connected to GitHub, redeploy by pushing changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically create a new deployment.

## Notes

- A custom domain is optional. The free Vercel domain is fine.
- Do not commit `.env.local`.
- If a Resend API key is exposed in a screenshot or commit, revoke it and create a new one.
