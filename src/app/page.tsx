import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { skillEvidence, skillGroups } from "@/content/skills";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="animate-fade-up">
              <p className="mb-5 inline-flex rounded-md border border-teal-700/20 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800 dark:border-teal-300/25 dark:bg-teal-300/10 dark:text-teal-200">
                {site.availability}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-ink dark:text-zinc-50 sm:text-6xl lg:text-7xl">
                {site.name}
              </h1>
              <p className="mt-5 max-w-3xl text-2xl font-medium leading-snug text-zinc-800 dark:text-zinc-100">{site.role}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{site.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/resume" variant="primary">
                  Resume
                </ButtonLink>
                <ButtonLink href={site.github} external>
                  GitHub
                </ButtonLink>
                <ButtonLink href={site.linkedin} external>
                  LinkedIn
                </ButtonLink>
                <ButtonLink href="/contact">Contact</ButtonLink>
              </div>
            </div>

            <aside className="rounded-lg border border-zinc-200 bg-white/72 p-5 shadow-soft dark:border-zinc-800 dark:bg-white/[0.04] dark:shadow-soft-dark">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">Focus</p>
              <div className="mt-5 space-y-4">
                {skillGroups.slice(0, 4).map((group) => (
                  <div key={group.label}>
                    <h2 className="text-sm font-semibold text-ink dark:text-zinc-50">{group.label}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{group.items.join(" / ")}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects with real engineering weight"
              description="Backend architecture, internal tooling, machine learning, research automation, and frontend work that shipped to real users."
            />
            <ButtonLink href="/projects">View all projects</ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Skills by evidence"
            title="Not a keyword wall"
            description="Each skill area is tied to project evidence so recruiters can scan quickly and engineers can inspect the details."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillEvidence.map((item) => (
              <Link
                className="rounded-lg border border-zinc-200 bg-white/72 p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-soft dark:border-zinc-800 dark:bg-white/[0.04] dark:hover:border-teal-300/60"
                href={item.href}
                key={item.skill}
              >
                <h3 className="text-lg font-semibold text-ink dark:text-zinc-50">{item.skill}</h3>
                <p className="mt-2 text-sm font-medium text-teal-700 dark:text-teal-300">{item.evidence}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.detail}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading eyebrow="Current direction" title="Currently building and interested in" />
              <div className="mt-6 space-y-3">
                {site.currently.map((item) => (
                  <div className="rounded-lg border border-zinc-200 bg-white/72 p-4 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-white/[0.04] dark:text-zinc-300" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Timeline" title="Recent work arc" />
              <div className="mt-6">
                <Timeline />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
