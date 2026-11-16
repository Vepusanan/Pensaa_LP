/**
 * Single home for every user-facing string on the site.
 *
 * Source of truth: content/landing-copy.txt (verbatim).
 * After editing copy, run `npm run build && npm run check:copy`.
 *
 * `headlineMuted`: optional trailing fragment of `headline` rendered in muted grey
 * (two-tone headings). It must be an exact substring of the headline; leave "" for one tone.
 */

export type SectionId = "problem" | "inside" | "practice" | "audience" | "future" | "faq";

export interface NavItem {
  label: string;
  id: SectionId;
}

export type Accent = "red" | "amber" | "blue" | "green";
export type PainIcon = "x" | "clock" | "repeat" | "chart";

export interface PainCard {
  text: string;
  accent: Accent;
  icon: PainIcon;
}

export interface Milestone {
  title: string;
  description: string;
  /** Path under /public. Placeholder renders until the file exists. */
  image: string;
  alt: string;
  caption: string;
}

export interface AudienceCard {
  title: string;
  body: string;
}

export type BadgeTone = "live" | "progress" | "neutral" | "brand";

export interface FutureCard {
  title: string;
  badge: string;
  tone: BadgeTone;
  icon: "institution" | "adaptive";
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export const brand = "Pensaa";

export const seo = {
  title: "Pensaa — Make practice personal",
  ogImage: "/og.png",
  ogImageAlt: "Pensaa",
};

export const nav = {
  ariaLabel: "Primary",
  items: [
    { label: "The Problem", id: "problem" },
    { label: "Inside Pensaa", id: "inside" },
    { label: "Practice Mode", id: "practice" },
    { label: "Who It's For", id: "audience" },
    { label: "Our Future", id: "future" },
    { label: "FAQ", id: "faq" },
  ] satisfies NavItem[],
  login: "Log In",
  signup: "Sign Up Free",
  openMenu: "Open menu",
  closeMenu: "Close menu",
};

export const hero = {
  eyebrow: "Pensaa",
  headline: "Make practice personal - not hours of random drills.",
  /** Word inside the headline that receives the brand highlight. */
  highlight: "personal",
  headlineMuted: "not hours of random drills.",
  subheadline:
    "Pensaa lets teachers create exams and students organize their practice, using a real question bank organized by topic and difficulty - graded automatically with partial credit and rubrics, with feedback that explains the mistake, not just the score.",
  primaryCta: "Sign Up Free",
  secondaryCta: "Already have an account? Log In",
  demoLabel: "Demo (slide)",
};

export const problem = {
  eyebrow: "Let's be honest",
  headline: "A 67% tells a student nothing except that they should feel bad about it.",
  /** Fragment of the headline rendered large and accented. */
  highlight: "67%",
  body: "Marks measure what happened. They don't explain it. A score sheet can't tell a student which concept slipped, and it definitely can't tell a teacher that the same concept slipped for half the class. So the same gaps resurface on the next test - and the one after that.",
  cards: [
    { text: 'A red "X" doesn\'t explain the mistake - it just marks it', accent: "red", icon: "x" },
    { text: "By the time feedback arrives, the student has already moved on", accent: "amber", icon: "clock" },
    { text: "Teachers spend their weekends grading instead of teaching", accent: "blue", icon: "repeat" },
    {
      text: "Exam mistakes — careless slips or real gaps — rarely get pointed out and connected to what to review next",
      accent: "green",
      icon: "chart",
    },
  ] satisfies PainCard[],
};

export const inside = {
  eyebrow: "What's actually built",
  headline: "Real courses, with questions organized in a question bank.",
  headlineMuted: "with questions organized in a question bank.",
  body: "Everything lives inside a Course - create one, share the join code or link, and students enroll directly or by your permission. Here's what that looks like, screen by screen.",
  milestones: [
    {
      title: "One dashboard, every role",
      description:
        "Courses you teach and courses you're enrolled in sit side by side on the same account - no separate student login, no role switch.",
      image: "/images/screens/dashboard.png",
      alt: "Pensaa dashboard showing taught and enrolled courses side by side",
      caption: "Screenshot: dashboard",
    },
    {
      title: "Build your bank, one question at a time",
      description:
        "Choice, Written Response, and Fill in the Blank - all created from the same place, so a course bank doesn't need five different tools to fill it.",
      image: "/images/screens/add-question.png",
      alt: "Pensaa Add Question menu",
      caption: "Screenshot: Add Question menu",
    },
    {
      title: "Configure exactly how it runs",
      description:
        "Time limits, answer-visibility timing, retake policy, question order, passing score - set once per quiz, not negotiated after the fact.",
      image: "/images/screens/quiz-settings.png",
      alt: "Pensaa quiz settings tab",
      caption: "Screenshot: quiz settings tab",
    },
    {
      title: "See where the class struggled",
      description:
        "Score distribution, pass/fail, completion time, and which question tripped up the most students - the moment the quiz closes.",
      image: "/images/screens/analytics.png",
      alt: "Pensaa analytics dashboard",
      caption: "Screenshot: analytics dashboard",
    },
  ] satisfies Milestone[],
};

export const practice = {
  eyebrow: "Where we are today",
  badge: "Latest updates",
  headline: "Practice Mode is live. Fully adaptive delivery is what we're building next.",
  // Left single-tone so the "not yet adaptive" disclosure stays at full weight.
  headlineMuted: "",
  liveBadge: "Live",
  paragraphOne:
    "Teachers choose exactly which folders are available for practice by topic, by difficulty, or both and turn the whole thing on or off per course. Students pick from the folders they've been given, set how many questions and how much time they want, and start practicing.",
  // Deliberate honesty: do not soften or remove the "Today, Practice Mode draws questions…" sentences.
  paragraphTwo:
    "Every attempt a student makes is already being logged which question, right or wrong, when - because that's the exact data our Adaptive Mastery Engine needs to start routing harder questions to students who are ready for them, and easier ones to students who aren't. That matching engine is in active development. Today, Practice Mode draws questions from the folders and difficulty range you've selected; it isn't yet personalizing question order to an individual student's demonstrated mastery. We'd rather tell you that directly than have you discover it mid-session.",
  cardBadge: "In development",
  cta: "See what's coming",
};

export const audience = {
  eyebrow: "Who's it for?",
  headline: "Teachers and students - and often, both at once.",
  headlineMuted: "and often, both at once.",
  teachers: {
    title: "Teachers",
    body: "Tired of grading the same mistake forty times by hand - whether you're running one classroom or coordinating banks across an institution. Rubrics, partial credit, and a confidential exam pool kept separate from everyday practice.",
  } satisfies AudienceCard,
  students: {
    title: "Students",
    body: "Who'd rather understand the material than just survive the test. Every wrong answer comes with an explanation, not just a mark.",
  } satisfies AudienceCard,
  teachLabel: "Teach",
  learnLabel: "Learn",
  illustrationAlt: "One person split down the middle: a teacher on the left, a student on the right",
  caption: "One account, both sides - the same login teaches a course in the morning and practices in another by afternoon.",
};

export const future = {
  eyebrow: "Our future",
  headline: "Where Pensaa is going next.",
  headlineMuted: "is going next.",
  cards: [
    {
      title: "Resources from institutions",
      badge: "Coming later",
      tone: "neutral",
      icon: "institution",
      body: "With each institution's permission, we want to bring real papers and question sets into Pensaa - for example Sri Lankan A/L papers and IELTS practice. Teachers can pull them into their own question banks, and students can practice straight from them, like a past-paper session.",
    },
    {
      title: "Adaptive learning",
      badge: "In development",
      tone: "progress",
      icon: "adaptive",
      body: "In Practice Mode, your questions will be chosen from your mastery of the course. Get a topic right and the questions get harder; keep missing it and you get more practice on exactly that topic - instead of hours of random practice.",
    },
  ] satisfies FutureCard[],
};

export const faq = {
  eyebrow: "FAQ",
  // Only heading not sourced from the copy file (approved in the brief).
  headline: "Frequently asked questions",
  headlineMuted: "questions",
  items: [
    // TODO(confirm against product): pricing answer ("free to sign up") is unconfirmed; keep verbatim from the copy file.
    {
      question: "Is it free to sign up?",
      answer: "Yes - signing up is free and you can start building a course right away.",
    },
    {
      question: "Do I need separate accounts to teach and to learn?",
      answer:
        "No. One account does both — courses you teach and courses you're enrolled in appear together on your dashboard.",
    },
    {
      question: "How do students join a course?",
      answer: "Teachers share a join code or link, and students enroll directly or by the teacher's permission.",
    },
    {
      question: "What kinds of questions can I create?",
      answer:
        "Choice, Written Response, and Fill in the Blank. Questions live in a bank organized by topic and difficulty, and you can reuse them across quizzes and exams.",
    },
    {
      question: "How does grading work?",
      answer:
        "Most answers are graded automatically, with partial credit and rubrics. Written responses that can't be graded automatically go to the teacher.",
    },
    {
      question: "Is adaptive practice available yet?",
      answer:
        "Not yet. Practice Mode is live today, with questions drawn from the topics and difficulty you pick. Mastery-based adaptive delivery is in development.",
    },
    // TODO(confirm against product): exam-pool confidentiality is unconfirmed; keep verbatim from the copy file.
    {
      question: "Will exam questions leak into student practice?",
      answer: "No. A confidential Exam Questions pool is kept separate from the bank students practice from.",
    },
    {
      question: "Can I use past papers from other institutions?",
      answer:
        "Not yet. We plan to add papers such as Sri Lankan A/L and IELTS, only with each institution's permission.",
    },
  ] satisfies FaqItem[],
};

export const footer = {
  heading: "Pensaa",
  body: "We're building this with input from the people who'll actually use it — teachers, students, and the institutions standing behind both. If that's you, we want to hear from you.",
  contactLabel: "Got a question, an idea, or a classroom you want to pilot this in? Reach us at",
  email: "hello@pensaa.com",
  capture: {
    heading: "Still deciding, or want more info first?",
    body: "Drop your email below and we'll reach out directly — no pressure, just a real conversation about whether Pensaa fits your course.",
    label: "Email address",
    placeholder: "you@school.edu",
    button: "Get in touch",
    honeypotLabel: "Company",
    sending: "Sending…",
    success: "Thanks, we'll be in touch.",
    error: "Something went wrong. Please email hello@pensaa.com.",
    mailtoOpened: "Your email app should open with your message ready to send.",
    mailtoSubject: "Pensaa enquiry",
  },
};

export const legal = {
  copyright: "© 2026 Pensaa. All rights reserved.",
  ariaLabel: "Legal",
  links: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Support Policy", href: "/support" },
  ] satisfies LegalLink[],
  comingSoon: "Coming soon",
  backHome: "Back to home",
};

/** Proposal only, not approved copy. Gated by SHOW_CLOSING_CTA in pages/index.astro. */
export const closingCta = {
  headline: "Ready to make practice personal?",
  cta: "Sign Up Free",
};

/** Interface microcopy (not marketing copy). */
export const ui = {
  skipLink: "Skip to content",
  homeLabel: "Pensaa home",
};
