import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, FolderOpen } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsProps {
  onNavigateToProject: (page: 'portfolio' | 'project', projectId?: string) => void;
}

export default function Projects({ onNavigateToProject }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    {
      id: 'coveragex',
      title: 'CoverageX.com',
      role: 'Lead Designer & Frontend Developer',
      description: 'Redesigned CoverageX.com — I led the design and was one of the main frontend developers. Rebuilt the UI system in Figma and implemented screens with Nuxt.js, TypeScript and Tailwind; also created marketing emails via SendGrid to improve activation flows.',
      tags: ['Figma', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'SendGrid'],
      accentColor: '#F4C542',
      gradient: 'from-[#F4C542]/20 to-purple-500/20',
      initials: 'CX',
      image: 'https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NTc2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'qexle',
      title: 'The Qexle',
      role: 'Founder & Lead Developer',
      description: 'A digital product studio I founded to create exceptional web experiences. Managing full product lifecycle from concept to deployment, working with startups to build production-ready applications.',
      tags: ['Product Design', 'React', 'Next.js', 'Full-Stack'],
      accentColor: '#A855F7',
      gradient: 'from-purple-500/20 to-blue-500/20',
      initials: 'TQ',
      image: 'https://images.unsplash.com/photo-1651563688824-a853587bfb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2NTAwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      role: 'UI/UX Designer & Developer',
      description: 'Designed and developed a modern e-commerce platform with seamless checkout experience, real-time inventory management, and personalized product recommendations.',
      tags: ['UI/UX', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      accentColor: '#10B981',
      gradient: 'from-green-500/20 to-cyan-500/20',
      initials: 'EC',
      image: 'https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGNhcnR8ZW58MXx8fHwxNzU5NjUwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'fintech',
      title: 'FinTech Dashboard',
      role: 'Senior Product Designer',
      description: 'Created an intuitive financial dashboard for tracking investments, analyzing market trends, and managing portfolios with real-time data visualization.',
      tags: ['Product Design', 'Data Viz', 'React', 'TypeScript'],
      accentColor: '#3B82F6',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      initials: 'FT',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5NTYwNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="min-h-screen bg-[#1a1a1a] text-white px-6 py-24 relative overflow-hidden"
    >
      {/* Decorative section labels */}
      <div className="absolute top-8 left-8 text-white/20 text-sm hidden md:block z-20">3/5</div>
      <div className="absolute top-8 right-8 text-white/20 text-sm hidden md:block z-20">PROJECTS</div>
      
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(244, 197, 66, 0.1) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-7xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <FolderOpen className="w-8 h-8 text-[#F4C542]" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#F4C542] tracking-[0.3em] text-sm uppercase"
              >
                Selected Work
              </motion.p>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
                  Featured<br />Projects
                </h2>
              </div>
              
              {/* Navigation Arrows - Desktop */}
              <div className="hidden md:flex items-center gap-4">
                <motion.button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
                  whileTap={{ scale: canScrollLeft ? 0.9 : 1 }}
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    canScrollLeft 
                      ? 'border-[#F4C542] text-[#F4C542] hover:bg-[#F4C542] hover:text-[#1a1a1a]' 
                      : 'border-white/10 text-white/20 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
                  whileTap={{ scale: canScrollRight ? 0.9 : 1 }}
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    canScrollRight 
                      ? 'border-[#F4C542] text-[#F4C542] hover:bg-[#F4C542] hover:text-[#1a1a1a]' 
                      : 'border-white/10 text-white/20 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden mt-8">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#F4C542] rounded-full"
                style={{ width: `${(scrollProgress * 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative max-w-7xl w-full mx-auto">
          {/* Gradient overlays for scroll hint - place behind cards */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent z-0 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent z-0 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide py-8"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                onClick={() => onNavigateToProject('project', project.id)}
                className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] group cursor-pointer my-2"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#F4C542]/50 transition-all duration-500 h-full backdrop-blur-sm">
                  {/* Card Content */}
                  <div className="p-8 md:p-10 space-y-6">
                    {/* Role Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="inline-block px-4 py-2 rounded-full text-sm"
                      style={{ 
                        backgroundColor: `${project.accentColor}20`,
                        color: project.accentColor 
                      }}
                    >
                      {project.role}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl lg:text-6xl tracking-tight group-hover:translate-x-2 transition-transform duration-300"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-lg text-white/70 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    {/* Project Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className={`relative aspect-video bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-40`} />
                      {/* Overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-[#1a1a1a]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-2 text-white">
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-3"
                    >
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 hover:gap-4 transition-all duration-300"
                      style={{ color: project.accentColor }}
                    >
                      View Case Study
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{ backgroundColor: project.accentColor }}
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}

            {/* View All Projects Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: projects.length * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              onClick={() => onNavigateToProject('portfolio')}
              className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] group cursor-pointer my-2"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative bg-gradient-to-br from-[#F4C542]/20 to-purple-500/20 rounded-3xl overflow-hidden border-2 border-dashed border-white/20 hover:border-[#F4C542]/50 transition-all duration-500 backdrop-blur-sm h-full">
                <div className="h-full p-8 md:p-10 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#F4C542]/20 flex items-center justify-center">
                    <ArrowUpRight className="w-10 h-10 text-[#F4C542]" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl tracking-tight">
                      View All Projects
                    </h3>
                    <p className="text-lg text-white/60">
                      Explore the complete collection of my work
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#F4C542] group-hover:gap-4 transition-all duration-300">
                    <span>See Portfolio</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* End spacer */}
            <div className="flex-shrink-0 w-6 md:w-12" />
          </div>

          {/* Mobile Navigation Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="md:hidden text-center mt-8 text-white/40 text-sm"
          >
            ← Swipe to explore projects →
          </motion.div>
        </div>
      </div>
    </section>
  );
}