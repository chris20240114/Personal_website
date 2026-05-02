import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { skillEvidence, skillGroups } from "@/content/skills";

export type PortfolioAssistantResult = {
  answer: string;
  suggestions: string[];
  sources: {
    title: string;
    href: string;
  }[];
};

const suggestions = [
  "Which projects show backend depth?",
  "Where does Chris use AI or machine learning?",
  "What should a recruiter look at first?",
  "Which projects involved real users or production constraints?",
];

export function answerPortfolioQuestion(question: string): PortfolioAssistantResult {
  const normalizedQuestion = question.trim().toLowerCase();
  const selectedProjects = rankProjects(normalizedQuestion).slice(0, 3);
  const selectedSkills = skillEvidence
    .filter((skill) => includesAny(normalizedQuestion, [skill.skill, skill.evidence, ...skill.detail.split(/[\s,/]+/)]))
    .slice(0, 2);

  if (!normalizedQuestion) {
    return {
      answer:
        "Ask about backend depth, AI work, ML/data projects, production experience, or which project to inspect first.",
      suggestions,
      sources: [],
    };
  }

  const intro = buildIntro(normalizedQuestion);
  const projectLines = selectedProjects.length
    ? selectedProjects.map((project) => `- ${project.title}: ${project.summary}`).join("\n")
    : "- Start with PitchCoach, PromptParty, and the Property Assessment ML Pipeline for the strongest technical signal.";
  const skillLines = selectedSkills.length
    ? `\n\nRelevant evidence:\n${selectedSkills.map((skill) => `- ${skill.skill}: ${skill.detail}`).join("\n")}`
    : "";

  return {
    answer: `${intro}\n\n${projectLines}${skillLines}`,
    suggestions,
    sources: selectedProjects.map((project) => ({
      title: project.title,
      href: `/projects/${project.slug}`,
    })),
  };
}

function buildIntro(question: string) {
  if (includesAny(question, ["ai", "llm", "gemini", "openai", "coach", "pitchcoach"])) {
    return `${site.name}'s strongest AI-product evidence is PitchCoach: it combines speech capture, webcam/audio signals, a Node backend, and LLM-ready feedback flows.`;
  }

  if (includesAny(question, ["backend", "api", "database", "graphql", "fastapi", "postgres", "neo4j"])) {
    return `${site.name}'s backend story is strongest around API design, database boundaries, and workflow systems.`;
  }

  if (includesAny(question, ["ml", "machine learning", "data", "fairness", "model"])) {
    return `${site.name}'s ML/data work emphasizes evaluation, fairness, and practical data workflows rather than only model accuracy.`;
  }

  if (includesAny(question, ["recruiter", "internship", "swe", "hire", "first"])) {
    return `For a recruiter, the fastest read is: PitchCoach for AI product engineering, PromptParty for backend architecture, and the SAS Marketplace for shipped full-stack work.`;
  }

  return `${site.name}'s portfolio is strongest where product thinking meets systems work: AI tools, backend architecture, data workflows, and deployed full-stack projects.`;
}

function rankProjects(question: string) {
  const terms = question.split(/[^a-z0-9+#.]+/).filter(Boolean);

  return [...projects]
    .map((project) => {
      const haystack = [
        project.title,
        project.subtitle,
        project.role,
        project.category,
        project.summary,
        project.overview,
        project.tech.join(" "),
        project.challenges.join(" "),
        project.built.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      const directTitleBoost = haystack.includes(question) ? 8 : 0;
      const termScore = terms.reduce((score, term) => score + (haystack.includes(term) ? 1 : 0), 0);
      const featuredBoost = project.featured ? 1 : 0;

      return {
        project,
        score: directTitleBoost + termScore + featuredBoost,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.project);
}

function includesAny(value: string, terms: string[]) {
  return terms.some((term) => term && value.includes(term.toLowerCase()));
}

export const portfolioAssistantContext = {
  projects,
  skillEvidence,
  skillGroups,
};
