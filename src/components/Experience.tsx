import { motion } from 'motion/react';
import { useState } from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { experiences, education } from '../data/experience';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeEduIndex, setActiveEduIndex] = useState<number | null>(null);

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
              Where I&apos;ve Worked
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
                  key={exp.company}
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
                      {exp.roles.map((role, _roleIndex) => (
                        <div key={role.title} className="mb-2">
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
                          key={tag}
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
                        {exp.projects.map((project, _i) => (
                          <div key={project.name} className="space-y-1">
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
                  key={edu.institution}
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
                          key={tag}
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
                          {edu.coursework.map((course, _i) => (
                            <div key={course} className="flex items-start gap-2">
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