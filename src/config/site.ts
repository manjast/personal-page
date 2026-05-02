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
  tagline: 'Интерни системи вештачке интелигенције за пословне токове',
  defaultTitle: 'Stefan Manja',
  defaultDescription:
    'Интерни системи вештачке интелигенције за предузећа и средње велике организације. Стефан Мања гради и ојачава системе који захтевају дисциплиновану проверу, видљивост трошкова и коришћења, поуздано пуштање у рад и стварну употребљивост.',
  locationBadge: 'Београд, Србија · ради међународно',
  heroTitle: 'Интерни системи вештачке интелигенције који издржавају стварну употребу',
  heroDescription:
    'Многи интерни системи вештачке интелигенције могу да раде у демонстрацији. Ја градим и ојачавам оне који морају да издрже стварне кориснике, стварне оператере и стварне оперативне трошкове, уз проверу, границе приступа, видљивост трошкова и предају осмишљене од почетка.',
  heroPrimaryCta: {
    href: '/contact',
    label: 'Пошаљите радни ток на преглед',
  },
  heroSecondaryCta: {
    href: '/work',
    label: 'Погледајте изабрани рад',
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
  { href: '/work', label: 'Рад' },
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
    copy: 'Радни ток који помаже аналитичарима тако што спаја јавне сигнале ризика компанија са унутрашњим контекстом у структурисане препоруке.',
  },
  {
    eyebrow: 'Усвајање',
    value: '300+ корисника',
    label: 'интерни асистент у сопственом хостингу',
    copy: 'Више од 300 корисника од око 1.500 који су имали приступ, уз више од 85% позитивних изричитих оцена после пуштања у рад.',
  },
  {
    eyebrow: 'Обим',
    value: '50+ радних токова',
    label: 'од процене прилике до одлуке о увођењу',
    copy: 'Рад на вештачкој интелигенцији у финансијама, операцијама, логистици и сродним тимовима, са раздвајањем корисних система од занимљивих идеја.',
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
    name: 'Преглед изводљивости радног тока са вештачком интелигенцијом',
    summary: 'За тимове који одлучују да ли систем вреди градити.',
    useWhen:
      'Користите када имате радни ток, кориснике и притисак да се крене, али вам је потребна утемељена препорука пре уласка у изградњу.',
    outcomes: [
      'Граница радног тока и мапа корисника и власника',
      'Избор између аутоматизације и помоћног система',
      'Путања ризика, провере, хостинга и трошкова',
      'Провера правца добављача или архитектуре, када је релевантно',
      'Препорука: градити, ојачати, поједноставити или зауставити',
    ],
  },
  {
    name: 'Преглед ојачавања пилота',
    summary: 'За тимове са прототипом који ради у демонстрацији, али није спреман за стварну употребу.',
    useWhen:
      'Користите када постоји пословна потреба, али су провера, приступ, оперативна видљивост, трошкови, пут прегледа или предаја и даље слаби.',
    outcomes: [
      'Налази о ојачавању и ризици спремности',
      'Списак провера и начина отказа које треба затворити',
      'Захтеви за приступ, преглед, видљивост рада и трошкове',
      'План испоруке следеће верзије',
    ],
  },
  {
    name: 'Спремност интерног асистента знања',
    summary: 'За тимове који граде или спасавају RAG или интерног асистента.',
    useWhen:
      'Користите када тежак део није интерфејс за разговор, већ границе приступа, квалитет проналажења знања, повратне петље, власништво над садржајем, видљивост коришћења и управљање.',
    outcomes: [
      'Модел извора знања и власништва',
      'План граница приступа и квалитета проналажења',
      'Повратна петља за оператере',
      'Модел усвајања и видљивости трошкова',
    ],
  },
  {
    name: 'Изградња радног тока за подршку одлукама',
    summary: 'За аналитичке токове у којима људи састављају контекст пре препорука или одлука.',
    useWhen:
      'Користите када је уско грло понављиво прикупљање контекста, синтеза, квалитет препоруке, проверљивост или доследност.',
    outcomes: [
      'Модел радног тока и дизајн структурисаног излаза',
      'Облик интеграције контекста',
      'Пут људског прегледа',
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
      'Пројектна испорука интерних система вештачке интелигенције за предузећа и тимове у средње великим организацијама, када постоји конкретан радни ток за унапређење и стварни оперативни контекст.',
    details: [
      'Интерни асистенти, системи приступа знању и радни токови за подршку аналитичарима',
      'Прве верзије које пролазе кроз проверу, са јасним одлукама о прегледу и приступу',
      'Одговорност од дефинисаног радног тока до испоручене имплементације и предаје',
    ],
    featured: true,
  },
  {
    name: 'Ојачавање',
    summary:
      'Преузимање прототипа или пилота који већ постоји и претварање у поузданији, проверљивији и оперативно видљив систем спреман за стварну употребу.',
    details: [
      'Ојачавање провере, начина отказа и пута прегледа',
      'Модел приступа, оперативна видљивост, сигнали коришћења и видљивост трошкова',
      'Сређивање пута од прототипа до продукције и спремност за предају',
    ],
    featured: false,
  },
  {
    name: 'Саветовање',
    summary:
      'Ограничен саветодавни рад који изоштрава облик система, пут испоруке и ризик имплементације пре или уз изградњу.',
    details: [
      'Преглед архитектуре и радног тока',
      'Дефинисање случаја употребе, власништва и испоруке',
      'Планирање ризика имплементације и предаје',
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
    'Тимови са конкретним интерним радним током, стварним корисницима и разлогом да систем мора да заслужи трајну употребу после увођења.',
    'Системи за подршку одлукама, системи за приступ знању и интерни алати који захтевају дисциплиновану проверу и испоруку.',
    'Пројектна изградња, ојачавање или саветовање са јасним власништвом и стварном пословном потребом.',
  ],
  notFit: [
    'Истраживање на нивоу идеје без стварног власника радног тока или пута усвајања.',
    'Општи захтеви за „трансформацију вештачком интелигенцијом” без дефинисаног проблема који треба решити.',
    'Четбот или рад прво за демонстрацију, када оперативни квалитет и усвајање нису циљ.',
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
  responseTime: 'Јасни описи радног тока обично добијају одговор у року од 3 радна дана.',
  fitNote:
    'Кратак оквир радног тока је довољан за први преглед; кључни детаљи су радни ток, корисници, тренутна фаза и ограничења која ће у пракси бити важна.',
  emailPrompt:
    'Кратак оквир радног тока, власника, тренутне фазе и захтева поверења довољан је да се одлучи да ли разговор треба наставити.',
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
  skipLink: 'Прескочите на садржај',
  navAriaLabel: 'Главна навигација',
  languageSwitcherLabel: 'Језик',
  switchLanguageLabel: 'Промена језика',
  footerDescription:
    'Интерни системи вештачке интелигенције за пословне токове, са нагласком на проверу, дисциплину увођења и системе које тим може да води после предаје.',
  heroEyebrow: 'Испорука интерних система вештачке интелигенције',
  heroMarker: '00 / преглед',
  operatingBrief: {
    eyebrow: 'Оперативни сажетак',
    items: [
      {
        label: 'Фокус',
        value:
          'Подршка аналитичарима, приступ знању и интерни радни токови у којима су поверење, усвајање и оперативна ограничења важни.',
      },
      {
        label: 'Положај',
        value: 'Пројектна изградња и ојачавање, уз саветовање везано за стварне одлуке о испоруци.',
      },
      {
        label: 'Приступ испоруци',
        value:
          'Провера, видљивост трошкова, људски преглед, границе приступа и предаја третирају се као део система.',
      },
    ],
  },
  ctaEyebrow: 'Преглед радног тока',
  serviceCard: {
    primaryMode: 'Главни начин рада',
    secondaryMode: 'Пратећи начин рада',
  },
  caseStudyCard: {
    caseLabel: 'Случај',
    contextLabel: 'Контекст',
    outcomeLabel: 'Исход',
    readLabel: 'Прочитајте приказ',
  },
  caseStudyDetail: {
    backLabel: 'Назад на изабрани рад',
    workContextLabel: 'Контекст рада',
    outcomeSignalLabel: 'Сигнал исхода',
  },
  schema: {
    jobTitle: 'Независни консултант за системе вештачке интелигенције',
    knowsAbout: [
      'Интерни системи вештачке интелигенције',
      'Увођење вештачке интелигенције у предузећима',
      'Провера система вештачке интелигенције',
      'Изводљивост радних токова са вештачком интелигенцијом',
      'Ојачавање пилота са вештачком интелигенцијом',
      'Пут од прототипа до продукције',
      'Видљивост трошкова система вештачке интелигенције',
      'Радни токови са људским прегледом',
      'Интерни асистенти знања',
      'Радни токови за подршку одлукама',
      'Проналажење знања уз генерисање одговора',
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
