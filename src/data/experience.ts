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
      'Maintaining and enhancing the eBuild system. Built Stripe webhook handlers for subscription lifecycle management, integrated SendGrid for email notifications, and developed real-time driver tracking using LeafletJS + Firebase Realtime Database.',
    tags: ['Vue.js', 'Firebase', 'MedusaJS', 'Stripe', 'LeafletJS', 'SendGrid'],
    projects: ['DBG — Durian Boat Global', 'PHG Logistics'],
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
    projects: ['Queue Management System'],
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
      'Maintained the eBuild system. Developed eNquiry and Membership Rewards Points modules. Led UI optimization initiatives across the platform.',
    tags: ['Vue.js', 'PostgreSQL', 'IBM Cloud'],
    projects: ['eBuild System', 'eNquiry Module', 'Membership Rewards'],
  },
] as const;

export type Experience = (typeof experience)[number];
