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
      'Software engineer based in Kuala Lumpur, Malaysia. Passionate about crafting meaningful digital experiences — from scalable backends to polished user interfaces.',
    long: "I'm a Full-Stack Software Engineer at CIBC Technology in Kuala Lumpur. I craft meaningful digital experiences — from scalable backends to polished user interfaces. When I'm not at the keyboard, I'm on a summit chasing golden hour. I believe the discipline of a good climb and good code are the same — preparation, endurance, and knowing when to push further.",
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
    email: 'haryssd36@gmail.com',
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
    albumArt: '/images/kanye.jpg',
  },

  story: {
    codingOrigin:
      'Started at age 14 with ethical hacking — BackTrack and Kali Linux. Fell in love with problem-solving and never stopped.',
    motivation:
      "Inspired by the TV show 'Bersamamu' growing up. The goal has always been to help people through technology.",
    philosophy: 'Progress over final goals.',
    hobbies: ['Mountain hiking', 'Nature photography', 'Music'],
    milestones2025: [
      'Completed IBM DevOps & Software Engineering Certificate (15 courses)',
      'Built this portfolio',
      'Learned to tread water',
      'Gained muscle — 56kg to 75kg',
      'Climbed Mount Berbabu',
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
