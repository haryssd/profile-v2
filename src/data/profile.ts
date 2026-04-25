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
    long: "I work as a full-stack engineer at CIBC Technology in KL. Day to day that means fixing things, building things, and occasionally breaking things on purpose to understand them better. Outside of work I hike, a lot. There's something about being on a trail with no signal that clears your head in a way nothing else does. I think good code and a good hike have more in common than people realise. Both require patience, both will humble you, and both are worth it.",
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
    whoIAm: [
      "My name is Haris Daniel. I'm from Tanah Merah, Kelantan. Grew up in a kampung where nobody was in a rush, everybody knew everybody, and the biggest noise was probably a rooster at 6am. I didn't realise it then, but that kind of environment quietly taught me something. Life doesn't have to be loud to mean something.",
      "I'm a full stack engineer based in KL now. The switch from kampung life to a big city is still funny to me sometimes. But the way I approach things hasn't really changed. I don't overcomplicate, I just figure it out.",
      "What I think makes me a little different is that I've lived in two very different worlds. I know what it feels like to have very little, and I know what it feels like to have enough. That contrast changed how I see people and how I move through life. It's also why I don't fear struggle. Living simply doesn't scare me. I've been there before, and honestly it wasn't so bad.",
    ],
    whyICode: [
      "Honestly? I get bored easily. Coding is different. Every day is a different problem, a different thing to figure out, something new to learn. I never have to do the exact same thing twice and that keeps me going.",
      "There's also this. Growing up, my dad and I would watch Bersamamu together. We'd end up crying every single time. That show made me genuinely feel for people who are struggling, and that feeling never really left. I just want to be successful enough to help those who can't help themselves. I don't like the word 'miskin.' It feels heavy in the wrong way. 'Tak mampu' feels more human.",
    ],
    whyIHike: [
      "Let me be real. I don't actually enjoy the sweating or the hours of walking.",
      "What I hike for is the destination. The view. That moment when you finally get there and everything just opens up. I'm not really a rainforest hike kind of person. If there's nothing cinematic at the top, what's the point?",
      "What I really go up for is the stars. The only place I've found where I can stargaze properly. No light pollution, no noise, just sky is on top of a mountain. That alone makes every hour of climbing worth it.",
    ],
    outsideWork: [
      "I'm easy to approach and I genuinely enjoy meeting people. I have a lot of friends but only a few close ones. Honestly I think that's how it should be.",
      "I'm also completely fine doing things alone. I hike alone. I drive alone. I figure things out alone. Not because I'm closed off, but because I know what I want and I'm not going to wait around to go get it.",
      "At the end of the day I'm a man. I have to learn to adapt to every situation whether I like it or not. That's just how it is.",
    ],
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
