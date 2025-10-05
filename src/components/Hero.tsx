import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Main content transforms - smooth fade and scale
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 8]);
  
  // Parallax effects for different layers
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const ySideText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Name specific transforms for emphasis
  const nameScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1.05, 0.9]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);

  return (
    <section 
      ref={ref} 
      id="hero" 
      className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-4 md:px-8 lg:px-12 pt-20 pb-12 relative overflow-hidden"
    >
      {/* Main content container */}
      <motion.div 
        style={{ 
          opacity, 
          scale
        }}
        className="relative z-10 w-full max-w-[1800px] mx-auto"
      >
        {/* Content wrapper */}
        <div className="relative flex flex-col items-center justify-center min-h-[75vh]">
          
          {/* Left side text - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ y: ySideText }}
            className="absolute top-[5%] md:top-[12%] left-0 md:left-[3%] lg:left-[5%] max-w-[260px] lg:max-w-[300px] z-20 hidden md:block"
          >
            <p className="text-sm lg:text-base text-white/70 leading-relaxed">
              Designing user-focused interfaces and building production-ready front-ends with creativity and precision.
            </p>
          </motion.div>

          {/* Right side text - Tagline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ y: ySideText }}
            className="absolute top-[5%] md:top-[12%] right-0 md:right-[3%] lg:right-[5%] text-right max-w-[260px] lg:max-w-[300px] z-20 hidden md:block"
          >
            <h2 className="text-xl lg:text-2xl xl:text-3xl tracking-tight leading-[1.2] uppercase">
              Where design<br />
              meets<br />
              <span className="text-white/60">engineering</span>
            </h2>
          </motion.div>

          {/* Center typography - Hello I'm Susith Alwis */}
          <motion.div 
            style={{ y: yHero }}
            className="relative w-full flex items-center justify-center px-4 md:px-8"
          >
            <div className="relative max-w-7xl mx-auto text-center">
              
              {/* Hello I'm - smaller text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ opacity: nameOpacity }}
                className="mb-4 md:mb-6"
              >
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/50 tracking-wide">
                  Hello, I'm
                </span>
              </motion.div>

              {/* Susith Alwis - Big typography in one line */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ scale: nameScale, opacity: nameOpacity }}
                  className="relative"
                >
                  <h1 
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-none tracking-tight text-white uppercase"
                    style={{ fontWeight: 600 }}
                  >
                    Susith Alwis
                  </h1>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom info - Role and status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ y: yBottom }}
            className="mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 z-20 text-sm md:text-base text-white/60"
          >
            <span>UI/UX Designer</span>
            <span className="hidden md:inline text-white/30">•</span>
            <span>Software Engineer</span>
            <span className="hidden md:inline text-white/30">•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#F4C542] rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Mobile side content - shown below on smaller screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ y: yBottom }}
            className="mt-8 flex flex-col md:hidden gap-4 max-w-md text-center px-6"
          >
            <p className="text-sm text-white/70 leading-relaxed">
              Designing user-focused interfaces and building production-ready front-ends with creativity and precision.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal background design */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Subtle grid pattern */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.015, 0.005]),
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
          className="absolute inset-0"
        />

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#F4C542]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0.1]) }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0.1]) }}
        />

        {/* Floating accent lines */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-32 h-px bg-gradient-to-r from-transparent via-[#F4C542]/20 to-transparent"
          animate={{
            x: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.6, 0.1]) }}
        />
        <motion.div
          className="absolute top-[70%] right-[15%] w-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.6, 0.1]) }}
        />
        
        {/* Minimal corner accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.05, 0]) }}
          className="absolute top-0 left-0 w-24 h-24 border-l border-t border-white/5"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.05, 0]) }}
          className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-white/5"
        />
      </motion.div>
    </section>
  );
}
