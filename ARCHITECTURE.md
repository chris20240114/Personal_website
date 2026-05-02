# Architecture

This portfolio keeps frontend and backend responsibilities separated while still using Next.js conventions.

## Frontend

Client-side interactive code lives in `src/frontend`.

- `theme-provider.tsx` and `theme-toggle.tsx`: dark mode state and UI.
- `command-palette.tsx`: keyboard-driven navigation.
- `projects-explorer.tsx`: project search and filtering.
- `portfolio-assistant.tsx`: interactive portfolio Q&A surface.
- `contact-form.tsx`: client form state, validation display, and API submission.
- `scroll-reveal.tsx`: reveal-on-scroll animation behavior.
- `index.ts`: clear frontend export surface.

Server-safe shared UI lives in `src/components`.

## Backend

Server-side logic lives in `src/backend`.

- `contact.ts`: contact validation, email formatting, and Resend delivery.
- `portfolio-assistant.ts`: grounded project/skill Q&A over local portfolio data.
- `index.ts`: clear backend export surface.

Next.js API routes live in `src/app/api`.

- `src/app/api/contact/route.ts`: HTTP boundary for the contact form.
- `src/app/api/ask/route.ts`: HTTP boundary for the portfolio assistant.

This keeps framework routing thin and puts real backend behavior in plain TypeScript files that are easy to test or move later.
