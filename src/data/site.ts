// Edit these to change pricing and the checkout link everywhere on the page.
export const CONFIG = {
  price: '$39',
  comparePrice: '$99', // set to '' to hide the strikethrough
  checkoutUrl: 'https://buy.polar.sh/polar_cl_EV6jWPc3cEiLOASFrWI3BjGBaHTrL8XA7gW6W0DROA9', // your Polar / Stripe / Lemon Squeezy link
  launchNote: 'Launch price for the first 20 customers only', // set to '' to hide
  installCmd: 'npx github:getcmokit/cmokit init',
  counts: { agents: 56, skills: 505, commands: 32 },
};

// Third-party scripts loaded on every page.
export const ANALYTICS = {
  // DataFast: paste your Website ID (dfid_…) and root domain. The script stays off until both are set.
  datafastWebsiteId: '',
  datafastDomain: '',
  // Ship or Die hackathon verification
  shipOrDieSite: '2471444cbae9aaa84c3dbf42f2ce819ca96c32e7',
};

export const roles: [string, string][] = [
  ['SEO lead', 'seo-technical'],
  ['Content strategist', 'content-marketer'],
  ['Copywriter', 'copywriting'],
  ['GEO consultant', 'geo-ai-visibility'],
  ['Paid media buyer', 'google-ads'],
  ['Email marketer', 'email-sequence'],
  ['CRO specialist', 'page-cro'],
  ['Local SEO agency', 'seo-local'],
  ['PR person', 'public-relations'],
  ['Market researcher', 'market-researcher'],
  ['Brand editor', 'brand-voice'],
  ['Launch manager', 'product-hunt-launch'],
  ['Growth analyst', 'attribution'],
];

export interface Dept {
  key: string;
  label: string;
  title: string;
  desc: string;
  agents: [string, string][];
  skills: string[];
  commands: string[];
  tryThis: string;
}

// Every name below is a real agent, skill or command in the kit.
export const departments: Dept[] = [
  {
    key: 'SEO', label: 'Search', title: 'Rank on Google without an SEO hire.',
    desc: 'Full-site audits, technical fixes, keyword research, clusters and programmatic pages, with scripts that actually check your site.',
    agents: [['seo-technical', 'Crawlability, canonicals, Core Web Vitals, sitemaps.'], ['seo-content', 'Briefs and pages built around real buyer queries.'], ['seo-backlinks', 'Link profile, toxic links, competitor gaps.']],
    skills: ['seo-audit', 'technical-seo-audit', 'keyword-research', 'keyword-clustering', 'programmatic-seo', 'schema-markup', 'internal-links', 'core-web-vitals', 'seo-drift', 'serp-analysis', 'content-gap-analysis', 'xml-sitemap', 'link-building', 'rank-tracker'],
    commands: ['/seo-audit'],
    tryThis: 'Audit my site and give me the 10 fixes that matter most this week.',
  },
  {
    key: 'AI search', label: 'GEO · AEO', title: "Show up inside ChatGPT's answers.",
    desc: 'Make your brand citable by AI engines, check which AI crawlers can reach you, and track your share of AI answers over time.',
    agents: [['geo-ai-visibility', 'How ChatGPT, Perplexity and Gemini see you.'], ['geo-platform-analysis', 'Per-engine tuning, not one-size advice.'], ['search-ai-optimization-expert', 'AEO, featured snippets, answer blocks.']],
    skills: ['geo-audit', 'geo-citability', 'geo-crawlers', 'geo-llmstxt', 'ai-visibility-audit', 'ai-citations-report', 'generative-engine-optimization', 'geo-brand-mentions', 'geo-schema', 'llms-txt', 'seo-agentic', 'share-of-voice-tracker', 'ai-prompt-research'],
    commands: ['/load-llms-txt'],
    tryThis: "Why doesn't Perplexity mention us when people ask for alternatives to our competitor?",
  },
  {
    key: 'Local', label: 'Local SEO', title: 'Win the map pack in your city.',
    desc: 'Google Business Profile audits, citations and NAP consistency, reviews, local schema and location pages, plus a geo-grid view of where you rank.',
    agents: [['seo-local', 'GBP, citations, reviews, local schema.'], ['seo-maps', 'Maps visibility and competitors around a location.']],
    skills: ['local-seo-audit', 'gbp-optimization', 'gbp-posts', 'local-citations', 'review-management', 'geogrid-analysis', 'local-landing-pages', 'local-keyword-research', 'multi-location-seo', 'service-area-seo', 'gbp-suspension-recovery', 'local-reporting'],
    commands: [],
    tryThis: 'Audit our Google Business Profile against the top 3 dentists in Austin.',
  },
  {
    key: 'Content', label: 'Content & copy', title: 'Words that sound like you, not a robot.',
    desc: 'Copy for pages, blogs, threads and newsletters, written in your voice and run through a humanizer and a truth check before it ships.',
    agents: [['content-marketer', 'Strategy, calendar and repurposing.'], ['brand-voice', 'Keeps every word on-brand and legally clean.']],
    skills: ['copywriting', 'copy-editing', 'humanizer', 'humanizer-truth-check', 'ai-copywriter', 'content-strategy', 'write-blog', 'content-repurposing', 'thread-writer', 'linkedin-posts', 'newsletter', 'short-video-scripter'],
    commands: ['/blog-post', '/social-pack', '/case-study'],
    tryThis: 'Turn our latest changelog into a blog post, a LinkedIn post and an X thread.',
  },
  {
    key: 'Paid', label: 'Paid media', title: 'Stop wasting ad spend.',
    desc: 'Account audits, campaign structure, creative testing and budget pacing across Google, Meta, LinkedIn, TikTok and Reddit ads.',
    agents: [['marketing-attribution-analyst', 'Which channel really drove the sale.']],
    skills: ['google-ads', 'meta-ads', 'linkedin-ads', 'tiktok-ads', 'reddit-ads', 'ad-account-auditor', 'wasted-spend-finder', 'ad-creative', 'bid-strategy-planner', 'budget-pacing-monitor', 'competitor-ads-analyst', 'search-term-miner'],
    commands: ['/ad-variations'],
    tryThis: 'Find where our Google Ads budget is leaking and write 5 new ad variations.',
  },
  {
    key: 'Email', label: 'Email & lifecycle', title: 'Inboxes, not spam folders.',
    desc: 'Welcome, nurture and win-back sequences, subject-line testing, deliverability checks, cold outbound and churn prevention.',
    agents: [['sales-automator', 'Outbound sequences and follow-ups.'], ['customer-success-manager', 'Onboarding and retention flows.']],
    skills: ['email-sequence', 'subject-line-lab', 'deliverability-qa', 'cold-email', 'list-hygiene-monitor', 'klaviyo-analyst', 'churn-prevention', 'reactivation-specialist', 'newsletter-monetization-planner', 'sms', 'onboarding'],
    commands: ['/email-sequence', '/cold-email', '/newsletter'],
    tryThis: 'Write a 5-email onboarding sequence that gets trial users to their first invoice.',
  },
  {
    key: 'CRO & launch', label: 'Conversion', title: 'Turn visitors into customers.',
    desc: 'Page, signup, onboarding and paywall CRO, A/B tests, pricing, referral loops and launch playbooks down to the hour.',
    agents: [['growth-strategist', 'Finds the funnel constraint and delegates.'], ['product-strategist', 'Packaging, pricing and positioning calls.']],
    skills: ['page-cro', 'signup-flow-cro', 'onboarding-cro', 'paywall-upgrade-cro', 'popup-cro', 'ab-testing', 'pricing-strategy', 'product-hunt-launch', 'launch-day-conductor', 'referral-program', 'free-tool-strategy', 'lead-magnets'],
    commands: ['/landing-page', '/launch-plan', '/growth-experiments'],
    tryThis: 'Our pricing page converts at 1.2%. Tell me why and rewrite it.',
  },
  {
    key: 'Strategy', label: 'Strategy & research', title: 'Know your market before you spend.',
    desc: 'Positioning, ICPs, competitor teardowns, customer research and a go-to-market plan you can actually execute.',
    agents: [['market-researcher', 'Market size, segments and demand.'], ['competitive-analyst', 'Teardowns and the gap nobody owns.'], ['trend-analyst', "What's rising before it's crowded."]],
    skills: ['positioning-mapper', 'icp-builder', 'competitor-analysis', 'customer-research', 'gtm-strategy', 'marketing-plan', 'marketing-psychology', 'marketing-council', 'attribution', 'message-house-builder', 'pmf-strategy'],
    commands: ['/campaign-brief', '/competitor-brief', '/value-prop'],
    tryThis: 'Who should we sell to first, and what should we say to them?',
  },
];

