export const experience = [
  {
    role: 'Software Engineer',
    company: 'CIBC Technology Sdn Bhd',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    start: 'Feb 2024',
    end: 'Present',
    elapsed: 'T+447 DAYS · ONGOING',
    description:
      'Full-stack engineer across multiple live products — handling everything from feature development and bug fixes to cloud migrations and CI/CD pipelines.',
    tags: ['Vue.js', 'Node.js', '.NET 8', 'Firebase', 'MySQL', 'Docker', 'Alibaba Cloud'],
    systems: [
      {
        name: 'eBuild',
        category: 'SaaS Platform',
        description: 'Core company platform. Built Stripe webhook handlers for subscription lifecycle, integrated SendGrid for transactional emails.',
        tags: ['Vue.js', 'MedusaJS', 'Stripe', 'SendGrid'],
      },
      {
        name: 'DBG — Durian Boat Global',
        category: 'E-Commerce',
        description: 'B2C e-commerce platform for durian exports. Handled product listings, cart, and subscription payment flows.',
        tags: ['Vue.js', 'MedusaJS', 'Stripe'],
      },
      {
        name: 'PHG — Live Delivery Tracker',
        category: 'Logistics',
        description: 'Real-time driver tracking using LeafletJS maps and Firebase Realtime Database. Built the payment account module.',
        tags: ['Vue.js', 'LeafletJS', 'Firebase'],
      },
      {
        name: 'Hextar Fert',
        category: 'Enterprise',
        description: 'B2B fertiliser sales platform with a .NET 8 Clean Architecture backend. Built bidirectional ERP integration syncing companies, products, and orders with EbuilderWeb in real time.',
        tags: ['.NET 8', 'Clean Architecture', 'MySQL', 'ERP'],
      },
      {
        name: 'Alunan Asas',
        category: 'Construction Tech',
        description: 'Construction project management system. Developed budget tracking, change request approval workflows, delivery orders, and real-time push & email notifications.',
        tags: ['Node.js', 'Firebase', 'MySQL', 'Autocount'],
      },
    ],
  },
  {
    role: 'Software Developer',
    company: 'Sutera Stack',
    location: 'Remote, Freelance',
    type: 'Freelance',
    start: 'Jan 2024',
    end: 'Present',
    elapsed: 'T+478 DAYS · ONGOING',
    description:
      'Built a Queue Management System for Klinik Kesihatan Sungai Air Tawar. Implemented patient management and queue tracking systems using Quasar Framework and Firebase Realtime Database.',
    tags: ['Quasar', 'Firebase', 'Vue.js'],
    systems: [],
  },
  {
    role: 'Software Engineer Intern',
    company: 'CIBC Technology Sdn Bhd',
    location: 'Kuala Lumpur',
    type: 'Internship',
    start: 'Aug 2023',
    end: 'Feb 2024',
    elapsed: 'T+184 DAYS · COMPLETE',
    description:
      'Introduced to professional software development through real product work on eBuild.',
    tags: ['Vue.js', 'PostgreSQL', 'IBM Cloud'],
    systems: [
      {
        name: 'eBuild',
        category: 'SaaS Platform',
        description: 'Developed the eNquiry and Membership Rewards Points modules from scratch. Led UI optimisation initiatives across the platform.',
        tags: ['Vue.js', 'PostgreSQL'],
      },
    ],
  },
] as const;

export type Experience = (typeof experience)[number];
