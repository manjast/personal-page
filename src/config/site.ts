export const siteConfig = {
  name: 'Stefan Manja',
  tagline: 'Internal AI systems for enterprise workflows',
  siteUrl: 'https://stefanmanja.com',
  email: 'stefan@stefanmanja.com',
  defaultTitle: 'Stefan Manja',
  defaultDescription:
    'Internal AI systems for enterprise and mid-market workflows. Stefan Manja builds and hardens systems that need disciplined evaluation, cost and usage visibility, reliable deployment, and real-world usefulness.',
  locationBadge: 'Belgrade, Serbia · works internationally',
  heroTitle: 'Internal AI systems that hold up in real use',
  heroDescription:
    'Many internal AI systems can work in a demo. I build and harden the ones that need to survive real users, real operators, and real operating costs, with evaluation, access boundaries, cost visibility, and handoff designed in from the start.',
  heroPrimaryCta: {
    href: '/contact',
    label: 'Send a workflow for review',
  },
  heroSecondaryCta: {
    href: '/work',
    label: 'View selected work',
  },
  linkedinUrl: 'https://www.linkedin.com/in/stefan-manja/',
  githubUrl: 'https://github.com/manjast',
  playbookUrl: 'https://github.com/manjast/agentic-development-playbook',
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const;

export const proofPoints = [
  {
    eyebrow: 'Outcome',
    value: '~75% faster',
    label: 'credit-risk workflow analysis',
    copy: 'Analyst-assistive workflow combining public-company risk signals with internal context into structured recommendations.',
  },
  {
    eyebrow: 'Adoption',
    value: '300+ users',
    label: 'self-hosted internal assistant',
    copy: '300+ users out of roughly 1,500 eligible, with 85%+ positive explicit feedback after launch.',
  },
  {
    eyebrow: 'Scale',
    value: '50+ workflows assessed',
    label: 'from opportunity framing to rollout decisions',
    copy: 'AI work across finance, operations, logistics, and adjacent teams, separating useful systems from interesting ideas across assessment, PoCs, and first scaled rollout.',
  },
] as const;

export const startingPoints = [
  {
    name: 'AI workflow feasibility review',
    summary: 'For teams deciding whether an AI system is worth building.',
    useWhen:
      'Use when you have a workflow, users, and pressure to move, but need a grounded recommendation before committing to a build.',
    outcomes: [
      'Workflow boundary and user/owner map',
      'Automation vs assistive design choice',
      'Risk, evaluation, hosting, and cost path',
      'Build, harden, simplify, or stop recommendation',
    ],
  },
  {
    name: 'AI pilot hardening review',
    summary: 'For teams with a prototype that works in a demo but is not ready for real use.',
    useWhen:
      'Use when business pull exists, but evaluation, access, observability, cost, review path, or handoff are still weak.',
    outcomes: [
      'Hardening findings and readiness risks',
      'Evaluation and failure-mode backlog',
      'Access, review, observability, and cost requirements',
      'Next-version delivery plan',
    ],
  },
  {
    name: 'Internal knowledge assistant readiness',
    summary: 'For teams building or rescuing a RAG or internal assistant.',
    useWhen:
      'Use when the hard part is not the chat interface, but access boundaries, retrieval quality, feedback loops, content ownership, usage visibility, and governance.',
    outcomes: [
      'Knowledge-source and ownership model',
      'Access boundary and retrieval-quality plan',
      'Operator feedback loop',
      'Adoption and cost visibility model',
    ],
  },
  {
    name: 'Decision-support workflow build',
    summary: 'For analyst workflows where people assemble context before recommendations or decisions.',
    useWhen:
      'Use when the bottleneck is repeatable context gathering, synthesis, recommendation quality, reviewability, or consistency.',
    outcomes: [
      'Workflow model and structured output design',
      'Context integration shape',
      'Human review path',
      'First-version build plan or implementation',
    ],
  },
] as const;

export const services = [
  {
    name: 'Build',
    summary:
      'Project-based delivery of internal AI systems for enterprise and mid-market teams with a concrete workflow to improve and a real operating context to support.',
    details: [
      'Internal assistants, knowledge-access systems, and analyst-support workflows',
      'Evaluation-gated first versions with review and access decisions made explicit',
      'Ownership from scoped workflow to shipped implementation and handoff',
    ],
    featured: true,
  },
  {
    name: 'Hardening',
    summary:
      'Take a prototype or pilot already in motion and make it more reliable, reviewable, observable, and ready for real use.',
    details: [
      'Evaluation, failure-mode, and review-path hardening',
      'Access model, observability, usage signals, and cost visibility',
      'Prototype-to-production cleanup and handoff readiness',
    ],
    featured: false,
  },
  {
    name: 'Advisory',
    summary:
      'Scoped advisory work that sharpens system shape, delivery path, and implementation risk before or alongside build work.',
    details: [
      'Architecture and workflow review',
      'Use-case, ownership, and delivery scoping',
      'Implementation risk and handoff planning',
    ],
    featured: false,
  },
] as const;

export const fitGuidance = {
  goodFit: [
    'Teams with a concrete internal workflow, real users, and a reason the system needs to earn continued use once it is deployed.',
    'Decision-support, knowledge-access, and internal tooling systems that need disciplined evaluation and delivery.',
    'Project-based build, hardening, or advisory work with clear ownership and real business pull.',
  ],
  notFit: [
    'Pure idea-stage exploration with no real workflow owner or adoption path.',
    'Generic “AI transformation” requests without a defined problem to solve.',
    'Chatbot or demo-first work where operational quality and adoption are not the goal.',
  ],
} as const;

export const contactExpectations = {
  responseTime: 'Clear project outlines usually get a response within 3 business days.',
  fitNote:
    'A rough workflow outline is enough for a first fit check; the key details are the workflow, users, current stage, and the constraints that will matter in practice.',
  emailPrompt:
    'A rough outline covering the workflow, owner, current stage, and trust requirements is enough to decide whether the conversation should move forward.',
} as const;
