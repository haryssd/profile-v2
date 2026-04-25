export const skills = [
  // Languages
  { name: 'JavaScript',  category: 'language'  },
  { name: 'TypeScript',  category: 'language'  },
  { name: 'Python',      category: 'language'  },
  { name: 'C#',          category: 'language'  },
  // Frontend
  { name: 'Vue.js',      category: 'frontend'  },
  { name: 'React',       category: 'frontend'  },
  { name: 'Next.js',     category: 'frontend'  },
  { name: 'Quasar',      category: 'frontend'  },
  { name: 'Tailwind CSS',category: 'frontend'  },
  { name: 'React Native',category: 'frontend'  },
  // Backend
  { name: 'Node.js',     category: 'backend'   },
  { name: 'MedusaJS',    category: 'backend'   },
  // Database
  { name: 'PostgreSQL',  category: 'database'  },
  { name: 'SQL Workbench',category: 'database' },
  // Cloud & DevOps
  { name: 'Docker',      category: 'devops'    },
  { name: 'Kubernetes',  category: 'devops'    },
  { name: 'IBM Cloud',   category: 'devops'    },
  { name: 'Firebase',    category: 'devops'    },
  { name: 'Microsoft Azure', category: 'devops'},
  // Tools & APIs
  { name: 'Stripe API',  category: 'tool'      },
  { name: 'SendGrid',    category: 'tool'      },
  { name: 'LeafletJS',   category: 'tool'      },
  { name: 'Git',         category: 'tool'      },
  { name: 'Postman',     category: 'tool'      },
] as const;

export type Skill = (typeof skills)[number];
