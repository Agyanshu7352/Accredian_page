import type {
  StatItem,
  FeatureCard,
  Testimonial,
  ProcessStep,
  DomainItem,
} from "@/types";

// ─── Hero Section ────────────────────────────────────────────────────
export const HERO_CONTENT = {
  badge: "Trusted by 250+ Enterprises",
  title: "Next-Gen Expertise for",
  titleHighlight: "Enterprise Growth",
  subtitle:
    "Empower your workforce with industry-leading upskilling programs designed by IIT alumni. Measurable outcomes, cutting-edge curriculum, and dedicated enterprise support.",
  primaryCta: "Schedule a Demo",
  secondaryCta: "Explore Programs",
} as const;

// ─── Stats Section ───────────────────────────────────────────────────
export const STATS = [
  {
    value: "250+",
    label: "Corporate Partners Driving Enterprise Learning Success",
  },
  {
    value: "50,000+",
    label: "Professionals Trained Across Industry-Leading Programs",
  },
  {
    value: "92%",
    label: "Completion Rate Reflecting High Learner Engagement",
  },
];

// ─── Feature / Edge Cards ────────────────────────────────────────────
export const FEATURES: FeatureCard[] = [
  {
    id: "feat-1",
    title: "Tailored Solutions",
    description:
      "Programs customized to your organization’s goals, challenges, and workforce needs for maximum impact.",
    icon: "curriculum",
  },
  {
    id: "feat-2",
    title: "Innovative Framework",
    description:
      "Proprietary training methodologies designed for impactful, application-driven learning outcomes.",
    icon: "faculty",
  },
  {
    id: "feat-3",
    title: "Diverse & Flexible Offerings",
    description:
      "Courses across industries with flexible delivery modes including online, hybrid, and on-campus options.",
    icon: "flexible",
  },
  {
    id: "feat-4",
    title: "Expert Guidance",
    description:
      "Learn from industry leaders and experienced faculty with deep real-world expertise.",
    icon: "support",
  },
  {
    id: "feat-5",
    title: "Advanced Technology",
    description:
      "State-of-the-art learning platforms ensuring seamless, engaging, and scalable learning experiences.",
    icon: "analytics",
  },
  {
    id: "feat-6",
    title: "Proven Impact",
    description:
      "Trusted by leading organizations with measurable ROI and consistently high learner success rates.",
    icon: "projects",
  },
];
// ─── How It Works (Process Steps) ────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Needs Assessment",
    description:
      "We analyze your team's skill gaps and business objectives to design a tailored learning roadmap.",
    icon: "search",
  },
  {
    step: 2,
    title: "Custom Program Design",
    description:
      "Our curriculum team crafts a bespoke program with relevant case studies, projects, and assessments.",
    icon: "design",
  },
  {
    step: 3,
    title: "Program Delivery",
    description:
      "Expert-led sessions delivered in your preferred format—live online, hybrid, or on-site.",
    icon: "rocket",
  },
  {
    step: 4,
    title: "Impact Measurement",
    description:
      "Continuous tracking of learning outcomes and business impact with detailed analytics reports.",
    icon: "chart",
  },
];

// ─── Domains ─────────────────────────────────────────────────────────

export const DOMAINS = [
  {
    id: "domain-1",
    name: "Product & Innovation Hub",
    icon: "bulb",
  },
  {
    id: "domain-2",
    name: "Gen-AI Mastery",
    icon: "brain",
  },
  {
    id: "domain-3",
    name: "Leadership Elevation",
    icon: "user",
  },
  {
    id: "domain-4",
    name: "Tech & Data Insights",
    icon: "bar-chart",
  },
  {
    id: "domain-5",
    name: "Operations Excellence",
    icon: "settings",
  },
  {
    id: "domain-6",
    name: "Digital Enterprise",
    icon: "globe",
  },
  {
    id: "domain-7",
    name: "Fintech Innovation Lab",
    icon: "currency",
  },
];


// ─── Testimonials ────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Accredian transformed our data team's capabilities in just 12 weeks. The hands-on projects were directly applicable to our business challenges.",
    author: "Rajesh Kumar",
    designation: "VP of Engineering",
    company: "TechCorp India",
  },
  {
    id: "test-2",
    quote:
      "The quality of instruction and curriculum design is unmatched. Our team's productivity increased by 40% post-training.",
    author: "Priya Sharma",
    designation: "Chief Learning Officer",
    company: "GlobalFinance Ltd",
  },
  {
    id: "test-3",
    quote:
      "What sets Accredian apart is their dedication to measuring outcomes. We could clearly see the ROI from day one.",
    author: "Amit Patel",
    designation: "Director of L&D",
    company: "InnovateTech Solutions",
  },
];

// ─── CTA Section ─────────────────────────────────────────────────────
export const CTA_CONTENT = {
  title: "Ready to Future-Proof Your Workforce?",
  subtitle:
    "Join 250+ enterprises that trust Accredian to deliver measurable upskilling outcomes. Let's design a program tailored to your needs.",
  buttonText: "Get Started Today",
  secondaryButtonText: "Download Brochure",
} as const;
