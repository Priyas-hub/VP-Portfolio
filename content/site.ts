// ─────────────────────────────────────────────────────────────
//  All the words on the site live here.
//  Edit this file to change text — no need to touch components.
//  Rule: never add numbers, users or results that aren't real.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Vishnupriya Saravanar",
  short: "Priya",
  role: "Product Owner · AI products",
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
  eyebrow: "Product Owner · AI products · Tirupur, India (Remote)",
  line1: "Messy rules. Real users.",
  line2: "Products that hold up.",
  lead:
    "I'm Priya, a Product Owner at a B2B SaaS startup. I learn a client's world quickly, from German employment-agency rules to US home-care referrals, and turn it into software a small team can ship. I also build AI products, including a prompting lab for teachers and a civic complaint assistant, designed to be honest about what they don't know.",
};

export const ieo = [
  {
    k: "01 · Intent",
    t: "Build what helps",
    d: "Start from the real problem of the people who will use it.",
  },
  {
    k: "02 · Effort",
    t: "Own it end to end",
    d: "From discovery and specs to UAT and go-live.",
  },
  {
    k: "03 · Outcome",
    t: "Measure it honestly",
    d: "Real metrics and real users. No invented numbers, even when a project does not go as planned.",
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
    tags: ["Individual project", "EdTech · AI"],
    kind: "solo",
    problem:
      "Teachers already have AI. What they lack is the skill to prompt it well, and the habit of checking what it gives back.",
    proofLabel: "Decision",
    proof:
      "The North Star is prompts graded, not worksheets generated, because the goal is learning.",
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
    role: "Individual project: problem discovery, PRD, design, build (with Claude Code and Codex), launch and iteration.",
    discovery: [
      "The Rethink brief was AI for non-technical professionals. Schoolteachers were chosen because they shape how the next generation learns to use AI.",
      "Desk research, a cohort-wide survey and interviews with schoolteachers showed that admin work (worksheets, corrections, lesson plans) takes a large share of their time.",
      "A teacher needed 3–4 rounds with the AI and still checked the output by hand. She found government AI workshops too lecture-based to help.",
      "Worksheets are a weekly need; lesson plans are yearly. A habit needs a weekly task.",
    ],
    reframe:
      "Not “teachers need an AI tool”, but “teachers need to become capable of using the AI tool they already have.”",
    decisions: [
      {
        chose: "A “use AI well” product for teachers",
        rejected: "An app-building or API-skills product",
        why: "With developers removed from the survey sample, interest in building apps fell from 43% to 20%. The real need was confident, everyday use of AI.",
      },
      {
        chose: "North Star: prompt_graded",
        rejected: "Worksheets generated",
        why: "A worksheet can be produced without the teacher learning anything. A graded prompt can't happen unless the learning loop runs.",
      },
      {
        chose: "A Verify step on every result, for good",
        rejected: "A one-time tutorial, or a “hedge when unsure” rule for the AI",
        why: "A hand check of real CBSE prompts found an answer that was confidently wrong: it merged two separate parts of the Mansabdari system (zat and sawar) into one. The model was not unsure, so a hedge rule would not have caught it. The teacher's own check is the safeguard.",
      },
      {
        chose: "One task, built completely",
        rejected: "Three tasks, each half-built",
        why: "Scope went from three tasks to two, then one, as the deadline came closer. One task with the full learning loop is a complete skill. Buttons to unbuilt screens were disabled, not left as dead ends.",
      },
      {
        chose: "Semantic grading, on a separate AI provider",
        rejected: "Keyword checks, on the same provider",
        why: "Keyword checks were easy to pass without a good prompt. Hitting Gemini's free-tier limit (about 20 requests a day) led to splitting the work: Gemini generates, Groq grades.",
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
      "Real use: a handful of teachers, and two parents who use it for their children.",
    ],
    learned: [
      "Building the app was the quicker part. The harder product question is how to bring teachers back every week.",
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
    tags: ["Individual project", "9-day MVP", "Civic tech"],
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
      { src: "/work/uk-dashboard.png", caption: "The dashboard: every complaint and its status, from draft to sent to resolved." },
    ],
    tldr: [
      "Problem: grievance portals exist, but people don't know who owns their problem, so complaints go to social media and are not resolved.",
      "Built: voice or text intake in Tamil or English, a complete drafted complaint, and the right officer plus escalation chain.",
      "Status: piloted on real complaints with the NGO counsellor it was built for, in Perundurai Taluk, Erode.",
    ],
    role: "Individual project: research, PRD, routing data, build and pilot, as a 9-day MVP.",
    discovery: [
      "The Rethink brief was a product for society or government. Civic complaints were chosen because people often do not know which office is responsible.",
      "A real escalation thread from a local residents' WhatsApp forum (a damaged electric pole), where the officer dismissed the complaint.",
      "A Tamil keyword reference across departments, and a hand-built officer hierarchy for the pilot area.",
      "Service levels from primary sources: the CPGRAMS 21-day SLA, and Tamil Nadu's 30-day target.",
    ],
    reframe:
      "The portals already exist. The gap is upstream of them. So the launch goes through the NGO worker who is already the human bridge, rather than expecting mass citizen adoption on day one.",
    decisions: [
      {
        chose: "The LLM drafts; a rules engine and verified data route",
        rejected: "Letting the LLM pick the department and officer",
        why: "In government, a confident wrong answer is worse than no answer. Safety messages (emergencies, not-a-grievance) are fixed text, never generated.",
      },
      {
        chose: "Keep “not found” contacts as honest rows",
        rejected: "Filling gaps with unverified numbers",
        why: "12 of 39 routing rows had no verified number. They show the designation and area, so a worker can find the right office. A contact list produced by an AI tool was checked line by line, and only numbers confirmed on official portals were accepted.",
      },
      {
        chose: "Store designations, not officer names",
        rejected: "A list of named officers",
        why: "Postings rotate, so names go out of date separately from phone numbers. Each contact carries its source, last-verified date and confidence.",
      },
      {
        chose: "Show the full escalation chain, as facts",
        rejected: "A “go up one level?” prompt",
        why: "The app can't know whether a higher office will respond, so it doesn't push the worker upward. Escalation is never automatic.",
      },
      {
        chose: "No “delivered” message",
        rejected: "A sent or delivered confirmation",
        why: "The app copies the complaint to WhatsApp and cannot see whether it was sent. The worker marks the status.",
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
    ],
    learned: [
      "Adoption by government offices is the hard part, not the technology.",
      "Sarvam's Tamil works well, but its wording didn't always match official department terms, so those terms were adjusted.",
      "The top request is direct WhatsApp sending, with replies flowing back into the app.",
    ],
    guardrails: [
      "Zero fabricated routings is a tracked success metric.",
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
    proof: "Parent experience (consent, sessions and wind-down), designed and built. The live parent flow follows this spec.",
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
      "My part: the parent experience, from spec and flow to a working build.",
      "Status: live. Built by a team of six.",
    ],
    role: "Rethink Buildathon C-8 (7–16 Sep 2026), team of 6. Parent experience: spec, flow and a working build (pull request to the team repo). The team shipped a teammate's implementation of the same flow. The scoring engine and backend were teammates' work.",
    discovery: [
      "We compared three problems: unsafe content, total time, and mindless autoplay watching.",
      "Only autoplay-driven watching lacked an adequate free alternative, and solving it covers the other two as features.",
    ],
    reframe: "The problem isn't screens. It's watching without intent.",
    decisions: [
      {
        chose: "Only a person can approve content",
        rejected: "Auto-approve above a score threshold",
        why: "The AI score can flag a video but never approve it. A high score can't make up for a safety flag, and a check with no data is marked “unknown”, never a pass.",
      },
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
      "Two flow bugs in the spec were found and fixed: a forced detour, and a duplicate dead-end path.",
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
  intro: "My work: taking B2B SaaS clients from requirements to go-live.",
  company: "OneHermes · B2B SaaS CRM · Remote",
  stories: [
    {
      when: "2026",
      title: "Took a US client live",
      body: "Requirements discovery for the sales and onboarding workflows, working directly with the client's team through to go-live in August 2026. The client is live on the platform, and enhancements continue.",
    },
    {
      when: "Sep 2026 – Present",
      title: "Onboarding a US home-care provider",
      body: "The third client onboarded. Very messy Excel data (leads, referral partners and contacts) was mapped into the CRM data model, with a sales funnel, SOPs and a walkthrough for the client's team.",
    },
    {
      when: "2025 – 2026",
      title: "Took over a German compliance platform mid-engagement",
      body: "The product lead left mid-engagement. There was no documentation, and the team was down to one engineer. German AVGS rules were learned from scratch and the workflows worked out with the client. The scheduling engine (Outlook sync, 4-way conflict checks, rule-based auto-assignment) went through five UATs with zero P1 defects, to 90%+ readiness. The German partner later exited and the project was cancelled. The lessons carried into the next client work.",
    },
  ],
  impact: [
    "50+ user stories",
    "Onboarding ~3 wks → 1–2 wks",
    "~50% fewer dev clarification cycles (developer-reported)",
    "Logic Luminary Award · Jul 2025",
  ],
  more: [
    "Payroll module, 0→1, from discovery to release.",
    "Set up the QA function: STLC and regression strategy.",
    "Business UAT for QuickBooks invoice and payroll sync.",
    "Trained a QA intern from scratch; he now owns one area independently.",
    "Guidance for a QA engineer on automation: what to automate, the plan and follow-ups.",
    "Domains learned on the job: German AVGS, US TPA, US home care, insurance, chit funds and civic grievance systems.",
  ],
  decisions: [
    {
      chose: "Lock a plan's start date once work begins",
      rejected: "Warn, then allow the edit",
      why: "Once work has started, the original start date is a baseline, and changing it is a change-control step, not a routine edit. The same review found that date changes were moving completed tasks, a live bug that was then fixed.",
    },
    {
      chose: "One default scheduling rule for all clients",
      rejected: "Per-client configuration",
      why: "Two clients wanted different behaviour, but neither needed it yet. Building both would add effort for cases nobody was using.",
    },
    {
      chose: "A lean communication-history report",
      rejected: "In-report search, extra toggles, charts and stat cards",
      why: "Search is already covered by the export and the planned global search, and a latest-note view already exists on the organisation table. One summary card was enough.",
    },
    {
      chose: "A separate Pin action for saved table views",
      rejected: "Reusing the existing star or flag icons",
      why: "Those icons already mean “system default” and “my default”. With a cap of four pinned views, a “+N more” overflow control was not needed either.",
    },
    {
      chose: "Confirm before changing any client data",
      rejected: "Fixing unclear records silently",
      why: "In a client data migration, every unclear record was confirmed first, and no names or numbers were guessed. One clean-up that removed referral history was caught in review and reversed.",
    },
  ],
  timeline: [
    {
      when: "Sep 2024 – Present",
      title: "Product Owner & Senior QA Lead · OneHermes",
      body: "Joined as QA. Grew into Scrum Master, then QA Lead, then Product Owner. Reports to the CEO.",
    },
    {
      when: "Jul – Sep 2026 · alongside work",
      title: "Mastering AI-Product Management · Rethink Systems",
      body: "Cohort 8. Six case studies, two individual projects and a team build-a-thon.",
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
    d: "Before building: which problem is really worth solving? On KidQ we picked autoplay over two louder problems. On Ungal Kural the gap turned out to be upstream of the portals.",
    link: "/work/kidq",
  },
  {
    t: "Measure learning, not output.",
    d: "Output is easy to count and easy to fake. Catalyst's North Star is prompts graded, because that can't happen unless the teacher is actually learning.",
    link: "/work/catalyst",
  },
  {
    t: "AI must be honest.",
    d: "A confident wrong answer does more harm than “I don't know”. AI drafts, verified rules decide, and the product admits what it doesn't know.",
    link: "/work/ungal-kural",
  },
  {
    t: "Building is the easy part; judgment is the work.",
    d: "AI makes building faster. Taking products end to end showed me that the harder questions are adoption, friction, retention, whether the user's time is well spent, and distribution.",
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
  lead: "As AI grows more capable, the work that matters most is making it trustworthy. That means clear guardrails, and evals that show whether it is working. This is the area I am focusing on next.",
  evidence: [
    { project: "Ungal Kural", text: "Rules route and the AI only drafts. Contacts are verified, and missing data is shown as missing, never filled in.", link: "/work/ungal-kural" },
    { project: "Catalyst", text: "A second model scores each prompt against a rubric before generation, followed by a human verification checklist.", link: "/work/catalyst" },
    { project: "KidQ", text: "The AI content score is a badge, never a gate, with human admin review. No voice on consent.", link: "/work/kidq" },
  ],
  learning: "Currently learning how to design evals and guardrails for AI products, and sharing notes as I go.",
};

export const about = {
  intro:
    "I stepped away from tech for ten years to care for my family. I came back, grew from QA to Product Owner, and now also design and build AI products.",
  paras: [
    "I'm a Product Owner on a B2B SaaS CRM platform, working with clients in the US and Germany. I turn messy real-world requirements into something a small team can ship, then stay with it through go-live.",
    "My career break shaped much of how I work. In those years I cared for my family, completed an MBA, a PG Diploma in Counselling and an MSc in Yoga, and kept working part-time. I came back calmer, more patient, and clearer about what matters.",
    "I want to build products that give people time and capability back, not products that capture attention: education, civic tech, health, elder care and inclusion, and B2B tools that remove drudgery.",
  ],
  values: [
    { t: "Curiosity", d: "I keep learning, and I pick up new domains quickly." },
    { t: "Gratitude", d: "For the opportunities I have had, and the people who made them possible." },
    { t: "Let go, move forward", d: "Keep the lesson, not the grudge." },
    { t: "Make a good difference", d: "I want my work to make a real difference to people." },
  ],
  anchor: {
    quote: "Do your duty with a full heart, and don't be ruled by the result.",
    note: "My anchor, in my own words, from the Bhagavad Gita (2.47). I give my full effort and measure the outcome honestly.",
  },
  outside: ["Yoga practitioner & teacher", "Counsellor", "Former state-level footballer", "IEEE-WIE Joint Secretary (college)"],
};

export const writing: { title: string; date: string; excerpt: string; url: string }[] = [
  // Add LinkedIn posts here, e.g.
  // { title: "What building Catalyst taught me", date: "Sep 2026", excerpt: "…", url: "https://www.linkedin.com/posts/…" },
];
