import type { ExperienceItem, EducationItem } from './types';

export const experiences: ExperienceItem[] = [
  {
    company: 'CoverageX',
    location: 'Colombo, Sri Lanka',
    roles: [
      {
        title: 'Associate Software Engineer',
        period: 'Jul 2025 – Present',
        current: true,
      },
      {
        title: 'Software Engineer Intern',
        period: 'Jan 2025 – Jul 2025',
        current: false,
      },
    ],
    projects: [
      {
        name: 'CoverageX.com Project',
        description:
          'Led redesign and frontend build with Nuxt.js, Tailwind v4, TypeScript; collaborated on backend & API integration; designed & developed marketing emails with SendGrid.',
      },
      {
        name: 'BuyOnline Platform',
        description:
          'Designed intuitive purchase flows and responsive UI using Nuxt.js, Tailwind v4, TypeScript.',
      },
      {
        name: 'Payment Plan Web App',
        description:
          'Designed user flows as lead UI/UX designer; contributed to frontend implementation for installment payments.',
      },
      {
        name: 'MB Hospitality Project',
        description:
          'Designed UI/UX in Figma and implemented interfaces with Nuxt 3, TypeScript, Tailwind CSS, GSAP.',
      },
    ],
    tags: ['Nuxt.js', 'TypeScript', 'Tailwind v4', 'Figma', 'GSAP'],
  },
  {
    company: 'AT Digital',
    location: 'Colombo, Sri Lanka',
    roles: [
      {
        title: 'UI/UX Designer Intern',
        period: 'Dec 2024 – Jan 2025',
        current: false,
      },
    ],
    projects: [
      {
        name: 'Marketing Campaigns',
        description:
          'Created wireframes and responsive UI designs for marketing campaigns.',
      },
      {
        name: 'Frontend Workflows',
        description: 'Improved usability and supported frontend workflows.',
      },
    ],
    tags: ['UI/UX Design', 'Wireframing', 'Marketing'],
  },
  {
    company: 'Boss Up Media',
    location: 'Colombo, Sri Lanka (Hybrid)',
    roles: [
      {
        title: 'Visual Graphic Designer',
        period: 'May 2024 – Nov 2024',
        current: false,
      },
    ],
    projects: [
      {
        name: 'Branding & Identity',
        description:
          'Designed branding assets, logos, and social media creatives.',
      },
      {
        name: 'Marketing Designs',
        description:
          'Delivered print and digital marketing designs for campaigns.',
      },
    ],
    tags: ['Graphic Design', 'Branding', 'Social Media'],
  },
  {
    company: 'The Qexle',
    location: 'Malabe, Sri Lanka',
    roles: [
      {
        title: 'Founder',
        period: 'Dec 2019 – Present',
        current: true,
      },
    ],
    projects: [
      {
        name: 'Digital Solutions',
        description:
          'Founded digital solutions brand delivering projects in UI/UX, frontend development, CMS, and e-commerce.',
      },
      {
        name: 'Web Development',
        description:
          'Built responsive SEO-friendly websites with WordPress, React, Node.js, Figma, Adobe tools.',
      },
    ],
    tags: ['Founder', 'Full-Stack', 'UI/UX', 'WordPress', 'React'],
  },
  {
    company: 'Freelance',
    location: 'Upwork & Fiverr',
    roles: [
      {
        title: 'UI/UX Designer & Developer',
        period: 'Aug 2016 – Mar 2024',
        current: false,
      },
    ],
    projects: [
      {
        name: 'Global Projects',
        description:
          'Designed and developed global projects in UI/UX, wireframing, branding, and web applications.',
      },
      {
        name: 'Tech Stack',
        description:
          'Figma, Adobe XD, React, Node.js, HTML, CSS, JavaScript.',
      },
    ],
    tags: ['Freelance', 'UI/UX', 'Web Development', 'Branding'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Software Engineering (Honours)',
    status: 'Undergraduate',
    institution: 'National Institute of Business Management (NIBM)',
    location: 'Sri Lanka',
    period: 'Expected Graduation: 2026',
    gpa: '3.80/4.0',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Web Development',
      'Database Management Systems',
      'Agile Methodologies',
    ],
    tags: ['Software Engineering', 'Web Development', 'DBMS'],
  },
];
