export const siteConfig = {
  name: 'Stefan Manja',
  tagline: 'Internal AI systems for enterprise workflows',
  siteUrl: 'https://stefanmanja.com',
  email: 'stefan@stefanmanja.com',
  defaultTitle: 'Stefan Manja',
  defaultDescription:
    'Internal AI systems for enterprise and mid-market workflows. Stefan Manja builds and hardens systems that need disciplined evaluation, reliable deployment, and real-world usefulness.',
  heroTitle: 'Internal AI systems that hold up in real use',
  heroDescription:
    'I work with enterprise and mid-market teams to build, evaluate, and harden internal AI systems for real workflows - with disciplined deployment, clear system behavior, and delivery choices that hold up after launch.',
  heroPrimaryCta: {
    href: '/contact',
    label: 'Discuss a project',
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
    eyebrow: 'System',
    value: 'Self-hosted assistant',
    label: 'enterprise knowledge-access build',
    copy: 'Self-hosted enterprise assistant with operator controls, org-aware access, and post-launch observability.',
  },
  {
    eyebrow: 'Scale',
    value: '50+ use cases',
    label: 'from PoCs to first scaled delivery',
    copy: 'AI work spanning finance, operations, logistics, and adjacent teams, from opportunity assessment through PoCs to rollout.',
  },
] as const;

export const services = [
  {
    name: 'Build',
    summary:
      'Project-based delivery of internal AI systems for enterprise and mid-market teams with a concrete workflow to improve.',
    details: [
      'Internal assistants, knowledge-access systems, and analyst-support workflows',
      'Evaluation-gated first versions built for real users',
      'Ownership from scoped workflow to shipped implementation',
    ],
    featured: true,
  },
  {
    name: 'Productionize',
    summary:
      'Take a prototype or pilot already in motion and make it more reliable, testable, observable, and ready for real use.',
    details: [
      'Evaluation and failure-mode hardening',
      'Deployment and monitoring readiness',
      'Prototype-to-production cleanup',
    ],
    featured: false,
  },
  {
    name: 'Advise',
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
    'Marketing-style chatbot work where visual novelty matters more than operational quality.',
  ],
} as const;

export const contactExpectations = {
  responseTime: 'I reply to good-fit inquiries within 3 business days.',
  availability:
    'I take on project-based build, hardening, and advisory work when the workflow, scope, and ownership are concrete enough for a useful conversation.',
  fitNote:
    'The best first conversations describe the workflow, the users, the current stage, and the constraints that will matter in practice.',
  emailPrompt:
    'A short email covering the workflow, owner, current stage, and trust requirements is enough to decide whether the conversation should move forward.',
} as const;
