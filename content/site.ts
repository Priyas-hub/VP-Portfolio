// ─────────────────────────────────────────────────────────────
//  All the words on the site live here.
//  Edit this file to change text — no need to touch components.
//  Rule: never add numbers, users or results that aren't real.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Vishnupriya Saravanar",
  short: "Priya",
  role: "Product Owner · AI builder",
  location: "Tirupur, India · Remote (IST)",
  email: "priya3988@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishnupriya-saravanar-57983177",
  github: "https://github.com/Priyas-hub",
  resume: "/resume.pdf",
  photo: "/me.png", // leave empty ("") to show the diya placeholder
  avatar: "/me-avatar.png",
  status: "Open to PM / AI-PM roles",
  now: [
    "Onboarding a US home-care client",
    "Iterating on Catalyst with teacher feedback",
    "Learning AI guardrails & evals",
  ],
};

export const hero = {
  eyebrow: "Product Owner · AI builder · Tirupur, India (Remote)",
  line1: "Full effort.",
  line2: "Honest outcomes.",
  lead:
    "I'm Priya, a Product Owner who builds AI products that give people time back. I take B2B SaaS clients from messy requirements to go-live, and I've shipped two AI products on my own.",
};

export const ieo = [
  {
    k: "01 · Intent",
    t: "Build what helps",
    d: "Teachers, citizens, parents, elders. People technology often leaves behind.",
  },
  {
    k: "02 · Effort",
    t: "Own it end to end",
    d: "Discovery, specs, UAT and go-live. And now building the product myself.",
  },
  {
    k: "03 · Outcome",
    t: "Measure it honestly",
    d: "Real metrics and real users, no invented numbers. That holds even when a project doesn't land.",
  },
];

export type Decision = { chose: string; rejected: string; why: string };

export type Project = {
  slug: string;
  name: string;
  tamil?: string;
  tagline: string;
  tags: string[];
  kind: "solo" | "team";
  problem: string;
  proofLabel: string;
  proof: string;
  live: { label: string; url: string }[];
  prd?: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; caption: string }[];
  tldr: string[];
  role: string;
  discovery: string[];
  reframe: string;
  decisions: Decision[];
  built: string[];
  stack: string;
  metrics: string[];
  learned: string[];
  guardrails: string[];
};

