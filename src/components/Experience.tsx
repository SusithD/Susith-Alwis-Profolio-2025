import { motion } from 'motion/react';
import { useState } from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeEduIndex, setActiveEduIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: 'CoverageX',
      location: 'Colombo, Sri Lanka',
      roles: [
        {
          title: 'Associate Software Engineer',
          period: 'Jul 2025 – Present',
          current: true
        },
        {
          title: 'Software Engineer Intern',
          period: 'Jan 2025 – Jul 2025',
          current: false
        }
      ],
      projects: [
        {
          name: 'CoverageX.com Project',
          description: 'Led redesign and frontend build with Nuxt.js, Tailwind v4, TypeScript; collaborated on backend & API integration; designed & developed marketing emails with SendGrid.'
        },
        {
          name: 'BuyOnline Platform',
          description: 'Designed intuitive purchase flows and responsive UI using Nuxt.js, Tailwind v4, TypeScript.'
        },
        {
          name: 'Payment Plan Web App',
          description: 'Designed user flows as lead UI/UX designer; contributed to frontend implementation for installment payments.'
        },
        {
          name: 'MB Hospitality Project',
          description: 'Designed UI/UX in Figma and implemented interfaces with Nuxt 3, TypeScript, Tailwind CSS, GSAP.'
        }
      ],
      tags: ['Nuxt.js', 'TypeScript', 'Tailwind v4', 'Figma', 'GSAP']
    },
    {
      company: 'AT Digital',
      location: 'Colombo, Sri Lanka',
      roles: [
        {
          title: 'UI/UX Designer Intern',
          period: 'Dec 2024 – Jan 2025',
          current: false
        }
      ],
      projects: [
        {
          name: 'Marketing Campaigns',
          description: 'Created wireframes and responsive UI designs for marketing campaigns.'
        },
        {
          name: 'Frontend Workflows',
          description: 'Improved usability and supported frontend workflows.'
        }
      ],
      tags: ['UI/UX Design', 'Wireframing', 'Marketing']
    },
    {
      company: 'Boss Up Media',
      location: 'Colombo, Sri Lanka (Hybrid)',
      roles: [
        {
          title: 'Visual Graphic Designer',
          period: 'May 2024 – Nov 2024',
          current: false
        }
      ],
      projects: [
        {
          name: 'Branding & Identity',
          description: 'Designed branding assets, logos, and social media creatives.'
        },
        {
          name: 'Marketing Designs',
          description: 'Delivered print and digital marketing designs for campaigns.'
        }
      ],
      tags: ['Graphic Design', 'Branding', 'Social Media']
    },
    {
      company: 'The Qexle',
      location: 'Malabe, Sri Lanka',
      roles: [
        {
          title: 'Founder',
          period: 'Dec 2019 – Present',
          current: true
        }
      ],
      projects: [
        {
          name: 'Digital Solutions',
          description: 'Founded digital solutions brand delivering projects in UI/UX, frontend development, CMS, and e-commerce.'
        },
        {
          name: 'Web Development',
          description: 'Built responsive SEO-friendly websites with WordPress, React, Node.js, Figma, Adobe tools.'
        }
      ],
      tags: ['Founder', 'Full-Stack', 'UI/UX', 'WordPress', 'React']
    },
    {
      company: 'Freelance',
      location: 'Upwork & Fiverr',
      roles: [
        {
          title: 'UI/UX Designer & Developer',
          period: 'Aug 2016 – Mar 2024',
          current: false
        }
      ],
      projects: [
        {
          name: 'Global Projects',
          description: 'Designed and developed global projects in UI/UX, wireframing, branding, and web applications.'
        },
        {
          name: 'Tech Stack',
          description: 'Figma, Adobe XD, React, Node.js, HTML, CSS, JavaScript.'
        }
      ],
      tags: ['Freelance', 'UI/UX', 'Web Development', 'Branding']
    }
  ];

  const education = [
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
        'Agile Methodologies'
      ],
      tags: ['Software Engineering', 'Web Development', 'DBMS']
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#1a1a1a] text-white px-6 py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-white/20 text-sm hidden md:block">4/5</div>
      <div className="absolute top-8 right-8 text-white/20 text-sm hidden md:block">JOURNEY</div>

      <div className="max-w-6xl mx-auto">
        {/* Professional Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-[#F4C542]" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#F4C542] tracking-[0.3em] text-sm uppercase"
              >
                Professional Experience
              </motion.p>
            </div>
            <h2 className="text-5xl md:text-7xl tracking-tight mb-6">
              Where I've Worked
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px w-32 bg-[#F4C542] origin-left"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-white/10" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() =>
                    setActiveIndex((prev) => (prev === index ? null : index))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex((prev) => (prev === index ? null : index));
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="relative pl-12 md:pl-44 outline-none focus-visible:ring-2 focus-visible:ring-[#F4C542] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a] rounded-lg"
                >
                  {/* Company label - left side */}
                  <div className="absolute left-0 md:left-0 top-0 w-28 text-right pr-6 hidden md:block">
                    <div className="text-white/60 text-sm tracking-wide">
                      {exp.company}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-0 md:left-32 top-2 w-3 h-3 rounded-full -translate-x-1/2 ${
                      activeIndex === index 
                        ? 'bg-[#F4C542] scale-150 shadow-lg shadow-[#F4C542]/50' 
                        : 'bg-[#F4C542] border-2 border-[#1a1a1a]'
                    }`}
                    animate={{
                      scale: activeIndex === index ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Content card */}
                  <div className="group cursor-default">
                    {/* Mobile company name */}
                    <div className="flex items-center gap-2 mb-2 md:hidden text-white/60">
                      <span className="text-sm">{exp.company}</span>
                    </div>

                    {/* Roles */}
                    <div className="mb-4">
                      {exp.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="mb-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl md:text-2xl text-white">
                              {role.title}
                            </h3>
                            {role.current && (
                              <span className="px-2 py-0.5 text-xs bg-[#F4C542]/20 text-[#F4C542] rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/40 mt-1">
                            <span>{role.period}</span>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 text-sm text-white/50 mt-2">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="text-xs px-3 py-1 rounded-full bg-[#F4C542]/10 text-[#F4C542]/80"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Projects - expand on hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeIndex === index ? 'auto' : 0,
                        opacity: activeIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-2 pb-4 border-t border-white/10 mt-4">
                        {exp.projects.map((project, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4C542] mt-2 flex-shrink-0" />
                              <div>
                                <p className="text-sm text-white/70">{project.name}</p>
                                <p className="text-xs text-white/40 leading-relaxed mt-1">
                                  {project.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Hover hint */}
                    {activeIndex !== index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-white/20 mt-2 italic"
                      >
                        Tap or hover to see projects
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-32"
        />

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-purple-400 tracking-[0.3em] text-sm uppercase"
              >
                Education
              </motion.p>
            </div>
            <h2 className="text-5xl md:text-7xl tracking-tight mb-6">
              Academic Background
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px w-32 bg-purple-400 origin-left"
            />
          </div>

          {/* Education items */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveEduIndex(index)}
                  onMouseLeave={() => setActiveEduIndex(null)}
                  onClick={() =>
                    setActiveEduIndex((prev) => (prev === index ? null : index))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveEduIndex((prev) =>
                        prev === index ? null : index
                      );
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="relative pl-12 md:pl-44 outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a] rounded-lg"
                >
                  {/* Year label */}
                  <div className="absolute left-0 md:left-0 top-0 w-28 text-right pr-6 hidden md:block">
                    <div className="text-white/60 text-sm tracking-wide">
                      2026
                    </div>
                    <div className="text-xs text-purple-400">
                      Expected
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-0 md:left-32 top-2 w-3 h-3 rounded-full -translate-x-1/2 ${
                      activeEduIndex === index 
                        ? 'bg-purple-400 scale-150 shadow-lg shadow-purple-400/50' 
                        : 'bg-purple-400 border-2 border-[#1a1a1a]'
                    }`}
                    animate={{
                      scale: activeEduIndex === index ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Content */}
                  <div className="cursor-default">
                    {/* Mobile year */}
                    <div className="flex items-center gap-3 mb-3 md:hidden text-white/60">
                      <span className="text-sm">2026</span>
                      <span className="text-xs text-purple-400">Expected</span>
                    </div>

                    {/* Degree */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl text-white">
                          {edu.degree}
                        </h3>
                        <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-lg text-white/70 mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {edu.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300/80"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Coursework - expand on hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeEduIndex === index ? 'auto' : 0,
                        opacity: activeEduIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-4 border-t border-white/10 mt-4">
                        <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">Relevant Coursework</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.coursework.map((course, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                              <p className="text-sm text-white/50 leading-relaxed">
                                {course}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Hover hint */}
                    {activeEduIndex !== index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-white/20 mt-2 italic"
                      >
                        Tap or hover to see coursework
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-20"
        />
      </div>
    </section>
  );
}