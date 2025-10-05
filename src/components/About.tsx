import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { User } from 'lucide-react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="about" className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Decorative section labels */}
      <div className="absolute top-8 left-8 text-[#1a1a1a]/20 text-sm hidden md:block">1/5</div>
      <div className="absolute top-8 right-8 text-[#1a1a1a]/20 text-sm hidden md:block">ABOUT</div>
      
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4C542]/5 rounded-full blur-[100px]"
      />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <User className="w-8 h-8 text-[#F4C542]" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#F4C542] tracking-[0.3em] text-sm uppercase"
              >
                About Me
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <h2 className="text-5xl md:text-7xl tracking-tight">
                BUILDING WITH PURPOSE
              </h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-4xl"
              >
                ✦
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px w-32 bg-[#F4C542] origin-left"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl leading-relaxed text-[#1a1a1a]/80">
                I blend human-centered design with front-end engineering to deliver clear, usable products. Currently an{' '}
                <span className="relative inline-block">
                  <span className="text-[#1a1a1a]">Associate Software Engineer at CoverageX</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-[#F4C542]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
                {' '}and founder of{' '}
                <span className="relative inline-block">
                  <span className="text-[#1a1a1a]">The Qexle</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-[#F4C542]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                </span>
                {' '}— I work end-to-end from research to release.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/20 hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center text-2xl">
                  1
                </div>
                <h3 className="text-xl">Design Systems</h3>
                <p className="text-[#1a1a1a]/60">
                  Building scalable UI systems in Figma and code
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/20 hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center text-2xl">
                  2
                </div>
                <h3 className="text-xl">Frontend Development</h3>
                <p className="text-[#1a1a1a]/60">
                  Production-ready interfaces with modern frameworks
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/20 hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center text-2xl">
                  3
                </div>
                <h3 className="text-xl">User Research</h3>
                <p className="text-[#1a1a1a]/60">
                  Understanding needs through comprehensive analysis
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-[#F4C542]/30 hover:border-[#F4C542]/50 hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4C542] flex items-center justify-center text-2xl">
                  4
                </div>
                <h3 className="text-xl">End-to-end Delivery</h3>
                <p className="text-[#1a1a1a]/60">
                  From concept to production deployment
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}