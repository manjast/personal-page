import type { Locale } from '../i18n/routing';

const sharedSiteConfig = {
  name: 'Stefan Manja',
  siteUrl: 'https://stefanmanja.com',
  email: 'stefan@stefanmanja.com',
  linkedinUrl: 'https://www.linkedin.com/in/stefan-manja/',
  githubUrl: 'https://github.com/manjast',
  playbookUrl: 'https://github.com/manjast/agentic-development-playbook',
} as const;

const enSiteConfig = {
  ...sharedSiteConfig,
  tagline: 'Internal AI systems for enterprise workflows',
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
} as const;

const srSiteConfig = {
  ...sharedSiteConfig,
  name: 'Стефан Мања',
  tagline: 'Интерни AI системи за пословне процесе',
  defaultTitle: 'Стефан Мања',
  defaultDescription:
    'Интерни AI системи за велике и средње организације. Стефан Мања гради системе који морају да имају јасну евалуацију, увид у трошкове и коришћење, поуздан пут до продукције и стварну употребну вредност.',
  locationBadge: 'Београд, Србија · ради са међународним тимовима',
  heroTitle: 'Интерни AI системи који раде и када је важно',
  heroDescription:
    'Многи интерни AI системи добро изгледају у демоу. Ја градим и доводим до продукције системе који морају да раде са стварним корисницима, у стварним условима и са стварним трошковима - са евалуацијом, границама приступа, увидом у трошкове и предајом планираном од почетка.',
  heroPrimaryCta: {
    href: '/contact',
    label: 'Пошаљите опис процеса',
  },
  heroSecondaryCta: {
    href: '/work',
    label: 'Погледајте пројекте',
  },
} as const;

const enNavigation = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const;

const srNavigation = [
  { href: '/', label: 'Почетна' },
  { href: '/work', label: 'Пројекти' },
  { href: '/services', label: 'Услуге' },
  { href: '/contact', label: 'Контакт' },
] as const;

