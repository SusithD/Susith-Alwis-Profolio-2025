import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Code, Palette, Layers } from 'lucide-react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Navigation from '../components/Navigation';
import { portfolioProjects } from '../data/projects';
import { siteConfig } from '../data/site-config';

interface PortfolioPageProps {
  onNavigateToProject: (page: 'project', projectId: string) => void;
  onNavigateHome: () => void;
}

export default function PortfolioPage({ onNavigateToProject, onNavigateHome }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ai' | 'mobile' | 'design'>('all');

  type FilterCategory = 'all' | 'web' | 'ai' | 'mobile' | 'design';
  const categories: { id: FilterCategory; label: string; icon: typeof Layers }[] = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'web', label: 'Web Design', icon: Code },
    { id: 'ai', label: 'AI & ML', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Sparkles },
    { id: 'design', label: 'Design', icon: Palette }
  ];

  // Define category priority order
  const categoryOrder = {
    'web': 1,      // Development projects first
    'ai': 2,       // AI / ML projects second
    'mobile': 3,   // Mobile development third
    'design': 4    // Logo design and branding last
  };

  // Sort projects by category priority, then by featured status
  const sortedProjects = [...portfolioProjects].sort((a, b) => {
    // First sort by category priority
    const categoryA = categoryOrder[a.category as keyof typeof categoryOrder] || 999;
    const categoryB = categoryOrder[b.category as keyof typeof categoryOrder] || 999;

    if (categoryA !== categoryB) {
      return categoryA - categoryB;
    }

    // Within same category, featured projects come first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    return 0;
  });

  const filteredProjects = activeFilter === 'all'
    ? sortedProjects
    : sortedProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation
        currentPage="portfolio"
        onNavigate={(page) => {
          if (page === 'home') onNavigateHome();
        }}
      />

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
                    ({category.id === 'all' ? portfolioProjects.length : portfolioProjects.filter(p => p.category === category.id).length})
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Bento Style */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {filteredProjects.map((project, index) => {
              const isImageLeft = index % 2 === 0; // Alternating: even = image left, odd = image right

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  onClick={() => onNavigateToProject('project', project.id)}
                  className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#F4C542]/30 transition-all duration-700 hover:shadow-2xl hover:shadow-[#F4C542]/10"
                >
                  {/* Responsive Layout - Stack on mobile, side by side on larger screens */}
                  <div className="flex flex-col md:flex-row min-h-[300px] md:min-h-[400px]">
                    {/* Conditional Image Section - Left */}
                    {isImageLeft && (
                      <div className="flex-1 relative overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-black/10 transition-all duration-500" />

                        {/* Featured Badge on Image */}
                        {project.featured && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15 + 0.4 }}
                            className="absolute top-6 right-6 bg-[#F4C542] text-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg z-10"
                          >
                            <Sparkles className="w-3 h-3" />
                            FEATURED
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-3 sm:space-y-6">
                      {/* Category Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md border w-fit"
                        style={{
                          backgroundColor: `${project.accentColor}15`,
                          borderColor: `${project.accentColor}40`,
                          color: project.accentColor
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        {project.category.toUpperCase()}
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.5 }}
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight group-hover:text-[#F4C542] transition-colors duration-500"
                      >
                        {project.title}
                      </motion.h3>

                      {/* Role */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.6 }}
                        className="text-white/70 text-base sm:text-lg font-medium tracking-wide"
                      >
                        {project.role}
                      </motion.p>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.7 }}
                        className="text-white/60 text-sm sm:text-base leading-relaxed max-w-lg line-clamp-3 sm:line-clamp-4"
                      >
                        {project.description}
                      </motion.p>

                      {/* Tags */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.8 }}
                        className="flex flex-wrap gap-2"
                      >
                        {project.tags.slice(0, 4).map((tag, _i) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.9 }}
                        className="flex items-center gap-3 text-white/80 group-hover:text-[#F4C542] transition-all duration-300 group-hover:gap-4 pt-4"
                      >
                        <span className="text-base font-bold tracking-wide">VIEW PROJECT</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </motion.div>
                    </div>

                    {/* Conditional Image Section - Right */}
                    {!isImageLeft && (
                      <div className="flex-1 relative overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 group-hover:to-black/10 transition-all duration-500" />

                        {/* Featured Badge on Image */}
                        {project.featured && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15 + 0.4 }}
                            className="absolute top-6 right-6 bg-[#F4C542] text-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg z-10"
                          >
                            <Sparkles className="w-3 h-3" />
                            FEATURED
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-b-3xl"
                    style={{ backgroundColor: project.accentColor }}
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
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
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Have a project that fits this kind of work?
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Whether it&apos;s a product redesign, marketing site, or mobile experience,
              I can help from first sketches to production launch.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#F4C542] text-[#0a0a0a] px-8 py-3 rounded-full hover:bg-[#F4C542]/90 transition-all text-base md:text-lg"
              >
                Discuss a project
              </button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="border border-white/20 text-white px-8 py-3 rounded-full hover:border-white/40 hover:bg-white/5 transition-all text-base md:text-lg"
              >
                Email directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer onNavigate={() => onNavigateHome()} />
    </div>
  );
}
