import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: 'home' | 'portfolio' | 'project';
  onNavigate: (page: 'home' | 'portfolio' | 'project', projectId?: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Throttle scroll events
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 50);
        
        // Simple check: if scroll position is in about section range (roughly)
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // About section is typically the 2nd section
        // Hero is ~100vh, About starts around 1 viewport
        const isInAboutSection = scrollPosition > windowHeight * 0.8 && scrollPosition < windowHeight * 2;
        setIsLightSection(isInAboutSection);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic colors based on section
  const navBg = isLightSection 
    ? scrolled ? 'bg-white/90' : 'bg-white/50'
    : scrolled ? 'bg-[#0a0a0a]/90' : 'bg-[#0a0a0a]/50';
  
  const textColor = isLightSection ? 'text-[#1a1a1a]' : 'text-white';
  const textHover = 'hover:text-[#F4C542]';
  const borderColor = isLightSection ? 'border-[#1a1a1a]/10' : 'border-white/10';
  const pillBg = isLightSection ? 'bg-[#1a1a1a]/10' : 'bg-white/10';
  const pillHover = isLightSection ? 'hover:bg-[#1a1a1a]/20' : 'hover:bg-white/10';
  const pillTextColor = isLightSection ? 'text-[#1a1a1a]/80 hover:text-[#1a1a1a]' : 'text-white/80 hover:text-white';

  if (currentPage === 'portfolio') {
    return (
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-white hover:text-[#F4C542] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#F4C542] text-[#0a0a0a] px-6 py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105"
          >
            Let's Begin
          </button>
        </div>
      </motion.nav>
    );
  }

  if (currentPage === 'project') {
    return (
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 ${navBg} backdrop-blur-md border-b ${borderColor} transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-2 ${textColor} ${textHover} transition-colors`}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <button
            onClick={() => scrollToSection('contact-project')}
            className="bg-[#F4C542] text-[#0a0a0a] px-6 py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105"
          >
            Let's Begin
          </button>
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${navBg} backdrop-blur-md border-b ${borderColor} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`${textColor} ${textHover} transition-colors tracking-wide`}
          >
            Susith Deshan
          </button>
          <div className={`hidden md:flex items-center gap-1 ${pillBg} rounded-full px-2 py-2`}>
            <button
              onClick={() => scrollToSection('about')}
              className={`px-4 py-1.5 rounded-full ${pillTextColor} ${pillHover} transition-all text-sm`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className={`px-4 py-1.5 rounded-full ${pillTextColor} ${pillHover} transition-all text-sm`}
            >
              Philosophy
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className={`px-4 py-1.5 rounded-full ${pillTextColor} ${pillHover} transition-all text-sm`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`px-4 py-1.5 rounded-full ${pillTextColor} ${pillHover} transition-all text-sm`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-4 py-1.5 rounded-full ${pillTextColor} ${pillHover} transition-all text-sm`}
            >
              Contact
            </button>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-[#F4C542] text-[#0a0a0a] px-6 py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105"
        >
          Let's Begin
        </button>
      </div>
    </motion.nav>
  );
}