export const projects: Project[] = [
  {
    slug: "catalyst",
    name: "Catalyst",
    tagline: "An AI prompting lab for teachers",
    tags: ["Solo build", "EdTech · AI"],
    kind: "solo",
    problem:
      "Teachers already have AI. What they lack is the skill to prompt it well, and the habit of checking what it gives back.",
    proofLabel: "Decision",
    proof:
      "The North Star is prompts graded, not worksheets generated. Learning is the point.",
    live: [{ label: "Live app", url: "https://catalyst-ochre.vercel.app" }],
    prd: "https://docs.google.com/document/d/1HnpAk6VYtOZN7aV3o4b7hx8mSimT7f4m/edit?usp=sharing",
    image: "/work/catalyst.png",
    imageAlt: "Catalyst landing page and the first step of the prompt recipe",
    gallery: [
      { src: "/work/catalyst-flow-1.png", caption: "The flow: lesson details → strengthen the prompt → graded recipe → generated worksheet." },
      { src: "/work/catalyst-flow-2.png", caption: "Verification: the teacher checks the worksheet, then sees prompting and verification progress." },
    ],
    tldr: [
      "Problem: teachers use free AI tools but struggle to get reliable output, and rarely check it.",
      "Built: a mobile-first app that grades the teacher's prompt before generating the worksheet, then walks them through verifying it.",
      "Status: live. A handful of teachers use it, and two parents started using it to make worksheets for their own kids.",
    ],
    role: "Solo: problem discovery, PRD, design, build (with Claude Code / Codex), launch and iteration.",
    discovery: [
      "9 secondary sources, plus 2 teacher interviews I ran myself.",
      "One teacher needed 3–4 rounds with the AI and still cross-checked the output by hand. She found government AI workshops lecture-based.",
      "Worksheets are a weekly need; lesson plans are yearly. A habit needs a weekly task.",
    ],
    reframe:
      "Not “teachers need an AI tool”, but “teachers need to become capable of using the AI tool they already have.”",
    decisions: [
      {
        chose: "North Star: prompt_graded",
        rejected: "Worksheets generated",
        why: "A worksheet can be produced without the teacher learning anything. A graded prompt can't happen unless the learning loop runs.",
      },
      {
        chose: "Semantic grading, with separate AI providers",
        rejected: "Keyword-presence checks on one provider",
        why: "The architecture followed the evidence. Keyword checks gave way to semantic grading, and hitting Gemini's free-tier limit (about 20 requests a day) led me to split the work: Gemini generates, Groq grades.",
      },
      {
        chose: "Cut lesson planning from Phase 1",
        rejected: "A broader “AI for everything” teacher tool",
        why: "A once-a-year task can't carry a weekly practice habit.",
      },
    ],
    built: [
      "A four-part prompt recipe: Context, Goal, Details, Format.",
      "Each part of the prompt is graded 0–3 (out of 12) before the worksheet is generated.",
      "A verification checklist and self-rating, then progress tracking.",
      "Google login only when saving, a Mock Mode, a feedback channel and 21 tracked events.",
    ],
    stack:
      "HTML/CSS/JS · Vercel · Supabase (auth, events) · Gemini 2.5 Flash (generation) · Groq, Llama 3.3 70B (grading)",
    metrics: [
      "North Star: prompt_graded events.",
      "Real use: a handful of teachers, and two parents who found it on their own.",
      "About 5 teachers have given feedback, which I'm iterating on.",
    ],
    learned: [
      "Building was the easy part. Getting teachers to come back weekly is the real product problem.",
      "Next direction (not committed): other teacher tasks, and connectors for sharing with parents.",
    ],
    guardrails: [
      "A second model grades the teacher's prompt against a rubric: an evaluation step before any generation.",
      "A verification checklist, so AI output is checked before it reaches students.",
    ],
  },
  {
    slug: "ungal-kural",
    name: "Ungal Kural",
    tamil: "உங்கள் குரல்",
    tagline: "A civic grievance assistant, in Tamil and English",
    tags: ["Solo build", "9-day MVP", "Civic tech"],
    kind: "solo",
    problem:
      "Citizens know something is wrong, but not which officer is responsible, what that officer needs, or how to escalate.",
    proofLabel: "Guardrail",
    proof:
      "The AI drafts the complaint; a verified rules engine routes it. The AI never invents the government hierarchy.",
    live: [{ label: "Live app", url: "https://ungal-kural-psi.vercel.app" }],
    prd: "https://drive.google.com/file/d/1ncu_JTHwIUFJtVIJ0v2Ve2TSPMAML6-p/view?usp=drive_link",
    image: "/work/ungal-kural.png",
    imageAlt: "Ungal Kural screens: describe the problem in Tamil, routing and escalation, and the dashboard",
    gallery: [
      { src: "/work/uk-describe.png", caption: "Describe the problem by voice or text, in Tamil or English. Personal details blurred." },
      { src: "/work/uk-routing.png", caption: "Routing & escalation: verified officers, level by level. Contact numbers blurred." },
      { src: "/work/uk-dashboard.png", caption: "The dashboard, in demo mode, tracking each grievance from draft to resolved." },
    ],
    tldr: [
      "Problem: grievance portals exist, but people don't know who owns their problem, so complaints go to social media and die there.",
      "Built: voice or text intake in Tamil or English, a complete drafted complaint, and the right officer plus escalation chain.",
      "Status: piloted on real complaints with the NGO counsellor it was built for, in Perundurai Taluk, Erode.",
    ],
    role: "Solo: research, PRD, routing data, build and pilot. A 9-day MVP.",
    discovery: [
      "A real escalation thread from a local residents' WhatsApp forum (a damaged electric pole), where the officer dismissed the complaint.",
      "A Tamil keyword reference I compiled across departments, and a hand-built officer hierarchy for the pilot area.",
      "Service levels from primary sources: the CPGRAMS 21-day SLA, and Tamil Nadu's 30-day target.",
    ],
    reframe:
      "The portals already exist. The gap is upstream of them. So I launched through the NGO worker who is already the human bridge, not by expecting mass citizen adoption on day one.",
    decisions: [
      {
        chose: "LLM drafts; rules engine plus verified database routes",
        rejected: "Letting the LLM decide the department and officer",
        why: "In government, a confident wrong answer is worse than no answer. If routing data is missing, the app says so honestly.",
      },
      {
        chose: "Hand-verified contacts with source, date and confidence",
        rejected: "Live scraping of government websites",
        why: "Every contact row carries its source URL and last-verified date, and goes stale after about 6 months. Numbers were verified by calling.",
      },
      {
        chose: "WhatsApp first",
        rejected: "Email, and SMS OTP",
        why: "Officers respond on WhatsApp and rarely check email. SMS OTP was cut because DLT registration takes 7–21 business days.",
      },
    ],
    built: [
      "Describe (voice or text) → smart questions → review → duplicate check → routing → share → track.",
      "Sarvam AI speech-to-text for Tamil and Tanglish, so older users can speak their complaint.",
      "Emergency detection that sends threat-to-life cases to emergency services.",
      "About 7+ departments in the pilot: streetlights, waste, water, electricity, drainage, PWD roads and more.",
    ],
    stack: "Next.js · Vercel · Railway Postgres · Sarvam AI (Tamil speech-to-text) · Resend · Mixpanel",
    metrics: [
      "MVP success: a real grievance reaches the correct contact.",
      "The NGO worker finds it faster than their current method.",
      "Zero fabricated routings.",
    ],
    learned: [
      "Adoption by government offices is the hard part, not the technology.",
      "Sarvam's Tamil works well, but its wording didn't always match official department terms, so I adjusted those terms.",
      "The top request is direct WhatsApp sending, with replies flowing back into the app.",
    ],
    guardrails: [
      "Zero fabricated routings is a success metric, not just a hope.",
      "Honest fallback: when data is missing, the app says so instead of showing a plausible fake hierarchy.",
      "Escalation is allowed only after the real response period has passed. No invented SLAs.",
    ],
  },
  {
    slug: "kidq",
    name: "KidQ",
    tagline: "Intentional screen time for kids aged 0–6",
    tags: ["Team of 6", "Co-built", "Build-a-thon"],
    kind: "team",
    problem: "Kids' screen time runs on autoplay, not on intent.",
    proofLabel: "My part",
    proof: "I designed and built the parent experience: consent, sessions and wind-down. The live parent flow runs on my spec.",
    live: [{ label: "Live app", url: "https://kidq-web-prod.onrender.com/" }],
    image: "/work/kidq.png",
    imageAlt: "KidQ parent screen: pick a session length and time of day for a child",
    gallery: [
      { src: "/work/kidq-start.png", caption: "The parent starts a session: which child, how long, and what time of day. One break and a wind-down are built in." },
      { src: "/work/kidq-recs.png", caption: "A parent-reviewed queue that fits the time chosen. Nothing reaches the child until the parent says so." },
      { src: "/work/kidq-mix.png", caption: "Content mix: the parent decides how the session is balanced." },
      { src: "/work/kidq-pick.png", caption: "Kid mode: the child picks only from what the parent chose." },
      { src: "/work/kidq-watch.png", caption: "Watch time shown as a sun moving across the sky, so the end of a session is visible, not a surprise." },
      { src: "/work/kidq-problem.png", caption: "The problem we designed for: “5 more minutes” and a parent's doubt. (Illustration)" },
    ],
    tldr: [
      "Problem: autoplay and “one more video” drive how young kids watch.",
      "Built (team): a calm, curated, parent-controlled video space. Parents decide what, how long, and what comes next.",
      "My part: I designed and built the parent experience, from the spec and flow to my own working build.",
      "Status: live, co-built by the team.",
    ],
    role: "Rethink Buildathon C-8 (7–16 Sep 2026), team of 6. I designed and built the parent experience, from the spec and flow to my own working build (pull request to the team repo). Because of merge conflicts under time pressure, the team deployed a teammate's version of the same parent flow. The scoring engine and backend were teammates' work.",
    discovery: [
      "We compared three problems: unsafe content, total time, and mindless autoplay watching.",
      "Only autoplay-driven watching lacked an adequate free alternative, and solving it covers the other two as features.",
    ],
    reframe: "The problem isn't screens. It's watching without intent.",
    decisions: [
      {
        chose: "Voice off on the consent step",
        rejected: "Voice everywhere, for consistency",
        why: "Voice adds misrecognition risk to the one step that is compliance-critical (DPDP consent).",
      },
      {
        chose: "Ship only what doesn't depend on unconfirmed backend work",
        rejected: "Building UI that implies ranking already works",
        why: "Time-of-day behaviour was split into a copy layer (shipped) and a ranking layer (waiting on backend).",
      },
      {
        chose: "The AI score is a trust badge",
        rejected: "The AI score as a gate",
        why: "The parent stays in control. AI informs; it doesn't decide.",
      },
    ],
    built: [
      "Google login routing, and a tap-only DPDP consent step that is never pre-checked.",
      "2-field onboarding per child (nickname, age band) and a Customize Hub.",
      "Sessions of 15–90 minutes with breaks. The last break is always a wind-down.",
      "Session assembly rules: never cut a video mid-play, rotate categories, and keep the last slot calm at bedtime.",
    ],
    stack: "Team: Next.js PWA · Express/TypeScript · Postgres · YouTube, NASA & Wikimedia APIs · AI scoring with admin review",
    metrics: [],
    learned: [
      "I found and fixed flow bugs in my own spec: a forced detour, and a duplicate dead path.",
      "Don't build UI that implies something is happening until the backend confirms it.",
    ],
    guardrails: [
      "AI content scoring plus human admin review. The AI score is a badge, never a gate.",
      "No voice on consent, so there's no risk of a misheard “yes”.",
    ],
  },
];

