import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { skillEvidence } from "@/content/skills";
import { PortfolioAssistant } from "@/frontend/portfolio-assistant";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-14 sm:pb-10 sm:pt-16 lg:pt-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="animate-fade-up">
              <p className="mb-5 inline-flex rounded-md border border-teal-700/20 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800 dark:border-teal-300/25 dark:bg-teal-300/10 dark:text-teal-200">
                {site.availability}
              </p>
              <h1 className="gradient-text max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                {site.name}
              </h1>
              <p className="mt-5 max-w-3xl text-2xl font-medium leading-snug text-zinc-800 dark:text-zinc-100">{site.role}</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{site.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
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

            <aside className="float-slow relative overflow-hidden rounded-lg border border-zinc-200 bg-white/78 p-5 shadow-soft backdrop-blur dark:border-zinc-800 dark:bg-white/[0.04] dark:shadow-soft-dark">
              <div className="absolute inset-x-6 top-0 h-px origin-left bg-gradient-to-r from-teal-400 via-amber-300 to-transparent pulse-line" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">System snapshot</p>
              <div className="mt-5 rounded-lg border border-zinc-200 bg-paper p-4 font-mono text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                <p>
                  <span className="text-teal-700 dark:text-teal-300">$</span> inspect --portfolio
                </p>
                <div className="mt-4 space-y-2">
                  <p>backend: FastAPI / GraphQL / Postgres / Neo4j</p>
                  <p>ai: PitchCoach / LLM feedback / multimodal signals</p>
                  <p>data: 200k+ records / fairness analysis</p>
                  <p>ship: Django marketplace / internal tools</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ["8", "project write-ups"],
                  ["5", "skill lanes"],
                  ["1", "AI assistant"],
                ].map(([value, label]) => (
                  <div className="rounded-lg border border-zinc-200 bg-white/70 p-3 text-center dark:border-zinc-800 dark:bg-white/[0.04]" key={label}>
                    <p className="text-2xl font-semibold text-ink dark:text-zinc-50">{value}</p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Container>
        <PortfolioAssistant />
      </Container>

      <section className="reveal py-10 sm:py-12">
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

      <section className="reveal py-14">
        <Container>
          <SectionHeading
            eyebrow="Skills by evidence"
            title="Not a keyword wall"
            description="Each skill area is tied to project evidence so recruiters can scan quickly and engineers can inspect the details."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillEvidence.map((item) => (
              <Link
                className="lux-card relative overflow-hidden rounded-lg border border-zinc-200 bg-white/72 p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-soft dark:border-zinc-800 dark:bg-white/[0.04] dark:hover:border-teal-300/60"
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

      <section className="reveal py-14">
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