export const engines: [string, string, number][] = [
  ['ChatGPT', 'OpenAI', 72],
  ['Perplexity', 'Perplexity', 64],
  ['Gemini', 'Google', 58],
  ['AI Overviews', 'Google Search', 81],
  ['Claude', 'Anthropic', 49],
  ['Copilot', 'Microsoft', 43],
];

export const faqs: [string, string][] = [
  ['What exactly do I get?', 'Access to a private GitHub repo with 56 agents, 505 skills and 32 slash commands for Claude Code, a <code>CLAUDE.md</code> brand template, and the <code>cmokit</code> CLI that installs everything into your project. Every future update is included.'],
  ['Do I need Claude Code?', 'Yes. CMOkit is built for Claude Code and works on any plan: Pro, Max, Team or API. The skills are plain Markdown, so other agents that read the same skill format can use many of them too.'],
  ["I'm not technical. Can I still use it?", 'If you can paste one command into a terminal, yes. After install you just talk to Claude in plain English, or type a slash command like <code>/blog-post</code> or <code>/launch-plan</code>.'],
  ['How is this different from just prompting ChatGPT?', 'A generic chat starts cold every time and only knows what you remember to ask. CMOkit gives Claude tested playbooks for each job (an SEO audit, a pricing page, a cold email sequence), specialists that hand work to each other, and your brand context loaded every session.'],
  ['Does it help with ChatGPT and Perplexity visibility?', 'Yes. There\'s a dedicated AI-search squad: GEO audits, citability scoring, AI crawler checks, <code>llms.txt</code> generation, schema, brand-mention analysis and per-platform optimization for ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews.'],
  ['How do updates work?', 'Run <code>npx github:getcmokit/cmokit update</code>. It refreshes the components you installed and never touches your <code>CLAUDE.md</code> or files you\'ve customized.'],
  ['Is this affiliated with Anthropic?', 'No. CMOkit is an independent product built for Claude Code. "Claude" and "Anthropic" are trademarks of Anthropic.'],
];

export interface Review {
  quote: string;
  name: string;
  meta: string; // role / handle line
  avatar?: string; // path in /public, falls back to an initial
  url?: string; // link to the original post
}

// Real reviews from buyers of AgentsKit (the previous kit).
export const reviews: Review[] = [
  {
    quote: "Mohit… thank you! I'm using your kit in my new project and it's actually really helpful.",
    name: 'Ioannis Antypas',
    meta: '@ioannis_antypas · on AgentsKit, our first kit',
    avatar: '/reviews/ioannis-antypas.jpg',
    url: 'https://x.com/ioannis_antypas',
  },
];
