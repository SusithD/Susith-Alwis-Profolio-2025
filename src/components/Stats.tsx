import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { number: 15, suffix: '+', label: 'Projects Delivered', duration: 2000 },
    { number: 3, suffix: '+', label: 'Years Experience', duration: 1500 },
    { number: 10, suffix: '+', label: 'Happy Clients', duration: 2000 },
    { number: 100, suffix: '%', label: 'Commitment', duration: 2500 }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const increment = stat.number / (stat.duration / 16);
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={ref} className="relative bg-[#1a1a1a] text-white py-24 px-6 overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4C542] rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px]"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with icon */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <TrendingUp className="w-8 h-8 text-[#F4C542]" />
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#F4C542] tracking-[0.3em] text-sm uppercase"
          >
            By The Numbers
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center space-y-4 cursor-default"
            >
              <div className="space-y-2">
                <motion.div 
                  className="text-5xl md:text-7xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {counts[index]}{stat.suffix}
                </motion.div>
                <motion.div 
                  className="h-1 w-16 bg-[#F4C542] mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-white/60 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}