export const teamStudies = [
  {
    name: "VendorWorld",
    line: "Vendor onboarding with parallel approvals sized by risk tier. Modelled cycle time: about 22 days → about 4.5.",
    url: "https://vendorworld-vms.vercel.app",
  },
  {
    name: "Saarthi & Sakha",
    line: "Voice-first medication adherence for elders, based on about 18 interviews. Explicit non-goal: no diagnosis.",
    url: "https://saarthi-prototype.vercel.app",
  },
  {
    name: "India's Convenience Economy",
    line: "Vehicle financing for gig workers, kept separate from any single platform. My part: desk research and the interview guide.",
    url: "https://docs.google.com/document/d/1VV31vP9KcpjRBOQp2jaGvI4rE7i4_jZN/edit?usp=sharing",
  },
];

export const experience = {
  intro: "My day job: taking B2B SaaS clients from messy reality to go-live.",
  company: "OneHermes · B2B SaaS CRM · Remote",
  stories: [
    {
      when: "2026",
      title: "Took a US client live",
      body: "I owned requirements discovery for the sales and onboarding workflows, working directly with the client's team through to go-live in August 2026. The client is using the platform, and I now own enhancements.",
    },
    {
      when: "Sep 2026 – now",
      title: "Onboarding a US home-care provider",
      body: "The third client I've onboarded. I turned very messy Excel data (leads, referral partners and contacts) into the CRM data model, built their sales funnel and SOPs, and walked them through how it all works.",
    },
    {
      when: "2025 – 2026",
      title: "Stepped in mid-flight on a German compliance platform",
      body: "The product lead left mid-engagement. There was no documentation, and the team was down to one engineer. I learned German AVGS rules from scratch and worked out the workflows with the client. I designed the scheduling engine (Outlook sync, 4-way conflict checks, rule-based auto-assignment) and took it through five UATs with zero P1 defects, to 90%+ readiness. Then the partner exited and the project was cancelled. I let it go, and carried the learning forward.",
    },
  ],
  impact: [
    "50+ user stories",
    "Onboarding ~3 wks → 1–2 wks",
    "~50% fewer dev clarification cycles (developer-reported)",
    "Logic Luminary Award · Jul 2025",
  ],
  more: [
    "Owned the Payroll module 0→1, from discovery to shipped.",
    "Set up the QA function: STLC and regression strategy.",
    "Business UAT for QuickBooks invoice and payroll sync.",
    "Trained a QA intern from scratch; he now owns one area on his own.",
    "Guide a QA engineer on automation: what to automate, the plan and follow-ups.",
    "Quick domain learner: German AVGS, US TPA, US home care, insurance, chit funds and civic grievance systems.",
  ],
  timeline: [
    {
      when: "Sep 2024 – now",
      title: "Product Owner & Senior QA Lead · OneHermes",
      body: "Joined as QA. Grew into Scrum Master, then QA Lead, then Product Owner. Reports to the CEO.",
    },
    {
      when: "Jul – Sep 2026",
      title: "Mastering AI-Product Management · Rethink Systems",
      body: "Cohort 8. Six case studies, two solo builds and a team build-a-thon.",
    },
    {
      when: "2013 – 2024",
      title: "Career break for family, with part-time work",
      body: "System & Accounts Manager (part-time), Asst. Professor for a yoga diploma programme, and an Amazon seller. Completed an MBA, a PG Diploma and an MSc.",
    },
    {
      when: "2010 – 2013",
      title: "Test Lead / Programmer Analyst · Cognizant",
      body: "SME for Test Design across multiple Scrum teams. Five direct reports. Recognised as Associate of the Month.",
    },
  ],
  education: [
    "B.E. Electronics & Communication",
    "MBA, Human Resources",
    "PG Diploma, Counselling",
    "MSc, Yoga for Human Excellence",
    "ISTQB Certified Tester (95%)",
    "Rethink AI-PM, Cohort 8",
  ],
};

