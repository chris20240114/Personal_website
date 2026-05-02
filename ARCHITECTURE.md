# Architecture

This portfolio keeps frontend and backend responsibilities separated while still using Next.js conventions.

## Frontend

Client-side interactive code lives in `src/frontend`.

- `theme-provider.tsx` and `theme-toggle.tsx`: dark mode state and UI.
- `command-palette.tsx`: keyboard-driven navigation.
- `projects-explorer.tsx`: project search and filtering.
- `contact-form.tsx`: client form state, validation display, and API submission.
- `index.ts`: clear frontend export surface.

Server-safe shared UI lives in `src/components`.

## Backend

Server-side logic lives in `src/backend`.

- `contact.ts`: contact validation, email formatting, and Resend delivery.
- `index.ts`: clear backend export surface.

Next.js API routes live in `src/app/api`.

- `src/app/api/contact/route.ts`: HTTP boundary for the contact form.

This keeps framework routing thin and puts real backend behavior in plain TypeScript files that are easy to test or move later.
