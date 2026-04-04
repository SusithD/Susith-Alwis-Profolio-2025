import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Users, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import { projectDetails } from '../data/projects';
import type { ProjectDetail } from '../data/types';
import { siteConfig } from '../data/site-config';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigateHome: () => void;
  onNavigatePortfolio: () => void;
}

export default function ProjectDetailPage({ projectId, onNavigateHome, onNavigatePortfolio }: ProjectDetailPageProps) {
  const project: ProjectDetail | undefined = projectDetails[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-alt text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl">Project not found</h1>
          <button
            onClick={onNavigateHome}
            className="bg-accent text-black px-4 sm:px-6 py-3 rounded-full hover:bg-accent/90 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-alt text-white">
      <Navigation
        currentPage="project"
        onNavigate={(page) => {
          if (page === 'home') onNavigateHome();
          if (page === 'portfolio') onNavigatePortfolio();
        }}
        projectTitle={project.title}
      />

      <main id="main-content">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 pt-32">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { label: 'Home', onClick: onNavigateHome },
                { label: 'Portfolio', onClick: onNavigatePortfolio },
                { label: project.title, isActive: true }
              ]}
            />

            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">
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
                <p className="text-xl">{project.role}</p>
              </div>
            </div>

            {/* External Links in Hero Section */}
            {(project.behanceLink || project.githubLink || project.liveWebsite) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8 flex flex-wrap gap-4"
              >
                {project.liveWebsite && (
                  <a
                    href={project.liveWebsite.startsWith('http') ? project.liveWebsite : `https://${project.liveWebsite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 group"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    View Live Site
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
                {project.behanceLink && (
                  <a
                    href={project.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white px-4 sm:px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                    </svg>
                    View on Behance
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 group border border-white/10"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.012c0 4.424 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.987 1.03-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.852.004 1.71.115 2.51.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.596 1.028 2.688 0 3.842-2.339 4.69-4.566 4.939.36.31.68.92.68 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.48A10.013 10.013 0 0 0 22 12.012C22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Creative Grid Gallery - Colombo Kings */}
      {project.images && (
        <section className="px-4 sm:px-6 py-24 bg-dark-alt">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <h2 className="text-4xl md:text-5xl">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {project.images.map((src, i) => {
                  // Create a creative masonry-style layout for better image distribution
                  const layouts = [
                    'col-span-2 md:col-span-2 lg:col-span-3 aspect-[4/3]', // Large featured
                    'col-span-1 md:col-span-1 lg:col-span-2 aspect-square', // Medium square
                    'col-span-1 md:col-span-1 lg:col-span-1 aspect-square', // Small square
                    'col-span-2 md:col-span-2 lg:col-span-2 aspect-[3/2]', // Medium wide
                    'col-span-1 md:col-span-1 lg:col-span-2 aspect-[4/3]', // Medium portrait
                    'col-span-1 md:col-span-1 lg:col-span-2 aspect-square', // Medium square
                    'col-span-2 md:col-span-2 lg:col-span-3 aspect-video', // Wide banner
                  ];
                  const layout = layouts[i % layouts.length];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 group cursor-pointer ${layout}`}
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <ImageWithFallback
                        src={src}
                        alt={`${project.title} design ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium">View Details</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Hero Image */}
      <section className="px-4 sm:px-6 pb-24">
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
            <div className="absolute inset-0 bg-gradient-to-t from-dark-alt via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 sm:px-6 py-24 bg-light text-dark-alt">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Overview</h2>
              <p className="text-xl text-dark-alt/70 leading-relaxed">
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
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-dark-alt/10 rounded-full">
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
      <section className="px-4 sm:px-6 py-24 bg-dark-alt">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-accent">The Challenge</h2>
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
      <section className="px-4 sm:px-6 py-24 bg-light text-dark-alt">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-12">Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.impact.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="text-5xl md:text-6xl text-accent">
                    {item.metric}
                  </div>
                  <p className="text-dark-alt/60">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 sm:px-6 py-24 bg-dark-alt">
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
              {project.process.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent text-dark-alt flex items-center justify-center flex-shrink-0">
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
      <section className="px-4 sm:px-6 py-24 bg-light text-dark-alt">
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
              {project.keyFeatures.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="px-4 sm:px-6 py-24 bg-dark-alt">
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
              {project.responsibilities.map((resp, i) => (
                <motion.div
                  key={resp}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <p className="text-lg text-white/70">{resp}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-project" className="px-4 sm:px-6 py-24 bg-light text-dark-alt">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl">Like what you see?</h2>
            <p className="text-2xl text-dark-alt/60">
              Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.behanceLink && (
                <a
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877f2] text-white px-8 py-4 rounded-full hover:bg-[#1877f2]/90 transition-all flex items-center gap-2 justify-center"
                >
                  View on Behance
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              )}
              <button
                onClick={onNavigateHome}
                className="bg-dark-alt text-white px-8 py-4 rounded-full hover:bg-dark-alt/90 transition-all flex items-center gap-2 justify-center"
              >
                View More Projects
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="bg-accent text-dark-alt px-8 py-4 rounded-full hover:bg-accent/90 transition-all flex items-center gap-2 justify-center"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
    </div>
  );
}
