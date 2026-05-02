import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import { ContactForm } from "@/frontend/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chris for software engineering roles, internships, projects, or technical conversations.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let us talk about software, systems, or internships."
            description="Best for SWE internships, backend/full-stack roles, research automation, and project conversations."
          />
          <div className="mt-8 space-y-3">
            <ButtonLink href={`mailto:${site.email}`} external>
              {site.email}
            </ButtonLink>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={site.github} external>
                GitHub
              </ButtonLink>
              <ButtonLink href={site.linkedin} external>
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
