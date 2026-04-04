import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, FolderOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { homeProjects } from '../data/projects';

interface ProjectsProps {
  onNavigateToProject: (page: 'portfolio' | 'project', projectId?: string) => void;
}

export default function Projects({ onNavigateToProject }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = homeProjects;

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
      className="min-h-screen bg-dark-alt text-white px-6 py-24 relative overflow-hidden"
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
              <FolderOpen className="w-8 h-8 text-accent" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent tracking-[0.3em] text-sm uppercase"
              >
                Selected Work
              </motion.p>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
                  Development & UI/UX
                </p>
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
                      ? 'border-accent text-accent hover:bg-accent hover:text-dark-alt' 
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
                      ? 'border-accent text-accent hover:bg-accent hover:text-dark-alt' 
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
                className="absolute top-0 left-0 h-full bg-accent rounded-full"
                style={{ width: `${(scrollProgress * 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative max-w-7xl w-full mx-auto">
          {/* Gradient overlays for scroll hint - place behind cards */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-alt via-dark-alt/50 to-transparent z-0 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-alt via-dark-alt/50 to-transparent z-0 pointer-events-none" />

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
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigateToProject('project', project.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View case study: ${project.title}`}
                className="flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[600px] lg:w-[700px] group cursor-pointer my-2 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-alt rounded-3xl"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 h-full backdrop-blur-sm">
                  {/* Card Content */}
                  <div className="p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
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
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight group-hover:translate-x-2 transition-transform duration-300"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-base sm:text-lg text-white/70 leading-relaxed"
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
                        className="absolute inset-0 bg-dark-alt/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
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
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
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
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigateToProject('project', project.id);
                      }}
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
              <div className="relative bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-3xl overflow-hidden border-2 border-dashed border-white/20 hover:border-accent/50 transition-all duration-500 backdrop-blur-sm h-full">
                <div className="h-full p-8 md:p-10 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <ArrowUpRight className="w-10 h-10 text-accent" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl tracking-tight">
                      View All Projects
                    </h3>
                    <p className="text-lg text-white/60">
                      Explore the complete collection of my work
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all duration-300">
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