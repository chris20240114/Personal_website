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
  app/                    Route pages, metadata, and API routes
  app/api/contact/route.ts Clear backend route for the contact form
  backend/contact.ts       Clear backend validation/handling file
  components/              Shared server-safe UI components
  content/                 Editable portfolio data
  frontend/                Client-side frontend features
```

## Edit Your Content

- Update name, email, GitHub, LinkedIn, and resume path in `src/content/site.ts`.
- Update project case studies in `src/content/projects.ts`.
- Update skills and evidence mappings in `src/content/skills.ts`.
- Add or edit writing posts in `src/content/posts.ts`.
- Replace visual assets in `public/projects`.
- Replace the resume PDF at `public/resume.pdf`.

## Getting Started

```bash
npm install
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
4. Add environment variables if you later connect the contact form to an email service.
5. Deploy.

The contact API currently validates submissions and logs them on the server. To send email, extend `src/backend/contact.ts` with Resend, SendGrid, Postmark, or your preferred provider.
