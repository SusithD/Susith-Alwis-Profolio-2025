import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Users, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigateHome: () => void;
}

// Local images for Colombo Kings project
const colomboKingsImages = [
  new URL('../images/logo-concept-colombo-kings/imgi_27_888ef0130936549.618ac232ec5e6.jpg', import.meta.url).href,
  new URL('../images/logo-concept-colombo-kings/imgi_101_5b49e8130936549.618ac232ee087.jpg', import.meta.url).href,
  new URL('../images/logo-concept-colombo-kings/imgi_103_7da652130936549.618ac232ed54e.jpg', import.meta.url).href,
  new URL('../images/logo-concept-colombo-kings/imgi_106_736774130936549.618ac232ecf6f.jpg', import.meta.url).href,
  new URL('../images/logo-concept-colombo-kings/imgi_109_f12e79130936549.618ac232edae3.jpg', import.meta.url).href,
];

const projectData: Record<string, any> = {
  'colombo-kings-logo-concept': {
    title: 'Logo Redesign Concept for Colombo Kings',
    subtitle: 'Branding Concept for LPL Franchise',
    role: 'Graphic Designer • Lanka Premier League, Colombo Kings',
    year: 'Apr 2021',
    duration: 'Concept Project',
    team: 'Solo',
    description: 'A conceptual logo redesign for Colombo Kings, a franchise Twenty20 cricket team based in Colombo, Sri Lanka, competing in the Lanka Premier League. The focus was to create a distinctive team identity while maintaining brand recognition within the sports context.',
    heroImage: colomboKingsImages[0],
    impact: [
      { metric: '✓', label: 'Developed conceptual logo redesign' },
      { metric: '✓', label: 'Created distinctive team identity' },
      { metric: '✓', label: 'Maintained brand recognition in sports context' },
    ],
    responsibilities: [
      'Explored multiple concept directions for the Colombo Kings identity',
      'Crafted a primary mark, supporting lockups, and usage exploration',
      'Prepared presentation-ready mockups for real-world sports applications'
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    process: [
      { phase: 'Discovery', description: 'Researched franchise history, values, and visual references from T20 cricket branding.' },
      { phase: 'Sketch & Concepts', description: 'Developed multiple logo directions balancing modern aggression with heritage.' },
      { phase: 'Refinement', description: 'Selected direction refined with geometry, proportion, and color tuning.' },
      { phase: 'Applications', description: 'Showcased usage across jerseys, merch, and social media graphics.' },
    ],
    keyFeatures: [
      'Bold primary mark with strong presence at small sizes',
      'Versatile lockups for horizontal and stacked formats',
      'Color system aligned with team identity and broadcast needs',
      'Grid-based construction for consistency across applications'
    ],
    images: colomboKingsImages,
  },
  coveragex: {
    title: 'CoverageX.com',
    subtitle: 'Enterprise Insurance Platform Redesign',
    role: 'Lead Designer & Frontend Developer',
    year: '2023-2024',
    duration: '6 months',
    team: '4 members',
    description: 'Complete redesign and development of CoverageX.com, transforming the insurance platform experience from ground up.',
    heroImage: 'https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NTc2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'The existing platform had a fragmented user experience with inconsistent design patterns, making it difficult for users to navigate insurance products and complete their applications. The lack of a unified design system caused development bottlenecks and increased maintenance costs.',
    solution: 'I led a comprehensive redesign initiative, creating a cohesive design system in Figma and implementing it using modern web technologies. The new system improved user flows, reduced cognitive load, and established scalable components for future development.',
    impact: [
      { metric: '40%', label: 'Increase in activation rates' },
      { metric: '60%', label: 'Reduction in support tickets' },
      { metric: '3x', label: 'Faster development cycles' },
      { metric: '95%', label: 'User satisfaction score' }
    ],
    responsibilities: [
      'Led end-to-end design process from research to final implementation',
      'Created comprehensive design system with 50+ reusable components',
      'Developed frontend architecture using Nuxt.js and TypeScript',
      'Implemented responsive layouts with Tailwind CSS',
      'Designed and coded email marketing campaigns via SendGrid',
      'Conducted user testing and iterated based on feedback'
    ],
    technologies: ['Figma', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'SendGrid', 'Vue.js', 'Git'],
    process: [
      {
        phase: 'Research & Discovery',
        description: 'Conducted user interviews, competitive analysis, and stakeholder workshops to understand pain points and define success metrics.'
      },
      {
        phase: 'Design System',
        description: 'Built a comprehensive design system in Figma with tokens, components, and documentation. Established design principles and patterns.'
      },
      {
        phase: 'UI/UX Design',
        description: 'Created high-fidelity mockups and interactive prototypes. Tested with users and refined based on feedback.'
      },
      {
        phase: 'Development',
        description: 'Implemented the design using Nuxt.js, ensuring pixel-perfect accuracy and optimal performance. Built reusable components.'
      },
      {
        phase: 'Testing & Launch',
        description: 'Conducted thorough testing across devices and browsers. Gradually rolled out features and monitored metrics.'
      }
    ],
    keyFeatures: [
      'Streamlined onboarding flow reducing steps by 50%',
      'Interactive product comparison tool',
      'Real-time quote calculator with live updates',
      'Responsive design optimized for mobile and tablet',
      'Accessible components following WCAG 2.1 AA standards',
      'Automated email sequences for user engagement'
    ]
  },
  qexle: {
    title: 'The Qexle',
    subtitle: 'Digital Product Studio',
    role: 'Founder & Lead Developer',
    year: '2022-Present',
    duration: 'Ongoing',
    team: '2-5 members per project',
    description: 'Founded and built a digital product studio focused on creating exceptional web experiences for startups and established businesses.',
    heroImage: 'https://images.unsplash.com/photo-1651563688824-a853587bfb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2NTAwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Many businesses struggle to find partners who can handle both design and development with equal expertise. This often results in disconnected experiences where beautiful designs fail in execution, or functional products lack design polish.',
    solution: 'The Qexle bridges the gap between design and engineering by offering end-to-end services. I lead projects from initial strategy through design, development, and deployment, ensuring cohesive experiences that are both beautiful and functional.',
    impact: [
      { metric: '15+', label: 'Projects delivered' },
      { metric: '10+', label: 'Happy clients' },
      { metric: '100%', label: 'On-time delivery rate' },
      { metric: '5★', label: 'Average client rating' }
    ],
    responsibilities: [
      'Lead all design and development initiatives',
      'Manage client relationships and project scoping',
      'Build custom web applications using modern tech stacks',
      'Create brand identities and design systems',
      'Implement CI/CD pipelines and deployment strategies',
      'Mentor junior developers and designers'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Figma', 'Tailwind CSS', 'Vercel'],
    process: [
      {
        phase: 'Discovery',
        description: 'Deep dive into client needs, business goals, and target audience. Define project scope and success criteria.'
      },
      {
        phase: 'Strategy & Planning',
        description: 'Create information architecture, user flows, and technical architecture. Establish project timeline and milestones.'
      },
      {
        phase: 'Design',
        description: 'Develop brand identity, design system, and high-fidelity screens. Create interactive prototypes for validation.'
      },
      {
        phase: 'Development',
        description: 'Build production-ready applications with clean code and best practices. Implement responsive designs and optimize performance.'
      },
      {
        phase: 'Launch & Support',
        description: 'Deploy to production, monitor metrics, and provide ongoing support. Iterate based on user feedback and analytics.'
      }
    ],
    keyFeatures: [
      'Full-service design and development capabilities',
      'Expertise in modern web technologies',
      'Focus on scalable, maintainable codebases',
      'Collaborative approach with transparent communication',
      'Rapid prototyping and iterative development',
      'Post-launch support and optimization'
    ]
  },
  ecommerce: {
    title: 'E-Commerce Platform',
    subtitle: 'Modern Shopping Experience',
    role: 'UI/UX Designer & Developer',
    year: '2023',
    duration: '4 months',
    team: '3 members',
    description: 'Designed and developed a modern e-commerce platform with seamless checkout experience, real-time inventory management, and personalized product recommendations.',
    heroImage: 'https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGNhcnR8ZW58MXx8fHwxNzU5NjUwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Traditional e-commerce platforms often suffer from complex checkout flows, poor mobile experiences, and lack of personalization, leading to high cart abandonment rates.',
    solution: 'Created a streamlined platform with one-click checkout, intelligent product recommendations, and a mobile-first responsive design.',
    impact: [
      { metric: '65%', label: 'Reduced cart abandonment' },
      { metric: '2.5x', label: 'Mobile conversions' },
      { metric: '45%', label: 'Faster checkout' },
      { metric: '4.8★', label: 'Customer rating' }
    ],
    responsibilities: [
      'Designed complete user experience',
      'Built responsive frontend with React',
      'Integrated Stripe payments',
      'Real-time inventory management',
      'Created admin dashboard'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    process: [
      { phase: 'Research', description: 'Analyzed competitors and conducted user interviews.' },
      { phase: 'Design', description: 'Created prototypes and tested with users.' },
      { phase: 'Development', description: 'Built scalable APIs and frontend components.' },
      { phase: 'Launch', description: 'Tested across devices and rolled out features.' }
    ],
    keyFeatures: [
      'One-click checkout',
      'AI recommendations',
      'Real-time inventory',
      'Mobile-optimized',
      'Advanced search'
    ]
  },
  fintech: {
    title: 'FinTech Dashboard',
    subtitle: 'Financial Data Visualization',
    role: 'Senior Product Designer',
    year: '2023',
    duration: '5 months',
    team: '5 members',
    description: 'Created an intuitive financial dashboard for tracking investments and managing portfolios with real-time data visualization.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5NTYwNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Financial data is complex and overwhelming. Users struggle to make informed investment decisions with traditional tools.',
    solution: 'Designed an elegant dashboard with intuitive visualizations, smart alerts, and personalized recommendations.',
    impact: [
      { metric: '78%', label: 'User engagement' },
      { metric: '3x', label: 'Faster decisions' },
      { metric: '92%', label: 'Satisfaction score' },
      { metric: '50%', label: 'Fewer support tickets' }
    ],
    responsibilities: [
      'Led end-to-end design process',
      'Created comprehensive design system',
      'Designed data visualizations',
      'Conducted usability testing',
      'Collaborated with engineers'
    ],
    technologies: ['Figma', 'React', 'TypeScript', 'D3.js', 'Recharts', 'WebSocket'],
    process: [
      { phase: 'Research', description: 'Studied user behavior and competitor products.' },
      { phase: 'Architecture', description: 'Organized complex data into logical groups.' },
      { phase: 'Design', description: 'Created clean interface with data clarity focus.' },
      { phase: 'Testing', description: 'Multiple rounds of user testing and refinement.' }
    ],
    keyFeatures: [
      'Real-time portfolio tracking',
      'Interactive charts',
      'Custom layouts',
      'Smart alerts',
      'Mobile-responsive'
    ]
  },
  'mobile-app': {
    title: 'Health & Fitness App',
    subtitle: 'Wellness Tracking Mobile Experience',
    role: 'UI/UX Designer',
    year: '2023',
    duration: '3 months',
    team: '2 members',
    description: 'Mobile app design for tracking workouts, nutrition, and wellness goals with gamification.',
    heroImage: 'https://images.unsplash.com/photo-1580983703451-bf6bb44a9917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc1OTU3NjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Most fitness apps are complex and overwhelming, leading to poor retention. Users need motivation and simplicity.',
    solution: 'Designed intuitive mobile experience with gamification, social features, and personalized coaching.',
    impact: [
      { metric: '85%', label: '30-day retention' },
      { metric: '4.7★', label: 'App store rating' },
      { metric: '200K+', label: 'Active users' },
      { metric: '40%', label: 'Daily active users' }
    ],
    responsibilities: [
      'Designed complete mobile experience',
      'Created design system',
      'Designed gamification features',
      'Conducted user testing',
      'Created interactive prototypes'
    ],
    technologies: ['Figma', 'Prototyping', 'iOS Design', 'Android Design', 'User Testing'],
    process: [
      { phase: 'Research', description: 'Interviewed fitness enthusiasts and beginners.' },
      { phase: 'Wireframing', description: 'Established user flows and architecture.' },
      { phase: 'UI Design', description: 'Designed high-fidelity screens with motivation focus.' },
      { phase: 'Prototyping', description: 'Built interactive prototypes for testing.' }
    ],
    keyFeatures: [
      'Personalized workouts',
      'Nutrition tracking',
      'Achievement badges',
      'Social challenges',
      'Progress tracking'
    ]
  },
  'design-system': {
    title: 'Design System',
    subtitle: 'Enterprise Component Library',
    role: 'Design Systems Lead',
    year: '2023',
    duration: '6 months',
    team: '4 members',
    description: 'Comprehensive design system with reusable components, patterns, and guidelines for enterprise products.',
    heroImage: 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1OTYxNzM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Multiple teams creating inconsistent interfaces led to fragmented experience and slower development.',
    solution: 'Built comprehensive design system with 100+ components, clear documentation, and governance model.',
    impact: [
      { metric: '70%', label: 'Faster handoff' },
      { metric: '100+', label: 'Components' },
      { metric: '85%', label: 'Team adoption' },
      { metric: '3x', label: 'Dev speed' }
    ],
    responsibilities: [
      'Led system strategy',
      'Created component library',
      'Established design tokens',
      'Wrote documentation',
      'Conducted training'
    ],
    technologies: ['Figma', 'Design Tokens', 'Storybook', 'React', 'TypeScript'],
    process: [
      { phase: 'Audit', description: 'Identified inconsistencies and common patterns.' },
      { phase: 'Foundation', description: 'Established design tokens and variables.' },
      { phase: 'Components', description: 'Designed reusable components with guidelines.' },
      { phase: 'Adoption', description: 'Rolled out with training and support.' }
    ],
    keyFeatures: [
      'Token-based architecture',
      'Accessible components',
      'Dark mode support',
      'Comprehensive docs',
      'Automated versioning'
    ]
  },
  'saas-platform': {
    title: 'SaaS Analytics Platform',
    subtitle: 'AI-Powered Business Intelligence',
    role: 'Product Designer & Developer',
    year: '2023',
    duration: '7 months',
    team: '6 members',
    description: 'Data analytics platform helping businesses make data-driven decisions with AI insights.',
    heroImage: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc1OTYyOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'BI tools are complex and require technical expertise. Non-technical users struggle to derive insights.',
    solution: 'Created intuitive SaaS platform with AI to automatically surface insights and recommend actions.',
    impact: [
      { metric: '500+', label: 'Enterprise customers' },
      { metric: '95%', label: 'Satisfaction' },
      { metric: '$5M', label: 'ARR' },
      { metric: '60%', label: 'Faster insights' }
    ],
    responsibilities: [
      'Led product design',
      'Built frontend architecture',
      'Designed data viz system',
      'Created AI insight engine',
      'Managed roadmap'
    ],
    technologies: ['React', 'TypeScript', 'D3.js', 'Python', 'TensorFlow', 'AWS'],
    process: [
      { phase: 'Research', description: 'Analyzed competitors and interviewed customers.' },
      { phase: 'MVP', description: 'Designed core features and AI insights.' },
      { phase: 'Development', description: 'Built scalable platform with emphasis on performance.' },
      { phase: 'Scale', description: 'Expanded features and optimized for enterprise.' }
    ],
    keyFeatures: [
      'AI-powered insights',
      'Custom dashboards',
      'Predictive analytics',
      'Natural language queries',
      'Real-time processing'
    ]
  },
  'brand-identity': {
    title: 'Brand Identity System',
    subtitle: 'Complete Brand Design',
    role: 'Brand Designer',
    year: '2023',
    duration: '2 months',
    team: '2 members',
    description: 'Complete brand identity including logo, color system, typography, and comprehensive guidelines.',
    heroImage: 'https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1OTU4NTQwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Client needed cohesive brand identity to stand out in crowded market while maintaining professionalism.',
    solution: 'Developed distinctive brand identity with unique visual language and comprehensive guidelines.',
    impact: [
      { metric: '300%', label: 'Brand recognition' },
      { metric: '4.9★', label: 'Client satisfaction' },
      { metric: '100%', label: 'Guideline adoption' },
      { metric: '25+', label: 'Brand applications' }
    ],
    responsibilities: [
      'Led brand strategy',
      'Designed visual identity',
      'Created brand guidelines',
      'Designed marketing collateral',
      'Developed illustration system'
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'Brand Guidelines'],
    process: [
      { phase: 'Discovery', description: 'Brand workshops and competitive analysis.' },
      { phase: 'Exploration', description: 'Created multiple logo concepts and directions.' },
      { phase: 'Refinement', description: 'Refined selected direction and visual elements.' },
      { phase: 'Guidelines', description: 'Created comprehensive brand manual.' }
    ],
    keyFeatures: [
      'Unique logo system',
      'Color palette',
      'Typography pairing',
      'Illustration system',
      '50-page brand manual'
    ]
  }
};

export default function ProjectDetailPage({ projectId, onNavigateHome }: ProjectDetailPageProps) {
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl">Project not found</h1>
          <button
            onClick={onNavigateHome}
            className="bg-[#F4C542] text-black px-6 py-3 rounded-full hover:bg-[#F4C542]/90 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] text-white pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block bg-[#F4C542]/20 text-[#F4C542] px-4 py-2 rounded-full text-sm">
              {project.role}
            </div>
            <h1 className="text-6xl md:text-8xl tracking-tight">
              {project.title}
            </h1>
            <p className="text-2xl md:text-3xl text-white/60">
              {project.subtitle}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Year</span>
                </div>
                <p className="text-xl">{project.year}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">Duration</span>
                </div>
                <p className="text-xl">{project.duration}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Team</span>
                </div>
                <p className="text-xl">{project.team}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">Role</span>
                </div>
                <p className="text-xl">Lead</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Grid Gallery - Colombo Kings */}
      {project.images && (
        <section className="px-6 py-24 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <h2 className="text-4xl md:text-5xl">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[200px] md:auto-rows-[260px]">
                {project.images.map((src: string, i: number) => {
                  const layout = [
                    'md:col-span-3 md:row-span-2',
                    'md:col-span-3 md:row-span-1',
                    'md:col-span-2 md:row-span-1',
                    'md:col-span-2 md:row-span-1',
                    'md:col-span-2 md:row-span-2',
                  ][i % 5];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className={`relative overflow-hidden rounded-3xl border border-white/10 group ${layout}`}
                    >
                      <ImageWithFallback src={src} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Hero Image */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10"
          >
            <ImageWithFallback
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-24 bg-[#f5f5f0] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Overview</h2>
              <p className="text-xl text-[#1a1a1a]/70 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-[#1a1a1a]/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#F4C542]">The Challenge</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">The Solution</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-24 bg-[#f5f5f0] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-12">Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.impact.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="text-5xl md:text-6xl text-[#F4C542]">
                    {item.metric}
                  </div>
                  <p className="text-[#1a1a1a]/60">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl">Process</h2>
            <div className="space-y-6">
              {project.process.map((step: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#F4C542]/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#F4C542] text-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl">{step.phase}</h3>
                      <p className="text-white/60 text-lg">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-24 bg-[#f5f5f0] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.keyFeatures.map((feature: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F4C542] mt-2 flex-shrink-0"></div>
                  <p className="text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="px-6 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl">My Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.responsibilities.map((resp: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-[#F4C542] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#F4C542]"></div>
                  </div>
                  <p className="text-lg text-white/70">{resp}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-project" className="px-6 py-24 bg-[#f5f5f0] text-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl">Like what you see?</h2>
            <p className="text-2xl text-[#1a1a1a]/60">
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onNavigateHome}
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full hover:bg-[#1a1a1a]/90 transition-all flex items-center gap-2 justify-center"
              >
                View More Projects
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="bg-[#F4C542] text-[#1a1a1a] px-8 py-4 rounded-full hover:bg-[#F4C542]/90 transition-all">
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}