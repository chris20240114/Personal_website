import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Recruiter-friendly resume summary and embedded PDF.",
};

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Resume"
          title="Backend-focused full-stack engineer"
          description="A quick recruiter summary is included here, with the full resume embedded below for review and download."
        />
        <ButtonLink href={site.resumePath} external variant="primary">
          Download PDF
        </ButtonLink>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          "Backend architecture with FastAPI, GraphQL, PostgreSQL, Supabase, and Neo4j.",
          "Full-stack product experience across Django, React, Next.js, Tailwind CSS, and deployment.",
          "ML/data and research automation with Python, pandas, scikit-learn, regex, and technical communication.",
        ].map((item) => (
          <div className="rounded-lg border border-zinc-200 bg-white/72 p-5 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-white/[0.04] dark:text-zinc-300" key={item}>
            {item}
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-soft dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-soft-dark">
        <iframe className="h-[78vh] w-full" src={site.resumePath} title="Embedded resume PDF" />
      </div>
    </Container>
  );
}
