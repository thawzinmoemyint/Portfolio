// Single source of truth for all portfolio content.
// Derived from Thaw Zin Moe Myint's SWE + Data Science resumes.

export const siteUrl = "https://thawzinmoemyint.dev";

export const profile = {
  name: "Thaw Zin Moe Myint",
  title: "Full-Stack & AI/ML Engineer",
  tagline:
    "I build responsive, production-grade web products and intelligent systems — from type-safe full-stack apps to award-winning computer vision models.",
  location: "Bangkok, Thailand",
  email: "thawzinmoemyint.dev@gmail.com",
  availability: "Open to Software Engineering & AI/ML roles",
};

export const socials = {
  github: "https://github.com/thompson129",
  linkedin: "https://linkedin.com/in/thawzinmoemyint129",
  kaggle: "https://kaggle.com/thawzinmoemyint",
  email: "mailto:thawzinmoemyint.dev@gmail.com",
};

export const resumes = [
  {
    label: "Software Engineering Résumé",
    href: "/ThawZinMoeMyint_Resume_SWE.pdf",
  },
  {
    label: "Data Science / AI Résumé",
    href: "/ThawZinMoeMyint_Resume_DS.pdf",
  },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at King Mongkut's University of Technology Thonburi (KMUTT), graduating December 2026. I work across two closely related crafts: shipping full-stack web applications and building machine-learning systems.",
    "On the engineering side, I've delivered commercial web apps end-to-end as a freelancer and built a multi-property hotel platform during my internship at Doodle. On the AI side, I won an international AI hackathon with a real-time computer-vision system.",
    "I care about type-safe, well-architected code, measurable model performance, and interfaces that feel effortless.",
  ],
  education: {
    school: "King Mongkut's University of Technology Thonburi",
    degree: "B.Sc. in Computer Science",
    period: "Aug 2023 – Dec 2026 (Expected)",
    location: "Bangkok, Thailand",
    coursework: [
      "Software Engineering",
      "Machine Learning",
      "Big Data Analytics",
      "Operating Systems",
      "Computer Architecture",
      "Algorithms & Data Structures",
      "Database Systems",
      "Statistics",
    ],
  },
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer Intern",
    company: "Doodle Company Limited",
    period: "Jun 2026 – Jul 2026",
    location: "Remote",
    bullets: [
      "Developed Doodle Lodge, a multi-property hotel management platform with a direct-booking engine that bypasses OTA commissions via Stripe and Omise.",
      "Built a two-way iCal channel manager that syncs availability with OTAs to prevent overbookings.",
      "Deployed a two-service (API + web) Turborepo monorepo to Railway with managed PostgreSQL and Dockerized local development.",
      "Automated recurring jobs — payment reconciliation, channel sync, availability horizon — via GitHub Actions cron workflows.",
    ],
    tech: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Railway"],
  },
  {
    role: "Research Intern",
    company: "Neuroscience Center for Research and Innovation (NX)",
    period: "Jun 2025 – Jul 2025",
    location: "Bangkok, Thailand",
    bullets: [
      "Conducted behavioral data analysis (ANOVA) for an ongoing adolescent attention study under Asst. Prof. Dr. Sirawaj Itthipuripat.",
      "Found that high-SES participants showed reduced incongruency effects on hit rates and growth-mindset participants had significantly faster response times.",
    ],
    tech: ["Python", "Statistics", "ANOVA", "Data Analysis","MATLAB"],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "Apr 2024 – Present",
    location: "Remote",
    bullets: [
      "Delivered multiple commercial web applications end-to-end, from architectural design to production launch.",
      "Built responsive, SEO-optimized frontends with React.js and Next.js.",
      "Built scalable, type-safe backends and RESTful APIs using NestJS, Express.js, PostgreSQL and Supabase.",
    ],
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "NestJS", "Express.js", "PostgreSQL", "Supabase", "Vercel", "Railway"],
  },
];

