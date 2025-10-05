import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { GitBranch } from 'lucide-react';

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      number: '01',
      title: 'Research & Discovery',
      description: 'Understanding the problem space, user needs, and business goals through comprehensive research and competitive analysis.',
      highlights: ['User Interviews', 'Market Research', 'Competitor Analysis']
    },
    {
      number: '02',
      title: 'Ideation & Strategy',
      description: 'Brainstorming solutions, defining information architecture, and creating strategic frameworks that align with business objectives.',
      highlights: ['Wireframing', 'User Flows', 'Information Architecture']
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      description: 'Creating high-fidelity designs, interactive prototypes, and comprehensive design system components for consistency.',
      highlights: ['UI Design', 'Prototyping', 'Design Systems']
    },
    {
      number: '04',
      title: 'Development & Testing',
      description: 'Building production-ready code with modern frameworks, conducting usability tests, and iterating based on user feedback.',
      highlights: ['Frontend Dev', 'Usability Testing', 'QA']
    },
    {
      number: '05',
      title: 'Launch & Iterate',
      description: 'Deploying to production, monitoring key metrics, gathering user insights, and continuously improving the experience.',
      highlights: ['Deployment', 'Analytics', 'Optimization']
    }
  ];

  return (
    <section id="process" ref={ref} className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] px-6 py-24 relative">
      {/* Decorative section labels */}
      <div className="absolute top-8 left-8 text-[#1a1a1a]/20 text-sm hidden md:block">5/5</div>
      <div className="absolute top-8 right-8 text-[#1a1a1a]/20 text-sm hidden md:block">PROCESS</div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-24"
        >
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <GitBranch className="w-8 h-8 text-[#F4C542]" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#F4C542] tracking-[0.3em] text-sm uppercase"
              >
                My Process
              </motion.p>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
              From Concept<br />to Reality
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 w-32 bg-[#F4C542] origin-left"
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <span className="text-8xl md:text-9xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        {step.number}
                      </span>
                      {/* Accent line */}
                      <motion.div
                        className="absolute -bottom-4 left-0 h-1 bg-[#F4C542]"
                        initial={{ width: 0 }}
                        whileInView={{ width: '60px' }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10 space-y-6">
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-300"
                    >
                      {step.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-xl text-[#1a1a1a]/70 leading-relaxed max-w-3xl"
                    >
                      {step.description}
                    </motion.p>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-3"
                    >
                      {step.highlights.map((highlight, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.6 + i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 bg-[#1a1a1a]/5 hover:bg-[#F4C542]/20 border border-[#1a1a1a]/10 hover:border-[#F4C542]/30 rounded-full text-sm transition-all duration-300 cursor-default"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Connecting line (not for last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute left-12 top-full h-20 w-px bg-gradient-to-b from-[#1a1a1a]/10 to-transparent mt-10"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px w-full bg-gradient-to-r from-transparent via-[#1a1a1a]/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}