export const principles = [
  {
    t: "Start with a question, not a spec.",
    d: "Before building, I ask which problem is really worth solving. On KidQ we picked autoplay over two louder problems. On Ungal Kural the gap turned out to be upstream of the portals.",
    link: "/work/kidq",
  },
  {
    t: "Measure learning, not output.",
    d: "Output is easy to count and easy to fake. Catalyst's North Star is prompts graded, because that can't happen unless the teacher is actually learning.",
    link: "/work/catalyst",
  },
  {
    t: "AI must be honest.",
    d: "A confident wrong answer does more harm than “I don't know”. I design AI to draft, verified rules to decide, and the product to admit what it doesn't know.",
    link: "/work/ungal-kural",
  },
  {
    t: "Building is the easy part; judgment is the work.",
    d: "With AI I can ship fast. Shipping end to end taught me the harder questions: adoption, friction, retention, whether the user's time is well spent, and distribution.",
    link: "/work",
  },
  {
    t: "Empathy opens the door.",
    d: "Ten years away, and a long yoga and introspection practice, taught me to read people well and stay calm when things are messy.",
    link: "/about",
  },
];

export const focus = {
  title: "AI guardrails & evals",
  lead: "As AI grows more capable, the work that matters most is making it trustworthy. That means clear guardrails, and evals that show whether it's actually working. This is where I'm heading.",
  evidence: [
    { project: "Ungal Kural", text: "Zero fabricated routings is a success metric. Routing data is verified, and when data is missing the app falls back honestly.", link: "/work/ungal-kural" },
    { project: "Catalyst", text: "A second model scores each prompt against a rubric before generation, followed by a human verification checklist.", link: "/work/catalyst" },
    { project: "KidQ", text: "The AI content score is a badge, never a gate, with human admin review. No voice on consent.", link: "/work/kidq" },
  ],
  learning: "Currently learning how to design evals and guardrails for AI products, and sharing notes as I go.",
};

