import { motion } from 'motion/react';


interface NotFoundPageProps {
  onNavigateHome: () => void;
}

export default function NotFoundPage({ onNavigateHome }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-lg"
      >
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight">
            <span className="text-[#F4C542]">4</span>0<span className="text-[#F4C542]">4</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/70">
            Page not found
          </p>
          <p className="text-white/40">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <button
          onClick={onNavigateHome}
          className="bg-[#F4C542] text-[#0a0a0a] px-8 py-3 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105 text-lg"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
}
