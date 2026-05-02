import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { WorkflowDiagram } from "@/components/diagram";
import { projects, getProjectBySlug } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_0.25fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
            {project.category.replace("-", " ")} case study
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-zinc-50 sm:text-6xl">{project.title}</h1>
          <p className="mt-4 text-xl leading-8 text-zinc-700 dark:text-zinc-200">{project.subtitle}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">{project.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">All projects</ButtonLink>
            {project.links.map((link) => (
              <ButtonLink href={link.href} external key={link.label}>
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border border-zinc-200 bg-white/72 p-5 dark:border-zinc-800 dark:bg-white/[0.04]">
          <dl className="space-y-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Role</dt>
              <dd className="mt-2 text-sm font-medium text-ink dark:text-zinc-50">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Timeframe</dt>
              <dd className="mt-2 text-sm font-medium text-ink dark:text-zinc-50">{project.timeframe}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Tech stack</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300" key={item}>
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.62fr_0.38fr]">
        <CaseStudySection title="Problem / motivation" body={project.motivation} />
        <CaseStudyList title="Key technical challenges" items={project.challenges} />
      </div>

      <section className="mt-14">
        <CaseStudyKicker>Architecture / workflow</CaseStudyKicker>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-zinc-50">How the system fits together</h2>
        <div className="mt-6">
          <WorkflowDiagram steps={project.architecture} />
        </div>
      </section>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        <CaseStudyList title="What I built" items={project.built} />
        <CaseStudyList title="Outcomes / metrics" items={project.outcomes} />
        <CaseStudyList title="Lessons learned" items={project.lessons} />
      </div>

      <section className="mt-14">
        <CaseStudyKicker>Screenshots / media</CaseStudyKicker>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-zinc-50">Visual evidence placeholders</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Replace these panels with screenshots, demos, diagrams, or notebook exports as each artifact becomes ready for publishing.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {project.media.map((item) => (
            <div className="min-h-52 rounded-lg border border-zinc-200 bg-white/72 p-5 dark:border-zinc-800 dark:bg-white/[0.04]" key={item.title}>
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">Media</p>
                  <h3 className="mt-4 text-xl font-semibold text-ink dark:text-zinc-50">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.description}</p>
                </div>
                <div className="mt-6 h-2 rounded-full bg-gradient-to-r from-teal-400 via-amber-300 to-rose-300" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

function CaseStudyKicker({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">{children}</p>;
}

function CaseStudySection({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white/72 p-5 dark:border-zinc-800 dark:bg-white/[0.04]">
      <CaseStudyKicker>{title}</CaseStudyKicker>
      <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">{body}</p>
    </section>
  );
}

function CaseStudyList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white/72 p-5 dark:border-zinc-800 dark:bg-white/[0.04]">
      <CaseStudyKicker>{title}</CaseStudyKicker>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300" key={item}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
