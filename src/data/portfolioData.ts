export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Enterprise & Web' | 'Mobile' | 'APIs & Microservices' | 'Systems & Desktop';
  description: string;
  technologies: string[];
  githubUrl?: string;
  architectureDetails: {
    overview: string;
    keyFeatures: string[];
    challengesSolved: string;
    techHighlights: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  badgeType: 'first-class' | 'distinction';
  details: string;
}

export const PERSONAL_INFO = {
  name: "Hpone Myat Thu",
  title: "Software Engineer",
  subtitle: "Full-Stack, Mobile & Enterprise Desktop Solutions",
  status: "Available for Remote Worldwide & High-Impact Projects",
  bio: "Results-driven Software Engineer with 3+ years of professional experience delivering production systems across Singapore, European (Rome), and international organizations. First Class Honours Computing graduate from the University of Greenwich with 100% Distinctions in NCC Diplomas. Specializing in high-performance cross-platform mobile apps (Flutter, React Native), scalable microservices (Python, Node.js), and robust enterprise systems (C# .NET, Next.js).",
  email: "hponemy8tthu@gmail.com",
  phone: "+95 9967818026",
  location: "Yangon, Myanmar (Available for Remote Worldwide)",
  github: "https://github.com/HponeMyatThu",
  githubUsername: "HponeMyatThu",
  linkedin: "https://linkedin.com/in/hpone-myat-thu-360903262",
  resumePdf: "/Hpone_Myat_Thu_Resume.pdf",
  resumePhotoPdf: "/Hpone_Myat_Thu_Resume_With_Photo.pdf",
};

