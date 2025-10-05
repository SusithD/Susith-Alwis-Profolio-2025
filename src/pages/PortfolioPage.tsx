import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Code, Palette, Layers } from 'lucide-react';
import { useState } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface PortfolioPageProps {
  onNavigateToProject: (page: 'project', projectId: string) => void;
}

export default function PortfolioPage({ onNavigateToProject }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const ckCover = new URL('../images/logo-concept-colombo-kings/imgi_27_888ef0130936549.618ac232ec5e6.jpg', import.meta.url).href;
  const ktCover = new URL('../images/logo-concept-kandy-tuskers/imgi_30_ee4330130369959.617ede0e2b955.jpg', import.meta.url).href;
  const bistroCover = new URL('../images/logo-bistro-coffee-shop/imgi_29_3b8942135068517.61e10c014bc0f.jpg', import.meta.url).href;
  const qexleCover = new URL('../images/the-qexle-branding/imgi_10_28a1ab137769287.6210f6447ae00.jpg', import.meta.url).href;
  const organicCover = new URL('../images/logo-organic-beltline/imgi_42_ed9ac1143551981.627c7bfc9b51c.jpg', import.meta.url).href;
  const noirCover = new URL('../images/logo-noir/imgi_29_471143143551429.627c7892a22b1.jpg', import.meta.url).href;
  const kozhaCover = new URL('../images/logo-kozha-leather/imgi_16_d9e0ed144036805.6285223fef20c.jpg', import.meta.url).href;
  const gyroctionCover = new URL('../images/logo-gyroction/efe0a7145776937.62a44786baedf.jpg', import.meta.url).href;
  const nikeCover = new URL('../images/landing-page-ui-nike/418257146284501.62ad89bede8da.jpg', import.meta.url).href;
  const wildlifeCover = new URL('../images/landing-page-wildlife/054fd3146507535.62b1c5409580e.jpg', import.meta.url).href;
  const foodieHutCover = new URL('../images/foodiehut-ui-design-and-development/ee7e75210104439.670bb1a9a3865.png', import.meta.url).href;
  const currencyCover = new URL('../images/fake-money-detector/383462735-8d2e6543-69c2-4b94-94d2-563a3cc1a2cd.png', import.meta.url).href;
  
  const projects = [
    {
      id: 'organic-beltline',
      title: 'Logo Design for Organic Beltline',
      role: 'Graphic Designer',
      description: 'Brand identity design for Organic Beltline, focusing on representing the company\'s organic values through visual elements. Feb 2022.',
      category: 'design',
      tags: ['Brand Identity', 'Logo Design', 'Organic Design', 'Visual Identity'],
      accentColor: '#22C55E',
      gradient: 'from-green-500/20 to-emerald-500/20',
      initials: 'OB',
      featured: true,
      size: 'large',
      image: organicCover
    },
    {
      id: 'noir-interior-design',
      title: 'Logo Design for NOIR Interior Design Company',
      role: 'Graphic Designer',
      description: 'Creation of a professional virtual identity for NOIR, an Interior Design Company, through distinctive logo design. Feb 2022.',
      category: 'design',
      tags: ['Brand Identity', 'Logo Design', 'Interior Design', 'Professional Branding'],
      accentColor: '#000000',
      gradient: 'from-gray-900/20 to-gray-700/20',
      initials: 'NR',
      featured: true,
      size: 'large',
      image: noirCover
    },
    {
      id: 'kozha-leather-collections',
      title: 'Logo Design for Kozha Leather Collections',
      role: 'Graphic Designer',
      description: 'Development of a professional brand identity for Kozha Leather Collections through strategic logo design, conveying quality and craftsmanship. Mar 2022.',
      category: 'design',
      tags: ['Brand Identity', 'Logo Design', 'Leather Goods', 'Craftsmanship'],
      accentColor: '#8B4513',
      gradient: 'from-amber-700/20 to-yellow-600/20',
      initials: 'KL',
      featured: true,
      size: 'large',
      image: kozhaCover
    },
    {
      id: 'gyroction',
      title: 'Logo Design for Gyroction',
      role: 'Graphic Designer',
      description: "Brand identity design for Gyroction, creating a distinctive and memorable logo that represents the company's values and services. Jun 2022.",
      category: 'design',
      tags: ['Brand Identity', 'Logo Design', 'Corporate Identity'],
      accentColor: '#2563EB',
      gradient: 'from-blue-600/20 to-cyan-500/20',
      initials: 'GY',
      featured: true,
      size: 'large',
      image: gyroctionCover
    },
    {
      id: 'landing-page-ui-nike',
      title: 'Nike Shoes Landing Page Concept',
      role: 'Graphic Designer',
      description: 'A landing page UI design concept for Nike shoes with bold visuals, clear hierarchy, and conversion-focused CTAs.',
      category: 'web',
      tags: ['Landing Page', 'UI/UX', 'Concept', 'Web Design'],
      accentColor: '#111111',
      gradient: 'from-gray-800/20 to-zinc-600/20',
      initials: 'NK',
      featured: true,
      size: 'large',
      image: nikeCover
    },
    {
      id: 'landing-page-wildlife',
      title: 'Endemic Animals in Sri Lanka – Landing Page',
      role: 'UI/UX Designer',
      description: 'Interactive landing page concept highlighting Sri Lanka\'s endemic wildlife with immersive visuals and educational content. Jun–Sep 2024.',
      category: 'web',
      tags: ['Landing Page', 'UI/UX', 'Academic Project', 'Visual Design'],
      accentColor: '#16A34A',
      gradient: 'from-green-600/20 to-emerald-500/20',
      initials: 'WL',
      featured: true,
      size: 'large',
      image: wildlifeCover
    },
    {
      id: 'foodiehut',
      title: 'FoodieHut - Android Application',
      role: 'UI Designer & Backend Developer',
      description: 'Android app connecting users to exclusive promotions, online ordering, and branch navigation. Aug–Sep 2024.',
      category: 'mobile',
      tags: ['Android', 'UI/UX', 'Figma', 'Academic Project'],
      accentColor: '#F97316',
      gradient: 'from-orange-500/20 to-amber-400/20',
      initials: 'FH',
      featured: true,
      size: 'large',
      image: foodieHutCover
    },
    {
      id: 'currency-note-recognition',
      title: 'Sri Lankan Currency Note Recognition System',
      role: 'Developer',
      description: 'Flask-based AI system for authenticating Sri Lankan currency with security feature detection and educational descriptions. Nov 2024.',
      category: 'ai',
      tags: ['Machine Learning', 'Deep Learning', 'Flask', 'OpenCV', 'TensorFlow', 'PyTorch'],
      accentColor: '#0EA5E9',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      initials: 'CR',
      featured: true,
      size: 'large',
      image: currencyCover
    },
    {
      id: 'qexle-rebranding',
      title: 'Rebranding Logo of The qexle',
      role: 'Graphic Designer',
      description: 'A rebranding project for The qexle team, incorporating minimalistic design principles and strategic color choices to enhance brand recognition. Feb 2022.',
      category: 'design',
      tags: ['Rebranding', 'Logo Design', 'Brand Identity', 'Minimalistic Design'],
      accentColor: '#1E40AF',
      gradient: 'from-blue-600/20 to-blue-400/20',
      initials: 'TQ',
      featured: true,
      size: 'large',
      image: qexleCover
    },
    {
      id: 'bistro-coffee-shop',
      title: 'Logo Design for Bistro Coffee Shop',
      role: 'Graphic Designer',
      description: 'Brand identity design for Bistro Coffee Shop in Anuradhapura, creating a logo that captures the welcoming and cozy atmosphere. Jan 2022.',
      category: 'design',
      tags: ['Brand Identity', 'Logo Design', 'Graphic Design', 'Branding'],
      accentColor: '#8B4513',
      gradient: 'from-[#8B4513]/20 to-orange-500/20',
      initials: 'BC',
      featured: true,
      size: 'large',
      image: bistroCover
    },
    {
      id: 'kandy-tuskers-logo-concept',
      title: 'Logo Redesign Concept for Kandy Tuskers',
      role: 'Graphic Designer',
      description: 'A conceptual logo redesign for Kandy Tuskers, a Sri Lankan franchise professional T20 cricket team in the LPL. Apr–May 2021.',
      category: 'design',
      tags: ['Branding', 'Logo Design', 'Sports Identity'],
      accentColor: '#F59E0B',
      gradient: 'from-amber-500/20 to-yellow-500/20',
      initials: 'KT',
      featured: false,
      size: 'medium',
      image: ktCover
    },
    {
      id: 'colombo-kings-logo-concept',
      title: 'Logo Redesign Concept for Colombo Kings',
      role: 'Graphic Designer',
      description: 'A conceptual logo redesign for Colombo Kings, a franchise Twenty20 cricket team in the Lanka Premier League. Apr 2021.',
      category: 'design',
      tags: ['Branding', 'Logo Design', 'Sports Identity'],
      accentColor: '#DC2626',
      gradient: 'from-red-500/20 to-orange-500/20',
      initials: 'CK',
      featured: false,
      size: 'medium',
      image: ckCover
    },
    {
      id: 'coveragex',
      title: 'CoverageX.com',
      role: 'Lead Designer & Frontend Developer',
      description: 'Redesigned CoverageX.com — I led the design and was one of the main frontend developers. Rebuilt the UI system in Figma and implemented screens with Nuxt.js, TypeScript and Tailwind.',
      category: 'web',
      tags: ['Figma', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'SendGrid'],
      accentColor: '#F4C542',
      gradient: 'from-[#F4C542]/20 to-purple-500/20',
      initials: 'CX',
      featured: true,
      size: 'large',
      image: 'https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NTc2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'qexle',
      title: 'The Qexle',
      role: 'Founder & Lead Developer',
      description: 'A digital product studio I founded to create exceptional web experiences. Managing full product lifecycle from concept to deployment.',
      category: 'web',
      tags: ['Product Design', 'React', 'Next.js', 'Full-Stack'],
      accentColor: '#A855F7',
      gradient: 'from-purple-500/20 to-blue-500/20',
      initials: 'TQ',
      featured: true,
      size: 'large',
      image: 'https://images.unsplash.com/photo-1651563688824-a853587bfb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2NTAwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      role: 'UI/UX Designer & Developer',
      description: 'Modern e-commerce platform with seamless checkout experience and personalized product recommendations.',
      category: 'web',
      tags: ['UI/UX', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      accentColor: '#10B981',
      gradient: 'from-green-500/20 to-cyan-500/20',
      initials: 'EC',
      featured: false,
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGNhcnR8ZW58MXx8fHwxNzU5NjUwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'fintech',
      title: 'FinTech Dashboard',
      role: 'Senior Product Designer',
      description: 'Intuitive financial dashboard for tracking investments and analyzing market trends with real-time data visualization.',
      category: 'web',
      tags: ['Product Design', 'Data Viz', 'React', 'TypeScript'],
      accentColor: '#3B82F6',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      initials: 'FT',
      featured: false,
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5NTYwNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'mobile-app',
      title: 'Health & Fitness App',
      role: 'UI/UX Designer',
      description: 'Mobile app design for tracking workouts, nutrition, and wellness goals with gamification.',
      category: 'mobile',
      tags: ['Mobile Design', 'Figma', 'Prototyping'],
      accentColor: '#EF4444',
      gradient: 'from-red-500/20 to-orange-500/20',
      initials: 'HF',
      featured: false,
      size: 'small',
      image: 'https://images.unsplash.com/photo-1580983703451-bf6bb44a9917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc1OTU3NjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'design-system',
      title: 'Design System',
      role: 'Design Systems Lead',
      description: 'Comprehensive design system with reusable components, patterns, and guidelines for enterprise products.',
      category: 'design',
      tags: ['Design System', 'Figma', 'Documentation', 'Tokens'],
      accentColor: '#8B5CF6',
      gradient: 'from-violet-500/20 to-purple-500/20',
      initials: 'DS',
      featured: false,
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1OTYxNzM5Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'saas-platform',
      title: 'SaaS Analytics Platform',
      role: 'Product Designer & Developer',
      description: 'Data analytics platform helping businesses make data-driven decisions with AI insights.',
      category: 'web',
      tags: ['SaaS', 'Analytics', 'React', 'D3.js', 'AI'],
      accentColor: '#F59E0B',
      gradient: 'from-amber-500/20 to-yellow-500/20',
      initials: 'AP',
      featured: false,
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc1OTYyOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity System',
      role: 'Brand Designer',
      description: 'Complete brand identity including logo, color system, typography, and brand guidelines.',
      category: 'design',
      tags: ['Branding', 'Identity', 'Figma', 'Illustration'],
      accentColor: '#EC4899',
      gradient: 'from-pink-500/20 to-rose-500/20',
      initials: 'BI',
      featured: false,
      size: 'small',
      image: 'https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1OTU4NTQwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'web', label: 'Web Design', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Sparkles },
    { id: 'design', label: 'Design', icon: Palette }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#F4C542]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-[#F4C542] text-lg tracking-wide">WORK SHOWCASE</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[1.05]">
              Selected<br />
              <span className="text-white/40">Projects</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed"
            >
              A collection of design and development work spanning web applications, 
              mobile experiences, and design systems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-[#F4C542] text-[#0a0a0a]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                  <span className={`text-sm ${activeFilter === category.id ? 'text-[#0a0a0a]/70' : 'text-white/40'}`}>
                    ({category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length})
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Bento Style */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[400px]"
          >
            {filteredProjects.map((project, index) => {
              const gridClass = project.size === 'large' 
                ? 'md:col-span-2 md:row-span-2' 
                : project.size === 'medium'
                ? 'md:col-span-2 md:row-span-1'
                : 'md:col-span-1 md:row-span-1';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => onNavigateToProject('project', project.id)}
                  className={`${gridClass} group cursor-pointer relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#F4C542]/50 transition-all duration-500 backdrop-blur-sm`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/60 group-hover:bg-[#0a0a0a]/40 transition-colors duration-500" />
                    {/* Gradient overlay */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 mix-blend-multiply transition-opacity duration-500`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between z-10">
                    {/* Top */}
                    <div className="space-y-4">
                      {/* Role Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="inline-block px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${project.accentColor}20`,
                          color: project.accentColor 
                        }}
                      >
                        {project.role}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                        {project.title}
                      </h3>

                      {/* Description - only show on larger cards */}
                      {project.size !== 'small' && (
                        <p className="text-white/80 leading-relaxed backdrop-blur-sm">
                          {project.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom */}
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, project.size === 'small' ? 2 : 4).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div 
                        className="flex items-center gap-2 transition-all duration-300 group-hover:gap-4"
                        style={{ color: project.accentColor }}
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Accent line */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 rounded-full"
                    style={{ backgroundColor: project.accentColor }}
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-6 right-6 bg-[#F4C542] text-[#0a0a0a] px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-white/40">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#F4C542]/20 to-purple-500/20 rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-white/10"
          >
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl tracking-tight">
                Have a project in mind?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Let's collaborate and create something exceptional together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#F4C542] text-[#0a0a0a] px-8 py-4 rounded-full hover:bg-[#F4C542]/90 transition-all inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4C542]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}