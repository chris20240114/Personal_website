import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = {
  title: "About",
  description: "Background, technical interests, teaching experience, and personal interests.",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="I like building the parts of software that make products dependable."
            description="My work tends to sit between backend systems, data-heavy workflows, and interfaces that make technical complexity easier to use."
          />
        </div>
        <div className="space-y-6 text-base leading-8 text-zinc-600 dark:text-zinc-300">
          <p>
            I am Chris, a developer focused on full-stack engineering with a backend and data systems tilt. I enjoy projects where the product depends on good architecture: clear APIs, thoughtful data modeling, reliable deployment, and interfaces that help people move faster.
          </p>
          <p>
            I have worked on graph-backed prompt tooling, internal workflow software, ML/data analysis over large records, reinforcement learning agents, research automation, and deployed web applications for real communities.
          </p>
          <p>
            Teaching and tutoring are also part of how I think. Explaining a concept forces me to make the structure visible, and that carries into how I write documentation, design APIs, and communicate project tradeoffs.
          </p>
          <p>
            Away from code, I like interests that reward patience and pattern recognition: chess, football, and violin. They keep showing up in the way I approach engineering: practice the fundamentals, read the position, and keep tempo.
          </p>
        </div>
      </div>

      <section className="mt-16">
        <SectionHeading eyebrow="Technical interests" title="Where I keep going deeper" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div className="rounded-lg border border-zinc-200 bg-white/72 p-5 dark:border-zinc-800 dark:bg-white/[0.04]" key={group.label}>
              <h2 className="font-semibold text-ink dark:text-zinc-50">{group.label}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Path" title="A practical engineering arc" />
        <div className="mt-8">
          <Timeline />
        </div>
      </section>
    </Container>
  );
}