export const SKILL_GROUPS = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Dart", "C# (.NET)", "Java", "PHP", "SQL"]
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "React Native", "Android (Kotlin)", "iOS", "Bloc State Management", "Redux Toolkit", "Offline-First Sync"]
  },
  {
    category: "Frontend & Web",
    skills: ["Next.js", "React", "Microfrontends", "HTML5", "CSS3 / Modern CSS", "SCSS", "Responsive UI", "Web Performance"]
  },
  {
    category: "Backend & Microservices",
    skills: ["Python (FastAPI, Flask)", "Node.js", "NestJS", "C# .NET Core", "RESTful APIs", "Microservices", "JWT & OAuth2"]
  },
  {
    category: "Desktop & Systems",
    skills: ["C# Desktop Applications (WPF/WinForms)", "Point of Sale (POS) Engines", "Hardware Peripheral SDKs", "Concurreny"]
  },
  {
    category: "Databases & DevOps",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB (NoSQL)", "Docker", "LXD Containers", "Git", "CI/CD"]
  },
  {
    category: "AI & Integrations",
    skills: ["Google Gemini API", "LLM Prompting & Schema Extraction", "Microsoft Power Automate", "Maybank Gateway"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "microfrontend-platform",
    title: "Next.js Microfrontend Multi-App Architecture",
    tagline: "Decoupled enterprise microfrontend ecosystem with host container and independent remotes",
    category: "Enterprise & Web",
    description: "Architected a decoupled microfrontend system using Next.js where independent feature teams can build, test, and deploy remote application modules without full monolith redeployments.",
    technologies: ["Next.js", "TypeScript", "Module Federation", "Microfrontends", "REST APIs"],
    githubUrl: "https://github.com/HponeMyatThu/microfrontend-simple-hostNextjs-remoteNextjs",
    architectureDetails: {
      overview: "Designed a host-container pattern using Next.js dynamic routing and module federation principles. Independent sub-apps serve specific business domains while consuming centralized authentication and layout state.",
      keyFeatures: [
        "Runtime module loading without compile-time coupling",
        "Unified global authentication context shared across remote applications",
        "Resilient fallback boundaries preventing cascade failures if a remote service experiences downtime",
        "Zero CSS namespace collision through scoped styling"
      ],
      challengesSolved: "Eliminated deployment bottlenecks in large multi-team web apps by breaking monolithic builds into autonomous, independently deployable units.",
      techHighlights: [
        "Dynamic remote script injection with client-side hydration",
        "Cross-microfrontend event bus for decoupled communication",
        "Optimized shared dependency caching to eliminate duplicate library payloads"
      ]
    }
  },
  {
    id: "epos-warehouse-system",
    title: "Enterprise EPOS & Warehouse Management Platform (UBLOB)",
    tagline: "High-throughput Point of Sale and Inventory Management system in C# (.NET) and TypeScript",
    category: "Systems & Desktop",
    description: "Mission-critical retail and warehouse enterprise platform handling high-volume barcode scanning, sales receipts, inventory movements, cashier shift auditing, and localized offline database sync.",
    technologies: ["C# (.NET)", "TypeScript", "POS Engine", "SQL Server", "Hardware SDKs", "WMS"],
    githubUrl: "https://github.com/HponeMyatThu/UBLOB_EPOS_WMS_TM_DM_FE",
    architectureDetails: {
      overview: "Dual-tier architecture combining a resilient C# (.NET) desktop POS client with an administrative TypeScript management web dashboard, backed by a high-throughput transactional database.",
      keyFeatures: [
        "Offline-tolerant sales transaction queue with automatic conflict-free database sync upon reconnection",
        "Direct USB/Serial hardware peripheral integration with receipt printers, customer displays, and barcode scanners",
        "Warehouse stock tracking with serial numbers, batch tracking, and low-inventory reorder alerts",
        "Granular shift reconciliation and multi-tier cashier auditing"
      ],
      challengesSolved: "Overcame network dropouts during peak store hours by designing an offline-first transactional commit queue that never freezes the checkout line.",
      techHighlights: [
        "Hardware-level serial port communication in C#",
        "High-performance SQL indexing for millisecond-level product SKU lookups across 100k+ records",
        "Strict decimal arithmetic ensuring zero financial rounding discrepancies"
      ]
    }
  },
  {
    id: "rome-flutter-app",
    title: "Rome Client Cross-Platform Mobile Suite",
    tagline: "High-performance production mobile application built with Flutter and Bloc architecture",
    category: "Mobile",
    description: "Delivering a responsive, native-feeling mobile experience for European (Rome) clients on both iOS and Android, featuring offline SQLite caching, clean MVVM/Bloc state management, and biometric security.",
    technologies: ["Flutter", "Dart", "Bloc Architecture", "iOS", "Android", "REST APIs", "SQLite"],
    architectureDetails: {
      overview: "Engineered from the ground up using Flutter (Dart) following Clean Architecture principles (Presentation, Domain, and Data layers). Utilizes BLoC for predictable, testable state management.",
      keyFeatures: [
        "Consistent 60fps performance across diverse Android and iOS hardware",
        "Offline-first repository pattern with local SQLite caching and background sync",
        "Biometric authentication (FaceID & Fingerprint) with secure keychain/keystore token storage",
        "Dynamic theme engine supporting system dark/light modes and multi-language internationalization"
      ],
      challengesSolved: "Maintained seamless offline responsiveness and data integrity during intermittent international network connections without user disruption.",
      techHighlights: [
        "Reactive state streams with BLoC and RxDart",
        "Custom vector micro-animations built without external heavy assets",
        "Automated widget and unit test coverage verifying business logic"
      ]
    }
  },
  {
    id: "python-microservices-engine",
    title: "Python High-Throughput Async Microservices",
    tagline: "Low-latency RESTful microservices engine built with Python, FastAPI, and Redis",
    category: "APIs & Microservices",
    description: "Asynchronous backend microservices serving international web and mobile applications with token-based security, automated OpenAPI documentation, Redis caching, and database query optimization.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Pytest", "JWT"],
    architectureDetails: {
      overview: "Built using Python 3 and FastAPI utilizing asynchronous I/O (async/await) and ASGI server runtime. Implements a multi-layered service architecture with repository patterns and dependency injection.",
      keyFeatures: [
        "Sub-50ms average API response times through Redis caching and connection pooling",
        "JWT token authentication with refresh rotation and granular permission scopes",
        "Strict type validation and schema serialization with Pydantic",
        "Containerized deployment configuration with automated health checks"
      ],
      challengesSolved: "Reduced API response times by 35% across international routes through intelligent response payload minimization and multi-level caching.",
      techHighlights: [
        "Asynchronous SQLAlchemy ORM session management",
        "Automated Swagger/OpenAPI contract generation",
        "Pytest test suite covering endpoint validation and integration scenarios"
      ]
    }
  },
  {
    id: "oauth2-2fa-engine",
    title: "OAuth2 & Two-Factor Authentication Engine",
    tagline: "Secure authentication platform with Next.js, NextAuth, OAuth2, and TOTP 2FA",
    category: "Enterprise & Web",
    description: "Enterprise authentication platform implementing OAuth2 provider integration, encrypted session tokens, and Time-based One-Time Password (TOTP) two-factor authentication with QR onboarding.",
    technologies: ["Next.js", "TypeScript", "NextAuth / Auth.js", "OAuth2", "2FA / TOTP", "PostgreSQL"],
    githubUrl: "https://github.com/HponeMyatThu/oauth2-and-two-factors-authentication-with-next-auth",
    architectureDetails: {
      overview: "Complete identity provider and authentication module built into Next.js App Router, providing multi-provider sign-in and secondary security layer verification.",
      keyFeatures: [
        "Support for Google, GitHub, and email credential authentication",
        "Time-based One-Time Password (TOTP) 2FA verification using Google Authenticator / Authy",
        "Secure HTTP-only JWT cookies preventing XSS and CSRF token hijacking",
        "Middleware route guards protecting enterprise routes and dashboard endpoints"
      ],
      challengesSolved: "Delivered military-grade session security without introducing friction or confusing setup steps for end users.",
      techHighlights: [
        "Secret key generation and QR code provisioning",
        "Rate limiting on authentication attempts to mitigate brute-force attacks",
        "Strict TypeScript typing across session data and token claims"
      ]
    }
  },
  {
    id: "axuranze-admin-portal",
    title: "Axuranze Insurance Admin Portal & Maybank Gateway",
    tagline: "Scalable insurance platform with role-based access control and secure payments",
    category: "Enterprise & Web",
    description: "Multi-tenant insurance administration portal (AQME project) featuring role-based access control, underwriting approval workflows, audit trails, and integrated Maybank payment gateway.",
    technologies: ["React", "Next.js", "Node.js", "Maybank Gateway", "Docker", "LXD", "Microfrontends"],
    githubUrl: "https://github.com/HponeMyatThu/axr-admin-pannel-simple-frame",
    architectureDetails: {
      overview: "Core insurance administrative portal engineered for Singapore clients, linking policyholders, insurance agents, and underwriters into a unified digital management dashboard.",
      keyFeatures: [
        "Granular Role-Based Access Control (RBAC) separating agent, underwriter, and admin permissions",
        "Direct integration with Maybank payment gateway for secure policy premium payments",
        "Real-time policy lifecycle status tracking and automated PDF policy generation",
        "Isolated deployment environments prepared using Docker and LXD containers"
      ],
      challengesSolved: "Complied with strict Singapore insurance data security regulations while maintaining lightning-fast policy lookup times.",
      techHighlights: [
        "Microfrontend decoupled structure allowing independent team iteration",
        "End-to-end PCI-compliant payment transaction verification",
        "Containerized isolated deployment scripts"
      ]
    }
  },
  {
    id: "event-management-platform",
    title: "Full-Stack Event Management & Booking Platform",
    tagline: "End-to-end event scheduling, ticketing, and attendee management platform",
    category: "Enterprise & Web",
    description: "Complete full-stack event platform built with Next.js and Node.js featuring dynamic calendar scheduling, ticket purchasing, payment processing, and organizer analytics.",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Payment Gateway", "REST APIs"],
    githubUrl: "https://github.com/HponeMyatThu/event-mangement-system-ui-next-js",
    architectureDetails: {
      overview: "Full-stack application with a Next.js client and a dedicated Express/MongoDB backend service managing high-concurrency ticket reservations.",
      keyFeatures: [
        "Interactive event calendar with date/category filtering and instant search",
        "Atomic seat reservation system preventing double-booking during traffic surges",
        "Digital ticketing with QR code generation for on-site check-in verification",
        "Organizer dashboard with real-time revenue analytics and attendee rosters"
      ],
      challengesSolved: "Implemented atomic seat reservation locks so that two concurrent users cannot purchase the same remaining ticket.",
      techHighlights: [
        "Optimistic UI updates for snappy checkout experience",
        "JWT-based role authentication for event organizers vs attendees",
        "Responsive design tested across desktop, tablet, and mobile browsers"
      ]
    }
  },
  {
    id: "minthinkha-react-native",
    title: "Cultural Calendar & Astrology Mobile Suite",
    tagline: "Offline-first native mobile application built with React Native and Redux",
    category: "Mobile",
    description: "High-performance cross-platform mobile application delivering astrological algorithms, cultural calendar events, and custom Burmese typography with complete offline operation.",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "iOS", "Android", "Mobile UI"],
    githubUrl: "https://github.com/HponeMyatThu/minthinkhabaydin-with-react-native",
    architectureDetails: {
      overview: "Engineered with React Native and TypeScript, featuring 100% client-side astrological calculation engines and customized font rendering.",
      keyFeatures: [
        "Zero-latency calculations performed locally on-device without requiring an internet connection",
        "Custom Burmese Unicode typography rendering engine with zero clipping across Android versions",
        "Fluid gesture interactions and smooth navigation transitions",
        "State management with Redux Toolkit and persisted local storage"
      ],
      challengesSolved: "Solved complex Myanmar script rendering bugs across older Android devices by implementing a custom font-loader wrapper.",
      techHighlights: [
        "Native bridge optimization for compute-heavy calculation loops",
        "Lightweight bundle size under 15MB for fast download on mobile connections"
      ]
    }
  },
  {
    id: "ai-workflow-automation",
    title: "AI-Powered Insurance Workflow Automation Engine",
    tagline: "Intelligent document parsing and claims extraction pipeline with Google Gemini API",
    category: "APIs & Microservices",
    description: "Automated underwriting pipeline combining Google Gemini API with Microsoft Power Automate to extract structured data from unstructured insurance claims and policy forms.",
    technologies: ["Google Gemini API", "Python", "Power Automate", "JSON Schema", "REST APIs"],
    architectureDetails: {
      overview: "Production automation service bridging legacy document inputs with modern generative AI extraction pipelines, enforcing strict JSON schema output contracts.",
      keyFeatures: [
        "Automated extraction of policy numbers, claimant details, and financial figures from scanned PDFs",
        "Strict JSON schema validation ensuring hallucination-free outputs before database ingestion",
        "Integration with Microsoft Power Automate to trigger notification emails and CRM updates",
        "40% reduction in manual data entry turnaround for claims operations"
      ],
      challengesSolved: "Guaranteed 100% structured JSON outputs from LLM responses by implementing strict pydantic validation and retry mechanisms.",
      techHighlights: [
        "Prompt engineering with few-shot extraction examples",
        "Asynchronous document batch processing in Python",
        "Security sanitation removing sensitive PII prior to external API dispatch"
      ]
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "remote-consultant",
    role: "Remote Software Engineer",
    company: "Independent Engineering Consultant",
    client: "European (Rome) & Singapore Client Ecosystems",
    period: "06/2026 – Present",
    location: "Remote",
    type: "Contract / Consulting",
    description: "Delivering high-impact software engineering across European and Southeast Asian client organizations, focusing on cross-platform mobile apps (Flutter), microservices (Python), and enterprise desktop applications (C# .NET).",
    achievements: [
      "Rome-based Project (Italy): Architected and launched cross-platform Flutter mobile applications for iOS & Android with clean BLoC architecture and offline data persistence.",
      "Rome-based Project (Italy): Engineered high-throughput Python (FastAPI) backend microservices with token authentication and structured API contracts, reducing cross-border API latency by 35%.",
      "Singapore-based Project: Developed and optimized mission-critical enterprise desktop POS applications in C# (.NET), handling high-volume transactions and hardware peripheral integration.",
      "Singapore-based Project: Connected desktop operations with modern TypeScript web services and cloud reporting dashboards."
    ],
    skills: ["Flutter", "Dart", "Python", "FastAPI", "C# (.NET)", "TypeScript", "REST APIs", "Desktop POS"]
  },
  {
    id: "tokio-marine",
    role: "Application Developer",
    company: "Tokio Marine Insurance Singapore Pte. Ltd.",
    client: "Outsourced from ACE Data Systems Ltd.",
    period: "04/2025 – 03/2026",
    location: "Singapore (Offshore / Remote)",
    type: "Full-Time (Outsourced)",
    description: "Dual-team technical engineer balancing the continuous operation and modernization of ITD internal administrative portals with customer-facing high-volume Point of Sale (POS) systems.",
    achievements: [
      "Provided dedicated technical support across two critical engineering teams, balancing administrative portals with customer POS applications.",
      "Streamlined corporate insurance operations by building and modernizing web tools for the Information Technology Department (ITD), significantly reducing manual policy entry cycles.",
      "Ensured 99.9% uptime, stability, and continuous feature growth of desktop and web sales platforms under high-volume quarter-end transaction spikes.",
      "Collaborated closely with Singapore product owners, business analysts, and QA teams to translate complex financial/insurance business rules into reliable software."
    ],
    skills: ["C# (.NET)", "Web Portals", "POS Systems", "TypeScript", "SQL Server", "Enterprise Insurance"]
  },
  {
    id: "axuranze",
    role: "Software Engineer",
    company: "Axuranze & D3-SG",
    client: "Outsourced from ACE Data Systems Ltd.",
    period: "10/2023 – 04/2025",
    location: "Singapore (Offshore / Remote)",
    type: "Full-Time (Outsourced)",
    description: "Core engineer for the AQME insurance platform, building microfrontend architectures, mobile applications, payment gateways, and AI automation.",
    achievements: [
      "Developed a secure, multi-tenant full-stack insurance platform including an enterprise admin portal with role-based access control (RBAC) and audit logging.",
      "Built decoupled web applications using microfrontend architecture and integrated Maybank payment gateway for secure digital policy transactions.",
      "Developed and published cross-platform mobile apps for Android & iOS using React Native.",
      "Configured containerized deployment environments using Docker and LXD containers for isolated, repeatable microservice deployments.",
      "Streamlined repetitive underwriting workflows by implementing AI automation using Google Gemini API and Microsoft Power Automate, reducing turnaround times by 40%."
    ],
    skills: ["React Native", "Next.js", "React", "Microfrontends", "Maybank Gateway", "Docker", "LXD", "Gemini API"]
  },
  {
    id: "ace-data-systems",
    role: "Junior Software Engineer",
    company: "ACE Data Systems Ltd.",
    period: "09/2023 – 10/2023",
    location: "Yangon, Myanmar (MICT Park)",
    type: "Full-Time",
    description: "Full-stack development of enterprise booking and event platforms with focus on performance, scheduling algorithms, and responsive UI.",
    achievements: [
      "Meeting & Appointment System: Built a responsive, full-stack appointment booking and management platform with automated conflict detection and real-time state sync.",
      "Event Management Platform: Built an end-to-end event platform with ticketing, user authentication, online payment integrations, and modular RESTful APIs."
    ],
    skills: ["JavaScript", "Node.js", "React", "Express", "RESTful APIs", "SQL"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Bachelor of Science (Honours) in Computing",
    institution: "University of Greenwich",
    location: "London, United Kingdom",
    period: "05/2025 – 05/2026",
    grade: "First Class Honours (1st Class)",
    badgeType: "first-class",
    details: "Graduated with highest academic honors (First Class Honours). Comprehensive coursework and capstone project covering distributed systems, modern web software engineering, cloud architecture, and enterprise databases."
  },
  {
    degree: "Level 5 Diploma in Computing (L5DC)",
    institution: "NCC Education",
    location: "Manchester, United Kingdom",
    period: "05/2024 – 05/2025",
    grade: "Distinction in All Modules (100% Distinction)",
    badgeType: "distinction",
    details: "Achieved Distinction marks across 100% of advanced modules, including Information Systems Analysis, Dynamic Website Development, Network Security & Cryptography, and Advanced Database Design."
  },
  {
    degree: "Level 4 Diploma in Computing (L4DC)",
    institution: "NCC Education",
    location: "Manchester, United Kingdom",
    period: "05/2023 – 05/2024",
    grade: "Distinction in All Modules (100% Distinction)",
    badgeType: "distinction",
    details: "Awarded Distinction in every subject module, covering Computer Networks, Software Development Methodologies, Algorithms & Data Structures, and Core Programming Fundamentals."
  }
];
