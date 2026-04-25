export const projects = [
  {
    num: 'OBJECT-01',
    category: 'Personal',
    title: 'Portfolio Website',
    description:
      'This site. Built with Astro, React islands, and a lot of late nights. Features a starfield canvas, music player, gallery lightbox, animated dialog, and smooth scroll reveals.',
    tags: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
    url: 'https://github.com/haryssd/profile-v2',
    status: 'completed' as const,
  },
] as const;

export type Project = (typeof projects)[number];
