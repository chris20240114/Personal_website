export type ProjectCategory =
  | "backend"
  | "full-stack"
  | "ml-data"
  | "research"
  | "frontend"
  | "ai";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  category: ProjectCategory;
  featured: boolean;
  timeframe: string;
  tech: string[];
  summary: string;
  overview: string;
  motivation: string;
  architecture: string[];
  challenges: string[];
  built: string[];
  outcomes: string[];
  lessons: string[];
  media: {
    title: string;
    description: string;
  }[];
  links: {
    label: string;
    href: string;
  }[];
};

export const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "backend", label: "Backend" },
  { value: "full-stack", label: "Full-stack" },
  { value: "ml-data", label: "ML/data" },
  { value: "ai", label: "AI" },
  { value: "research", label: "Research" },
  { value: "frontend", label: "Frontend" },
];

export const projects: Project[] = [
  {
    slug: "pitchcoach",
    title: "PitchCoach",
    subtitle: "Embodied AI presentation coach with live speech, audio, and webcam feedback",
    role: "Full-stack AI product developer",
    category: "ai",
    featured: true,
    timeframe: "2026",
    tech: ["Node.js", "JavaScript", "Gemini API", "OpenAI API", "Web Speech API", "Webcam APIs", "Audio analysis"],
    summary:
      "Built an AI presentation coach that listens, watches, reacts, asks follow-up questions, and generates actionable feedback from speech, visual, and audio signals.",
    overview:
      "PitchCoach is a live practice environment for pitches, speeches, interviews, demos, and presentations. Instead of only analyzing an uploaded recording afterward, it simulates a coach in the room with real-time transcript capture, avatar reactions, delivery signals, and post-session feedback.",
    motivation:
      "Presentation coaching is most useful when it catches both content and delivery issues: unclear problem framing, filler words, pace, poor camera presence, weak calls to action, and audience mismatch. PitchCoach combines those signals into a single practice loop.",
    architecture: [
      "Browser UI captures webcam, microphone, presentation context, audience mode, and live session state.",
      "Speech recognition produces transcript chunks while browser speech synthesis can deliver spoken coach feedback.",
      "Client-side visual heuristics track camera presence, face position, lighting, eye movement, and head movement signals.",
      "Audio analysis summarizes volume, vocal energy, pitch range, pauses, and rhythm during the session.",
      "Node backend exposes feedback endpoints and keeps LLM API keys server-side.",
      "Gemini is preferred when configured, with OpenAI support available for future comparison and local fallback feedback when no key is present.",
    ],
    challenges: [
      "Designing a product loop that feels live without depending on fragile real-time AI assumptions.",
      "Combining transcript, visual, audio, audience, and timeline data into one normalized feedback payload.",
      "Keeping API keys and AI-provider calls on the backend while preserving a smooth browser demo.",
      "Producing useful fallback coaching so the app remains demoable without external AI credentials.",
    ],
    built: [
      "Live coaching mode with transcript capture, timeline events, audience types, and coaching intensity settings.",
      "Feedback dashboard for pace, filler words, problem clarity, user specificity, demo clarity, impact, and call to action.",
      "Upload path for transcripts, captions, audio, and video practice files.",
      "LLM integration point using structured JSON feedback from Gemini, with OpenAI comparison support planned.",
    ],
    outcomes: [
      "A technically impressive AI product prototype with real multimodal signals instead of a chat-only wrapper.",
      "Clear demonstration of frontend interaction design, backend API boundaries, AI orchestration, and graceful fallback behavior.",
    ],
    lessons: [
      "AI products feel better when deterministic signals and LLM judgment support each other.",
      "Keeping the payload normalized across live and upload flows makes the backend easier to evolve.",
      "A useful demo should still work when provider keys are missing or model calls fail.",
    ],
    media: [
      {
        title: "Live coaching flow",
        description: "Choose audience and intensity, practice a pitch, answer a follow-up, and receive structured feedback.",
      },
      {
        title: "Multimodal signal pipeline",
        description: "Transcript chunks, webcam heuristics, microphone metrics, and presentation context feed the coach response.",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/chris20240114/PitchCoach" }],
  },
  {
    slug: "promptparty",
    title: "PromptParty",
    subtitle: "Graph-backed prompt collaboration platform",
    role: "Backend and architecture lead",
    category: "backend",
    featured: true,
    timeframe: "2025-2026",
    tech: ["FastAPI", "GraphQL", "Neo4j", "Supabase", "PostgreSQL", "Python"],
    summary:
      "Designed a backend architecture for prompt workflows using graph queries, relational storage, and API layers built for iteration.",
    overview:
      "PromptParty explores how prompt versions, users, sessions, feedback, and reusable context can be modeled as connected data instead of flat records.",
    motivation:
      "Prompt-heavy tools quickly become hard to reason about: prompts branch, teams reuse snippets, evaluations change, and performance can suffer when every relationship is reconstructed at request time.",
    architecture: [
      "FastAPI service receives authenticated requests and normalizes prompt workflow operations.",
      "GraphQL layer exposes flexible read shapes for project, prompt, and relationship views.",
      "Neo4j stores prompt lineage, relationships, and graph traversal paths.",
      "Supabase/PostgreSQL handles account data, stable relational records, and metadata.",
      "Performance passes focus on query shape, indexing, and avoiding repeated graph traversals.",
    ],
    challenges: [
      "Balancing graph flexibility with predictable API contracts.",
      "Keeping relational and graph data responsibilities clear.",
      "Designing queries that stay fast as prompt histories grow.",
    ],
    built: [
      "Data model for prompt versions, relationships, and collaboration artifacts.",
      "API structure around prompt lifecycle operations and graph-backed exploration.",
      "Performance-minded query patterns for common traversal paths.",
    ],
    outcomes: [
      "Clearer architecture for a product that mixes collaborative workflows and graph data.",
      "A strong backend case study showing API design, database boundaries, and performance thinking.",
    ],
    lessons: [
      "Graph databases are powerful when relationships are first-class, but the boundary with relational storage has to be explicit.",
      "API design should protect product velocity from underlying data-store complexity.",
    ],
    media: [
      {
        title: "Graph workflow model",
        description: "Prompt nodes, version edges, feedback loops, and workspace metadata.",
      },
      {
        title: "API boundary",
        description: "FastAPI coordinates GraphQL reads, relational writes, and graph traversal logic.",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/chris20240114" }],
  },
  {
    slug: "behn-meyer-agricare",
    title: "Behn Meyer Agricare System",
    subtitle: "Internal workflow tools and API-backed operations",
    role: "Full-stack/backend developer",
    category: "full-stack",
    featured: true,
    timeframe: "2025",
    tech: ["PostgreSQL", "REST APIs", "Python", "TypeScript", "Internal tools"],
    summary:
      "Built workflow support for internal agricultural operations with APIs, database-backed tools, and clearer operational visibility.",
    overview:
      "The Agricare system focused on making internal processes easier to track, update, and reason about through practical software rather than spreadsheet-heavy coordination.",
    motivation:
      "Operational teams need software that reduces repetitive coordination, preserves clean records, and gives users confidence that the current state is accurate.",
    architecture: [
      "PostgreSQL stores operational entities, status changes, and user-facing records.",
      "API layer exposes workflow operations with validation and clear resource boundaries.",
      "Frontend views organize status, actions, and record details for daily use.",
      "Deployment and feedback loops support iteration with real operational stakeholders.",
    ],
    challenges: [
      "Translating informal business processes into durable data models.",
      "Designing APIs around actual workflow steps instead of abstract CRUD alone.",
      "Keeping the interface efficient for repeated internal use.",
    ],
    built: [
      "Database-backed workflow features for tracking and updates.",
      "API endpoints for internal tool operations.",
      "User-facing screens oriented around status, action, and accountability.",
    ],
    outcomes: [
      "Improved workflow support for internal users.",
      "Experience building practical software under real stakeholder constraints.",
    ],
    lessons: [
      "Internal tools succeed when they fit the rhythm of the team using them.",
      "Clear data modeling is often the difference between a helpful tool and another place to duplicate work.",
    ],
    media: [
      {
        title: "Workflow dashboard",
        description: "Operational records grouped by status and next action.",
      },
    ],
    links: [],
  },
  {
    slug: "property-assessment-ml-pipeline",
    title: "Property Assessment ML Pipeline",
    subtitle: "Machine learning and fairness analysis over 200k+ records",
    role: "ML/data engineer",
    category: "ml-data",
    featured: true,
    timeframe: "2025",
    tech: ["Python", "pandas", "NumPy", "scikit-learn", "Jupyter", "Fairness analysis"],
    summary:
      "Built a data pipeline and modeling workflow for large-scale property assessment, with attention to fairness, evaluation, and interpretability.",
    overview:
      "This project processed 200k+ property records through cleaning, feature engineering, modeling, and fairness-oriented evaluation.",
    motivation:
      "Assessment models can look accurate in aggregate while behaving unevenly across neighborhoods, property types, or demographic proxies. The goal was to pair model performance with careful inspection.",
    architecture: [
      "Raw property records are cleaned and normalized in pandas notebooks and scripts.",
      "Feature engineering prepares numeric, categorical, and geographic signals.",
      "Model experiments compare baselines and stronger estimators using scikit-learn.",
      "Evaluation includes error slices, residual inspection, and fairness-oriented comparisons.",
    ],
    challenges: [
      "Handling missing, inconsistent, and high-cardinality fields.",
      "Avoiding misleading aggregate metrics.",
      "Communicating model behavior clearly to non-ML audiences.",
    ],
    built: [
      "Reusable data-cleaning steps for 200k+ records.",
      "Model training and evaluation workflow.",
      "Fairness analysis views that compare model error across slices.",
    ],
    outcomes: [
      "Produced a technically grounded ML workflow beyond a single accuracy score.",
      "Strengthened skills in data preparation, evaluation design, and model communication.",
    ],
    lessons: [
      "The hardest ML work is often making the data and evaluation honest.",
      "Fairness analysis needs to be designed into the workflow, not bolted on at the end.",
    ],
    media: [
      {
        title: "Pipeline stages",
        description: "Cleaning, features, training, evaluation, and fairness slices.",
      },
      {
        title: "Evaluation notebook",
        description: "Model metrics paired with residual and subgroup analysis.",
      },
    ],
    links: [{ label: "Notebook repository", href: "https://github.com/chris20240114" }],
  },
  {
    slug: "rl-pacman-agents",
    title: "RL Pacman Agents",
    subtitle: "Q-learning, approximate Q-learning, and experimentation",
    role: "AI systems developer",
    category: "ml-data",
    featured: false,
    timeframe: "2024",
    tech: ["Python", "Reinforcement learning", "Q-learning", "Approximate Q-learning"],
    summary:
      "Implemented and evaluated reinforcement learning agents that learn from reward signals, exploration choices, and feature-based approximations.",
    overview:
      "The Pacman agents project focused on reinforcement learning fundamentals: value estimation, policy improvement, exploration, and approximate feature representations.",
    motivation:
      "Pacman is a compact environment for seeing how algorithmic choices affect behavior. Small changes in reward, exploration, or features can completely change an agent's strategy.",
    architecture: [
      "Environment exposes states, legal actions, transitions, and reward signals.",
      "Q-learning agent updates action-value estimates from observed transitions.",
      "Approximate agent replaces table values with feature-weighted estimates.",
      "Experiment logs compare performance under different parameters.",
    ],
    challenges: [
      "Tuning exploration so the agent learns without becoming unstable.",
      "Designing useful features for approximate Q-learning.",
      "Interpreting behavior from reward curves and gameplay traces.",
    ],
    built: [
      "Q-learning and approximate Q-learning agents.",
      "Experiment configurations for learning rate, discount, and exploration.",
      "Analysis of learned behavior and failure modes.",
    ],
    outcomes: [
      "Hands-on reinforcement learning implementation experience.",
      "Clearer intuition for exploration, reward shaping, and feature design.",
    ],
    lessons: [
      "RL debugging is behavioral: curves help, but watching the policy matters.",
      "Approximation adds power and new failure modes at the same time.",
    ],
    media: [
      {
        title: "Learning loop",
        description: "State, action, reward, update, and policy improvement cycle.",
      },
    ],
    links: [],
  },
  {
    slug: "sas-marketplace",
    title: "Shanghai American School Marketplace",
    subtitle: "Django marketplace deployed for real users",
    role: "Full-stack developer",
    category: "full-stack",
    featured: true,
    timeframe: "2023",
    tech: ["Django", "Python", "SQL", "Deployment", "HTML/CSS"],
    summary:
      "Built and deployed a school marketplace for real users, with listings, user flows, and production-minded iteration.",
    overview:
      "The SAS marketplace was a practical full-stack application for a school community, centered on listings, browsing, posting, and connecting users.",
    motivation:
      "Students and families needed a more organized way to exchange items than scattered chat messages or informal posts.",
    architecture: [
      "Django handles routing, templates, models, forms, and server-side validation.",
      "Relational database stores users, listings, metadata, and state.",
      "Deployment setup makes the application accessible to the community.",
      "User feedback drives interface and workflow improvements.",
    ],
    challenges: [
      "Designing simple flows for non-technical users.",
      "Handling real data and real usage expectations.",
      "Taking a project from local development to deployed software.",
    ],
    built: [
      "Marketplace listing creation and browsing flows.",
      "Django models, forms, and templates.",
      "Deployment configuration for real-world access.",
    ],
    outcomes: [
      "Shipped a full-stack product for actual community users.",
      "Learned the importance of deployment, feedback, and maintainable user flows.",
    ],
    lessons: [
      "A deployed simple product teaches more than a complex project that no one can use.",
      "User experience starts with reducing ambiguity in the main workflow.",
    ],
    media: [
      {
        title: "Marketplace flow",
        description: "Post, browse, inspect, and contact workflow for a school community.",
      },
    ],
    links: [],
  },
  {
    slug: "ucsc-sip-research-automation",
    title: "UCSC SIP Research Automation",
    subtitle: "Transcript cleanup and qualitative research workflow support",
    role: "Research automation developer",
    category: "research",
    featured: false,
    timeframe: "2024",
    tech: ["Python", "Regex", "Automation", "Research workflows", "Technical writing"],
    summary:
      "Automated transcript cleanup and formatting support for qualitative research while preserving researcher review and context.",
    overview:
      "This automation project supported qualitative research by reducing repetitive transcript cleanup and preparing text for downstream analysis.",
    motivation:
      "Research teams often spend valuable time on formatting and cleanup before analysis can even begin. Automation can remove repetitive friction while keeping researchers in control.",
    architecture: [
      "Input transcripts are normalized and cleaned with Python scripts.",
      "Regex passes handle speaker labels, timestamps, spacing, and repeated artifacts.",
      "Outputs are structured for review, coding, and qualitative analysis.",
      "Documentation explains assumptions and manual review points.",
    ],
    challenges: [
      "Handling transcript inconsistency without overfitting to one file.",
      "Preserving meaning while removing mechanical noise.",
      "Explaining automation limits clearly to research collaborators.",
    ],
    built: [
      "Python cleanup utilities for recurring transcript artifacts.",
      "Regex rules for formatting and normalization.",
      "Research-support documentation for workflow handoff.",
    ],
    outcomes: [
      "Reduced manual cleanup time for qualitative research preparation.",
      "Demonstrated automation work that respects human review and domain context.",
    ],
    lessons: [
      "Good research automation is careful, auditable, and modest about what it changes.",
      "Technical communication is part of the tool when collaborators need to trust the output.",
    ],
    media: [
      {
        title: "Cleanup workflow",
        description: "Raw transcript, normalization passes, review output, and analysis handoff.",
      },
    ],
    links: [],
  },
  {
    slug: "ucsb-event-website",
    title: "UCSB Event Website",
    subtitle: "Frontend and client-facing event experience",
    role: "Frontend developer",
    category: "frontend",
    featured: false,
    timeframe: "2024",
    tech: ["React", "TypeScript", "Tailwind CSS", "Responsive design"],
    summary:
      "Built a responsive event website with a clear information hierarchy, polished interface details, and client-facing iteration.",
    overview:
      "The UCSB event website emphasized frontend craft: responsive layout, clear content organization, and reliable presentation for visitors.",
    motivation:
      "Event sites need to answer practical questions quickly: what is happening, when, where, why it matters, and how to participate.",
    architecture: [
      "Responsive React components organize event information by user intent.",
      "Tailwind CSS handles spacing, typography, and adaptive layouts.",
      "Client feedback informs page structure and content priority.",
      "Production build focuses on fast loading and accessible navigation.",
    ],
    challenges: [
      "Balancing visual polish with information clarity.",
      "Making the site easy to scan on mobile.",
      "Iterating with client-facing feedback.",
    ],
    built: [
      "Responsive page sections for event details and calls to action.",
      "Reusable frontend components.",
      "Polished visual system for a public-facing site.",
    ],
    outcomes: [
      "Delivered client-facing frontend work with attention to presentation and usability.",
      "Strengthened design implementation and communication skills.",
    ],
    lessons: [
      "Frontend quality is partly visual, but mostly about helping users find the right information quickly.",
      "Small interaction details can make a simple site feel much more trustworthy.",
    ],
    media: [
      {
        title: "Responsive event page",
        description: "Hero, schedule, location, and action sections adapted for mobile and desktop.",
      },
    ],
    links: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