export const about = {
  intro:
    "I stepped away from tech for ten years to care for my family. I came back, grew from QA to Product Owner, and now I build AI products myself.",
  paras: [
    "I'm a Product Owner on a B2B SaaS CRM platform, working with clients in the US and Germany. I turn messy real-world requirements into something a small team can ship, then stay with it through go-live.",
    "My career break isn't a gap in the story; it's where a lot of the story comes from. In those years I cared for my family, completed an MBA, a PG Diploma in Counselling and an MSc in Yoga, and kept working part-time. I came back calmer, more patient, and clearer about what matters.",
    "I want to build products that give people time and capability back, not products that capture attention: education, civic tech, health, elder care and inclusion, and B2B tools that remove drudgery.",
  ],
  values: [
    { t: "Curiosity", d: "Always learning. A new domain is a puzzle, not a wall." },
    { t: "Gratitude", d: "For every chance I've been given, and for the people who gave it." },
    { t: "Let go, move forward", d: "Forgive, don't carry grudges, and keep the lesson." },
    { t: "Make a good difference", d: "In the work, and in people's lives." },
  ],
  anchor: {
    quote: "Do your duty with a full heart, and don't be ruled by the result.",
    note: "My anchor, in my own words, from the Bhagavad Gita (2.47). I own the effort fully, and I measure the outcome honestly.",
  },
  outside: ["Yoga practitioner & teacher", "Counsellor", "Former state-level footballer", "IEEE-WIE Joint Secretary (college)"],
};

export const writing: { title: string; date: string; excerpt: string; url: string }[] = [
  // Add LinkedIn posts here, e.g.
  // { title: "What building Catalyst taught me", date: "Sep 2026", excerpt: "…", url: "https://www.linkedin.com/posts/…" },
];