export type ProjectTag = "Web" | "Mobile" | "AI/ML";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: ProjectTag[];
  tech: string[];
  highlight?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "God View AI",
    tagline: "Real-time patient monitoring · Hackathon Winner",
    description:
      "Award-winning real-time patient monitoring prototype. Implemented YOLOv11 for high-accuracy keypoint detection and integrated the Telegram API for instant caregiver alerts.",
    tags: ["AI/ML"],
    tech: ["Python", "PyTorch", "YOLOv11", "Telegram API"],
    highlight: "🏆 1st Place — International AI Hackathon 2025",
    links: [
      { label: "Press Release", href: "https://sit.kmutt.ac.th/ai-hackathon-2025/" },
      {label: "GitHub", href: "https://github.com/thompson129/GodViewAI" },
    ],
  },
  {
    title: "House Price Prediction",
    tagline: "End-to-end ML pipeline",
    description:
      "Engineered an end-to-end ML pipeline with 15+ custom features and automated preprocessing. Built a stacked ensemble using Optuna for hyperparameter tuning across XGBoost and ElasticNet.",
    tags: ["AI/ML"],
    tech: ["Python", "XGBoost", "LightGBM", "Optuna", "Scikit-learn"],
    links: [{ label: "GitHub", href: "https://github.com/thompson129/Advanced-Regression-House-Prices" }],
  },
  {
    title: "Bend It Right",
    tagline: "AI workout form monitoring",
    description:
      "Real-time AI workout monitoring system using a fine-tuned YOLOv11 pose model. Curated and trained on custom annotated datasets to ensure high accuracy in pose estimation.",
    tags: ["AI/ML"],
    tech: ["Python", "PyTorch", "YOLOv11", "Tkinter"],
    links: [{ label: "GitHub", href: "https://github.com/thompson129/Bend-It-Right" }],
  },
  {
    title: "Doodle Education",
    tagline: "Education platform + headless CMS · Freelance",
    description:
      "Public education platform for study programmes (K-12, GED, vocational) and language courses across Myanmar & Thailand, backed by a headless CMS. Built a GED mock-test engine that grades server-side and hides answers from clients, location-aware programme filtering, and CMS-driven copy with graceful fallbacks when the CMS is down.",
    tags: ["Web"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Strapi", "PostgreSQL", "Vercel", "Railway"],
    highlight: "🌐 Live client project — in production",
    links: [{ label: "Live Site", href: "https://doodle.tech/" }],
  },
  {
    title: "Doodle Lodge",
    tagline: "Multi-property hotel platform",
    description:
      "Multi-property hotel management platform with a commission-free direct-booking engine (Stripe & Omise) and a two-way iCal channel manager that syncs availability with OTAs to prevent overbookings.",
    tags: ["Web"],
    tech: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Railway"],
  },
  {
    title: "Campus Link",
    tagline: "University management system",
    description:
      "Server-side architecture for a university management system. Implemented Role-Based Access Control (RBAC) middleware and Zod schema validation for secure, type-safe APIs.",
    tags: ["Web"],
    tech: ["Express.js", "Prisma", "PostgreSQL", "Zod", "Node.js"],
    links: [{ label: "GitHub", href: "https://github.com/KMUTT-CampusLink/campus-server" }],
  },
  {
    title: "Zwap",
    tagline: "Waste-reduction marketplace app",
    description:
      "A disposal platform that reduces global waste through smart item redistribution — letting users give away and reclaim reusable items instead of discarding them. Built as a cross-platform Flutter app with Firebase backing the redistribution flow.",
    tags: ["Mobile"],
    tech: ["Flutter", "Dart", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/CSC291-Zwap/client" }],
  },
  {
    title: "Libro Tracker",
    tagline: "Reading habit mobile app",
    description:
      "Modular mobile application that lets users log reading habits and set goals. Integrated the Google Books API for real-time book data and Hive for efficient local persistence.",
    tags: ["Mobile"],
    tech: ["Flutter", "Hive", "Firebase", "Google Books API"],
    links: [{ label: "GitHub", href: "https://github.com/thompson129/libro_tracker" }],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL", "Dart"],
  },
  {
    category: "Web & Frameworks",
    skills: ["React.js", "Next.js", "NestJS", "Express.js", "Hono", "TailwindCSS", "Flutter"],
  },
  {
    category: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "LightGBM",
      "Optuna",
      "Computer Vision",
      "Transformers",
    ],
  },
  {
    category: "Data & Tools",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Tableau", "PowerBI", "Kaggle", "Git/GitHub"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Nginx", "Linux", "Vercel", "Railway", "Supabase", "PostgreSQL"],
  },
];

export type Award = {
  title: string;
  event: string;
  year: string;
  description: string;
  icon: "trophy" | "medal";
  href?: string;
};

export const awards: Award[] = [
  {
    title: "Winner — International AI Hackathon 2025",
    event: "SIT, KMUTT",
    year: "2025",
    description:
      "Secured 1st place by developing “God View AI”, a computer-vision solution for healthcare monitoring.",
    icon: "trophy",
    href: "https://sit.kmutt.ac.th/ai-hackathon-2025/",
  },
  {
    title: "Silver Medalist — March Machine Learning Mania 2025",
    event: "Kaggle",
    year: "2025",
    description:
      "Ranked in the global top 3% (47th of 1,727 teams) forecasting NCAA tournament outcomes with advanced ensemble techniques.",
    icon: "medal",
    href: "https://www.kaggle.com/competitions/march-machine-learning-mania-2025",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  platform: string;
  href: string;
  date?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/4WWK4SPXTWJ9",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/LXT42W6KDRL5",
  },
  {
    title: "Mathematics for Machine Learning and Data Science",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZSKZRYBCVHRP",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    platform: "NVIDIA",
    href: "https://learn.nvidia.com/certificates?id=Y75kbopUTw2SP7UG32VKCw",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    platform: "Kaggle",
    href: "https://www.kaggle.com/learn/certification/thawzinmoemyint/intro-to-machine-learning",
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    platform: "Kaggle",
    href: "https://www.kaggle.com/learn/certification/thawzinmoemyint/intermediate-machine-learning",
  },
  {
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    platform: "Kaggle",
    href: "https://www.kaggle.com/learn/certification/thawzinmoemyint/intro-to-deep-learning",
  },
  {
    title: "Computer Vision",
    issuer: "Kaggle",
    platform: "Kaggle",
    href: "https://www.kaggle.com/learn/certification/thawzinmoemyint/computer-vision",
  },
  {
    title: "Machine Learning Explainability",
    issuer: "Kaggle",
    platform: "Kaggle",
    href: "https://www.kaggle.com/learn/certification/thawzinmoemyint/machine-learning-explainability",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
