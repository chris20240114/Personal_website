import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";
import { ProjectsExplorer } from "@/frontend/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Searchable technical project write-ups across backend, full-stack, ML/data, research, and frontend work.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Technical project write-ups"
        description="Filter by category or search by project, role, and technology. Each project opens into deeper implementation notes."
      />
      <div className="mt-8">
        <ProjectsExplorer projects={projects} />
      </div>
    </Container>
  );
}
