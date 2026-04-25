export const certifications = [
  {
    issuer: 'IBM',
    title: 'DevOps and Software Engineering Professional Certificate',
    platform: 'Coursera',
    completedDate: 'July 15, 2025',
    credentialId: 'CQY1IGZNA6F2',
    duration: '6 months',
    totalCourses: 15,
    courses: [
      'Introduction to DevOps',
      'Introduction to Cloud Computing',
      'Introduction to Agile Development and Scrum',
      'Introduction to Software Engineering',
      'Getting Started with Git and GitHub',
      'Hands-on Introduction to Linux Commands and Shell Scripting',
      'Python for Data Science, AI & Development',
      'Developing AI Applications with Python and Flask',
      'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
      'Application Development using Microservices and Serverless',
      'Introduction to Test and Behavior Driven Development',
      'Continuous Integration and Continuous Delivery (CI/CD)',
      'Application Security for Developers and DevOps Professionals',
      'Monitoring and Observability for Development and DevOps',
      'DevOps Capstone Project',
    ],
    skills: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Computing', 'Python', 'Flask', 'Security', 'Monitoring'],
  },
] as const;

export type Certification = (typeof certifications)[number];
