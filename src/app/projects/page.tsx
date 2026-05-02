import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";
import { ProjectsExplorer } from "@/frontend/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Searchable project case studies across backend, full-stack, ML/data, research, and frontend work.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Searchable case studies"
        description="Filter by category or search by project, role, and technology. Each project opens into a deeper technical write-up."
      />
      <div className="mt-8">
        <ProjectsExplorer projects={projects} />
      </div>
    </Container>
  );
}
