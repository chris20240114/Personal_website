export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  status: "draft" | "published";
};

export const posts: Post[] = [
  {
    slug: "graph-data-for-prompt-workflows",
    title: "Why Prompt Workflows Fit Graph Data",
    date: "2026-04-10",
    summary:
      "A short note on modeling prompt versions, reusable context, feedback, and collaboration as connected data.",
    tags: ["Backend", "Graphs", "PromptParty"],
    status: "draft",
  },
  {
    slug: "fairness-beyond-accuracy",
    title: "Fairness Analysis Starts After the First Metric",
    date: "2026-03-18",
    summary:
      "Notes from building an ML pipeline where subgroup error, data quality, and communication mattered as much as model choice.",
    tags: ["ML", "Data", "Fairness"],
    status: "draft",
  },
  {
    slug: "automation-with-human-review",
    title: "Automation That Leaves Room for Human Review",
    date: "2026-02-22",
    summary:
      "What transcript cleanup taught me about cautious automation, workflow design, and technical communication.",
    tags: ["Automation", "Research", "Python"],
    status: "draft",
  },
];
