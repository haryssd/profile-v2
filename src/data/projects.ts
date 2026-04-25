export const projects = [
  {
    num: 'OBJECT-01',
    category: 'Personal',
    title: 'Portfolio Website',
    description:
      'Dark-themed personal portfolio with animations, photography gallery, music player, and smooth scroll interactions.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://github.com/haryssd',
    status: 'completed' as const,
  },
  {
    num: 'OBJECT-02',
    category: 'E-Commerce',
    title: 'DBG — Durian Boat Global',
    description:
      'E-commerce platform with full authentication, Stripe subscription webhooks, and SendGrid email integration powered by MedusaJS.',
    tags: ['MedusaJS', 'Stripe', 'SendGrid', 'Vue.js'],
    url: null,
    status: 'completed' as const,
  },
  {
    num: 'OBJECT-03',
    category: 'Logistics',
    title: 'PHG — Live Delivery Tracker',
    description:
      'Real-time driver tracking with LeafletJS maps and Firebase Realtime Database, plus a complete payment account module.',
    tags: ['LeafletJS', 'Firebase', 'Vue.js'],
    url: null,
    status: 'completed' as const,
  },
] as const;

export type Project = (typeof projects)[number];
