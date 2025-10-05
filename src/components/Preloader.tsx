import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start text animation after brief delay
    const textTimer = setTimeout(() => setShowText(true), 200);

    // Counter animation
    const counterInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    // Complete preloader after counter finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearInterval(counterInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* Main text with split letter animation */}
        <AnimatePresence>
          {showText && (
            <div className="flex items-center justify-center gap-1 mb-8">
              {['S', 'U', 'S', 'I', 'T', 'H', ' ', 'A', 'L', 'W', 'I', 'S'].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl tracking-wider text-white"
                  style={{ fontWeight: 300 }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  ease: "backOut"
                }}
                className="text-2xl sm:text-3xl md:text-4xl text-[#F4C542]"
                style={{ fontWeight: 300 }}
              >
                ®
              </motion.span>
            </div>
          )}
        </AnimatePresence>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm sm:text-base text-white/50 tracking-widest uppercase">
            Portfolio
          </p>
        </motion.div>

        {/* Loading counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="text-center"
        >
          <div className="text-2xl sm:text-3xl text-[#F4C542] tracking-wider">
            {count}%
          </div>
        </motion.div>

        {/* Minimal loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          className="mt-8 w-48 sm:w-64 h-px bg-white/10 mx-auto overflow-hidden"
        >
          <motion.div
            className="h-full bg-[#F4C542]"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}