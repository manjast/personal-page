export const siteConfig = {
  name: 'Stefan Manja',
  tagline: 'Internal AI systems for enterprise workflows',
  siteUrl: 'https://stefanmanja.com',
  email: 'stefan@stefanmanja.com',
  defaultTitle: 'Stefan Manja',
  defaultDescription:
    'Internal AI systems for enterprise and mid-market workflows. Stefan Manja builds and hardens systems that need disciplined evaluation, cost and usage visibility, reliable deployment, and real-world usefulness.',
  heroTitle: 'Internal AI systems that hold up in real use',
  heroDescription:
    'I help enterprise and mid-market teams build or harden internal AI systems for real workflows, with evaluation, cost visibility, human review, access boundaries, and operational handoff designed in from the start.',
  heroPrimaryCta: {
    href: '/contact',
    label: 'Check project fit',
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
    value: '50+ workflows',
    label: 'from assessment to first scaled rollout',
    copy: 'AI work spanning finance, operations, logistics, and adjacent teams, from opportunity assessment through PoCs to first scaled rollout.',
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