const enProofPoints = [
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

const srProofPoints = [
  {
    eyebrow: 'Исход',
    value: '~75% брже',
    label: 'анализа кредитног ризика',
    copy: 'AI процес за подршку аналитичарима: јавни сигнали ризика и интерни контекст обједињени у структурисане препоруке.',
  },
  {
    eyebrow: 'Усвајање',
    value: '300+ корисника',
    label: 'интерно хостован асистент',
    copy: 'Више од 300 активних корисника од око 1.500 са правом приступа, уз преко 85% позитивних оцена на одговоре.',
  },
  {
    eyebrow: 'Обим',
    value: '50+ процеса процењено',
    label: 'од процене прилике до одлуке о увођењу',
    copy: 'AI рад у финансијама, операцијама, логистици и сродним тимовима - уз јасно раздвајање корисних система од занимљивих идеја.',
  },
] as const;

const enStartingPoints = [
  {
    name: 'AI workflow feasibility review',
    summary: 'For teams deciding whether an AI system is worth building.',
    useWhen:
      'Use when you have a workflow, users, and pressure to move, but need a grounded recommendation before committing to a build.',
    outcomes: [
      'Workflow boundary and user/owner map',
      'Automation vs assistive design choice',
      'Risk, evaluation, hosting, and cost path',
      'Vendor or architecture direction sanity check, when relevant',
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

const srStartingPoints = [
  {
    name: 'Процена изводљивости AI процеса',
    summary: 'За тимове који одлучују да ли систем вреди градити.',
    useWhen:
      'Када имате конкретан пословни процес, кориснике и притисак да кренете, али вам је потребна утемељена препорука пре него што уђете у изградњу.',
    outcomes: [
      'Граница процеса и мапа корисника и власника',
      'Препорука: аутоматизација или систем за подршку људима',
      'Ризици, евалуација, хостинг и трошкови',
      'Провера правца добављача или архитектуре, када је потребна',
      'Препорука: градити, стабилизовати, поједноставити или зауставити',
    ],
  },
  {
    name: 'Процена пилота пре продукције',
    summary: 'За тимове са прототипом који ради у демонстрацији, али није спреман за стварну употребу.',
    useWhen:
      'Када постоји пословна потреба, али су евалуација, приступ, надзор, трошкови, људска провера или предаја тиму и даље недовољно јасни.',
    outcomes: [
      'Слабе тачке пилота и ризици спремности',
      'Листа провера и типичних места где систем може да погреши',
      'Захтеви за приступ, људску проверу, надзор и трошкове',
      'План следеће верзије или припреме за продукцију',
    ],
  },
  {
    name: 'Спремност интерног асистента знања',
    summary: 'За тимове који граде или спасавају RAG или интерног асистента.',
    useWhen:
      'Када тежак део није интерфејс за разговор, већ границе приступа, квалитет претраге знања, повратне петље, власништво над садржајем, увид у коришћење и правила рада система.',
    outcomes: [
      'Модел извора знања и власништва над садржајем',
      'План граница приступа и квалитета претраге',
      'Повратна петља за администраторе и тим који води систем',
      'Модел усвајања и увида у трошкове',
    ],
  },
  {
    name: 'Изградња процеса за подршку одлукама',
    summary: 'За аналитичке процесе у којима људи прикупљају контекст пре препорука или одлука.',
    useWhen:
      'Када је уско грло понављајуће прикупљање контекста, синтеза, квалитет препоруке, могућност провере или доследност.',
    outcomes: [
      'Модел процеса и дизајн структурисаног излаза',
      'Начин интеграције контекста',
      'Пут људске провере',
      'План или имплементација прве верзије',
    ],
  },
] as const;

const enServices = [
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

const srServices = [
  {
    name: 'Изградња',
    summary:
      'Пројектна испорука интерних AI система за велике и средње организације, када постоји конкретан процес који треба унапредити и стварни оперативни контекст у ком систем мора да ради.',
    details: [
      'Интерни асистенти, системи за приступ знању и процеси за подршку аналитичарима',
      'Прве верзије са јасном евалуацијом, људском провером и одлукама о приступу',
      'Одговорност од дефинисања процеса до испоручене имплементације и предаје тиму',
    ],
    featured: true,
  },
  {
    name: 'Стабилизација',
    summary:
      'Прототип или пилот који већ постоји довести до поузданије, проверљивије и мерљивије употребе у пракси.',
    details: [
      'Евалуација, типичне грешке и пут људске провере',
      'Модел приступа, надзор, сигнали коришћења и увид у трошкове',
      'Сређивање прелаза од прототипа до продукције и припрема за предају тиму',
    ],
    featured: false,
  },
  {
    name: 'Саветовање',
    summary:
      'Ограничен саветодавни рад који помаже да се пре или током изградње разјасне архитектура, пут испоруке и ризици имплементације.',
    details: [
      'Преглед архитектуре и пословног процеса',
      'Дефинисање случаја употребе, власништва и обима испоруке',
      'Планирање ризика имплементације и предаје тиму',
    ],
    featured: false,
  },
] as const;

const enFitGuidance = {
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

const srFitGuidance = {
  goodFit: [
    'Тимови са конкретним интерним процесом, стварним корисницима и разлогом да систем мора да заслужи наставак употребе после увођења.',
    'Системи за подршку одлукама, приступ знању и интерни алати који захтевају дисциплиновану евалуацију и озбиљну испоруку.',
    'Пројектна изградња, стабилизација или саветовање са јасним власништвом и стварном пословном потребом.',
  ],
  notFit: [
    'Истраживање на нивоу идеје, без власника процеса или пута до усвајања.',
    'Општи захтеви за „AI трансформацију” без дефинисаног проблема.',
    'Chatbot или демо-пројекат где оперативни квалитет и усвајање нису циљ.',
  ],
} as const;

const enContactExpectations = {
  responseTime: 'Clear workflow outlines usually get a response within 3 business days.',
  fitNote:
    'A rough workflow outline is enough for a first review; the key details are the workflow, users, current stage, and the constraints that will matter in practice.',
  emailPrompt:
    'A rough outline covering the workflow, owner, current stage, and trust requirements is enough to decide whether the conversation should move forward.',
} as const;

const srContactExpectations = {
  responseTime: 'Конкретни описи процеса обично добијају одговор у року од 3 радна дана.',
  fitNote:
    'Кратак опис процеса је довољан за прву процену; кључни детаљи су процес, корисници, тренутна фаза и ограничења која ће у пракси бити важна.',
  emailPrompt:
    'Кратак опис процеса, власника, тренутне фазе и захтева поверења довољан је да се процени да ли разговор има смисла.',
} as const;

const enUi = {
  skipLink: 'Skip to content',
  navAriaLabel: 'Primary',
  languageSwitcherLabel: 'Language',
  switchLanguageLabel: 'Switch language',
  footerDescription:
    'Internal AI systems for enterprise workflows, with emphasis on evaluation, deployment discipline, and systems your team can operate after handoff.',
  heroEyebrow: 'Internal AI systems delivery',
  heroMarker: '00 / overview',
  operatingBrief: {
    eyebrow: 'Operating brief',
    items: [
      {
        label: 'Focus',
        value:
          'Analyst-support, knowledge-access, and internal workflow systems where trust, adoption, and operating constraints matter.',
      },
      {
        label: 'Position',
        value: 'Project-based build and hardening, with advisory tied to real delivery decisions.',
      },
      {
        label: 'Delivery posture',
        value:
          'Evaluation, cost visibility, human review, access boundaries, and handoff are treated as part of the system.',
      },
    ],
  },
  ctaEyebrow: 'Workflow review',
  serviceCard: {
    primaryMode: 'Primary mode',
    secondaryMode: 'Secondary mode',
  },
  caseStudyCard: {
    caseLabel: 'Case',
    contextLabel: 'Context',
    outcomeLabel: 'Outcome',
    readLabel: 'Read the case study',
  },
  caseStudyDetail: {
    backLabel: 'Back to selected work',
    workContextLabel: 'Work context',
    outcomeSignalLabel: 'Outcome signal',
  },
  schema: {
    jobTitle: 'Independent AI Systems Consultant',
    knowsAbout: [
      'Internal AI systems',
      'Enterprise AI deployment',
      'AI evaluation',
      'AI workflow feasibility',
      'AI pilot hardening',
      'AI prototype-to-production',
      'AI cost observability',
      'Human-in-the-loop AI workflows',
      'Internal knowledge assistants',
      'Decision-support workflows',
      'Retrieval-augmented generation',
      'Agentic AI readiness',
    ],
  },
} as const;

const srUi = {
  skipLink: 'Прескочи на садржај',
  navAriaLabel: 'Главна навигација',
  languageSwitcherLabel: 'Језик',
  switchLanguageLabel: 'Промени језик',
  footerDescription:
    'Интерни AI системи за пословне процесе, са нагласком на евалуацију, дисциплину у испоруци и системе које тим може да води после предаје.',
  heroEyebrow: 'Испорука интерних AI система',
  heroMarker: '00 / преглед',
  operatingBrief: {
    eyebrow: 'Оперативни сажетак',
    items: [
      {
        label: 'Фокус',
        value:
          'Подршка аналитичарима, приступ знању и интерни процеси у којима су поверење, усвајање и оперативна ограничења важни.',
      },
      {
        label: 'Шта радим',
        value: 'Пројектна изградња и стабилизација, уз саветовање везано за стварне одлуке о испоруци.',
      },
      {
        label: 'Како испоручујем',
        value:
          'Евалуација, увид у трошкове, људска провера, границе приступа и предаја тиму третирају се као део система.',
      },
    ],
  },
  ctaEyebrow: 'Процена процеса',
  serviceCard: {
    primaryMode: 'Главни модел',
    secondaryMode: 'Додатни модел',
  },
  caseStudyCard: {
    caseLabel: 'Пројекат',
    contextLabel: 'Контекст',
    outcomeLabel: 'Исход',
    readLabel: 'Прочитајте приказ пројекта',
  },
  caseStudyDetail: {
    backLabel: 'Назад на пројекте',
    workContextLabel: 'Контекст пројекта',
    outcomeSignalLabel: 'Сигнал исхода',
  },
  schema: {
    jobTitle: 'Независни консултант за AI системе',
    knowsAbout: [
      'Интерни AI системи',
      'AI увођење у предузећима',
      'AI евалуација',
      'Процена изводљивости AI процеса',
      'Стабилизација AI пилота',
      'Пут од прототипа до продукције',
      'Увид у трошкове AI система',
      'AI процеси са људском провером',
      'Интерни асистенти знања',
      'Процеси за подршку одлукама',
      'RAG системи',
      'Спремност за агентске системе',
    ],
  },
} as const;

export const localizedContent = {
  en: {
    siteConfig: enSiteConfig,
    navigation: enNavigation,
    proofPoints: enProofPoints,
    startingPoints: enStartingPoints,
    services: enServices,
    fitGuidance: enFitGuidance,
    contactExpectations: enContactExpectations,
    ui: enUi,
  },
  sr: {
    siteConfig: srSiteConfig,
    navigation: srNavigation,
    proofPoints: srProofPoints,
    startingPoints: srStartingPoints,
    services: srServices,
    fitGuidance: srFitGuidance,
    contactExpectations: srContactExpectations,
    ui: srUi,
  },
} as const;

export function getSiteContent(locale: Locale = 'en') {
  return localizedContent[locale];
}

export const siteConfig = localizedContent.en.siteConfig;
export const navigation = localizedContent.en.navigation;
export const proofPoints = localizedContent.en.proofPoints;
export const startingPoints = localizedContent.en.startingPoints;
export const services = localizedContent.en.services;
export const fitGuidance = localizedContent.en.fitGuidance;
export const contactExpectations = localizedContent.en.contactExpectations;
