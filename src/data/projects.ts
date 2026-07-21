export const projects = [
  {
    num: 'OBJECT-01',
    category: 'Personal',
    title: 'Keluarga Omar — Digital Family Tree',
    description:
      'A bilingual (Malay) interactive family tree spanning 4 generations. Two navigation modes — pannable node-graph and drill-down slide view. Full-text search, per-person ancestry timelines, and deceased member handling. Entire tree lives in a single version-controlled JSON file.',
    tags: ['Astro', 'TypeScript', 'Vanilla JS', 'Cloudflare Pages', 'Cloudflare R2'],
    url: 'https://keluarga-omar.pages.dev',
    status: 'completed' as const,
  },
  {
    num: 'OBJECT-02',
    category: 'Personal',
    title: 'Haris Picks — Affiliate Storefront',
    description:
      'A custom-branded TikTok link-in-bio storefront for Shopee/Taobao affiliate links. Category browsing, live search, per-product click tracking via edge redirects, R2 image hosting, and a full admin panel behind Cloudflare Access — all on the free tier.',
    tags: ['Vanilla JS', 'Cloudflare Pages', 'Cloudflare D1', 'Cloudflare R2', 'Cloudflare Access', 'SQLite'],
    url: 'https://harisdanielnoh-storefront.pages.dev',
    status: 'completed' as const,
  },
  {
    num: 'OBJECT-03',
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
