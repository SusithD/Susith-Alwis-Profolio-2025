import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Lightbulb } from 'lucide-react';

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Simple lines with word emphasis
  const lines = [
    { text: "DESIGN", highlight: true },
    { text: "IS NOT JUST", highlight: false },
    { text: "DECORATION, BUT", highlight: false },
    { text: "A TOOL FOR INFLUENCE", highlight: true },
    { text: "AND GROWTH.", highlight: true }
  ];

  return (
    <section id="philosophy" ref={ref} className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute top-8 left-8 text-white/40 text-sm hidden md:block">
        2/5
      </div>
      <div className="absolute top-8 right-8 text-white/40 text-sm hidden md:block">
        PHILOSOPHY
      </div>
      
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-6xl w-full"
      >
        <div className="space-y-12">
          <motion.div
            ref={textRef}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <Lightbulb className="w-8 h-8 text-[#F4C542]" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[#F4C542] tracking-[0.3em] text-sm uppercase"
              >
                Philosophy
              </motion.p>
            </div>
            
            <div className="space-y-2">
              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="overflow-hidden">
                  <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2 + lineIndex * 0.15,
                      ease: [0.25, 0.4, 0.25, 1]
                    }}
                    className={`text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] ${
                      line.highlight ? 'text-white' : 'text-white/50'
                    }`}
                  >
                    {line.text}
                  </motion.h2>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 pt-12"
          >
            {[
              {
                title: "User-Centered",
                description: "Every decision is rooted in understanding real user needs and behaviors through research and empathy.",
                accent: true,
                delay: 0.1
              },
              {
                title: "Systematic",
                description: "Building scalable design systems that ensure consistency and efficiency across all touchpoints.",
                accent: false,
                delay: 0.2
              },
              {
                title: "Intentional",
                description: "Every pixel, interaction, and animation serves a purpose in creating meaningful user experiences.",
                accent: false,
                delay: 0.3
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className={`space-y-4 border-l-2 ${
                  item.accent ? 'border-[#F4C542]' : 'border-white/20'
                } pl-6`}
              >
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}