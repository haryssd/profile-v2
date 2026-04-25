export const profile = {
  name: {
    first: 'Haris',
    last: 'Daniel',
    full: 'Haris Daniel Noh',
    formal: 'Haris Daniel Bin Noh',
    initials: 'HD',
  },

  role: 'Full-Stack Software Engineer',
  tagline: 'Code. Create. Innovate.',

  bio: {
    short:
      'Full-stack dev based in KL. I build things that actually work — and when I\'m not coding, I\'m probably halfway up a mountain.',
    long: "I work as a full-stack engineer at CIBC Technology in KL. Day to day that means fixing things, building things, and occasionally breaking things on purpose to understand them better. Outside of work I hike, a lot. There's something about being on a trail with no signal that clears your head in a way nothing else does. I think good code and a good hike have more in common than people realise — both require patience, both will humble you, and both are worth it.",
  },

  location: {
    city: 'Kuala Lumpur',
    state: 'Kuala Lumpur',
    country: 'Malaysia',
    countryCode: 'MY',
    flag: '🇲🇾',
    coordinates: {
      lat: '03°08′51″N',
      lng: '101°41′42″E',
      display: '03°08′N · 101°41′E',
    },
  },

  origin: {
    birthplace: 'Tanah Merah, Kelantan',
    siblings: 'Third of four',
  },

  contact: {
    email: 'harisdanielnoh@gmail.com',
  },

  socials: {
    github: 'https://github.com/haryssd',
    linkedin: 'https://www.linkedin.com/in/harisdanielnoh/',
    instagram: 'https://www.instagram.com/haryssd/',
  },

  availability: {
    open: true,
    status: 'Signal Active · Available for Opportunities',
  },

  stats: {
    yearsExperience: '2+',
    projectsShipped: '5+',
    techSkills: '21+',
  },

  music: {
    title: 'Ghost Town',
    artist: 'Kanye West',
    youtubeId: '5S6az6odzPI',
    startAt: 13,
    previewDuration: 30,
    albumArt: '/images/kanye.webp',
  },

  story: {
    codingOrigin:
      "Got into coding at 14 through ethical hacking — BackTrack, Kali Linux, the whole thing. Honestly I had no idea what I was doing at first, but I was hooked. That curiosity never really left.",
    motivation:
      "Growing up watching 'Bersamamu' hit different. Seeing how much a little help can change someone's life made me want to be that person — just through a different medium. Tech felt like the most scalable way to do that.",
    philosophy: 'Progress beats perfection. Always.',
    hobbies: ['Mountain hiking', 'Nature photography', 'Music'],
    milestones2025: [
      'Completed IBM DevOps & Software Engineering Certificate (15 courses)',
      'Built this portfolio',
      'Learned to tread water',
      'Gained muscle — 56kg to 75kg',
      'Climbed Mount Berbabu',
    ],
    goals2026: [
      'Land a new job with 30% salary growth',
      'Get my Scuba Diving License',
      'Camp at Taman Negara, Pahang',
      'Donate food and share a meal with orphans on my birthday',
      'Post more talking content on TikTok',
      'Converse more in English — daily',
      'Clear all credit card debt',
      'Ship 2 projects in Java',
      'Deepen my connection with Allah SWT',
      'Build a side income business making RM1,000+ monthly',
    ],
  },

  education: [
    { institution: 'Sekolah Kebangsaan Sri Suria 1', level: 'Primary', badge: 'green' },
    { institution: "SMK Dato' Mahmud Paduka Raja (1)", level: 'Secondary', badge: 'blue' },
    { institution: 'MARA Junior Science College Kuala Krai', level: 'Science College', badge: 'purple' },
    { institution: 'Perlis Matriculation College', level: 'Pre-University', badge: 'orange' },
    { institution: 'Universiti Tun Hussein Onn Malaysia', level: 'University', badge: 'red' },
  ],
} as const;

export type Profile = typeof profile;
