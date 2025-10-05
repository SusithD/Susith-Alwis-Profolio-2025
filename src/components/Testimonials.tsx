import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const testimonials = [
    {
      quote: "Susith's ability to bridge design and development is exceptional. He delivered a product that exceeded our expectations in both aesthetics and functionality.",
      author: "Sarah Johnson",
      role: "Product Manager, CoverageX",
      image: null
    },
    {
      quote: "Working with Susith was a game-changer for our startup. His design system approach saved us months of development time and gave us a cohesive brand identity.",
      author: "Michael Chen",
      role: "CEO, TechStart Inc.",
      image: null
    },
    {
      quote: "Rare to find someone who understands both user experience and technical implementation at such a deep level. Highly recommend for any product development needs.",
      author: "Emily Rodriguez",
      role: "Design Lead, Innovation Labs",
      image: null
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] px-6 py-24 relative overflow-hidden">
      <motion.div
        style={{ x }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <p className="text-[#1a1a1a]/60 text-lg tracking-wide">TESTIMONIALS</p>
            <h2 className="text-5xl md:text-7xl tracking-tight">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#F4C542]/20">
                  <div className="space-y-6">
                    <Quote className="w-12 h-12 text-[#F4C542]/30" />
                    <p className="text-lg leading-relaxed text-[#1a1a1a]/80">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#1a1a1a]/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F4C542] to-purple-500 flex items-center justify-center">
                      <span className="text-white">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#1a1a1a]">{testimonial.author}</p>
                      <p className="text-sm text-[#1a1a1a]/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}