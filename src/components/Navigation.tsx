import React from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentPage: 'home' | 'portfolio' | 'project';
  onNavigate: (page: 'home' | 'portfolio' | 'project', projectId?: string) => void;
  projectTitle?: string;
}

export default function Navigation({ currentPage, onNavigate, projectTitle }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-white hover:text-[#F4C542] transition-colors tracking-wide text-sm sm:text-base"
            >
              Susith Deshan
            </button>
            <div className="hidden md:flex items-center gap-1 bg-white/10 rounded-full px-2 py-2">
              <button
                onClick={() => onNavigate('home')}
                className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Home
              </button>
              <button
                className="px-4 py-1.5 rounded-full text-white bg-white/20 transition-all text-sm"
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Desktop CTA */}
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden sm:block bg-[#F4C542] text-[#0a0a0a] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105 text-sm sm:text-base"
          >
            Let's Begin
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#F4C542] transition-colors p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu - Portfolio */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                <button
                  onClick={() => {
                    onNavigate('home');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                >
                  Home
                </button>
                <button
                  className="block w-full text-left text-white bg-white/20 py-3 px-4 rounded-lg"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full bg-[#F4C542] text-[#0a0a0a] py-3 px-4 rounded-lg hover:bg-[#F4C542]/90 transition-all mt-4 font-medium"
                >
                  Let's Begin
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  }

  if (currentPage === 'project') {
    return (
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-white hover:text-[#F4C542] transition-colors tracking-wide text-sm sm:text-base"
            >
              Susith Deshan
            </button>
            <div className="hidden md:flex items-center gap-1 bg-white/10 rounded-full px-2 py-2">
              <button
                onClick={() => onNavigate('home')}
                className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact-project')}
                className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection('contact-project')}
            className="hidden sm:block bg-[#F4C542] text-[#0a0a0a] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105 text-sm sm:text-base"
          >
            Let's Begin
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#F4C542] transition-colors p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu - Project */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                <button
                  onClick={() => {
                    onNavigate('home');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact-project');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact-project');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full bg-[#F4C542] text-[#0a0a0a] py-3 px-4 rounded-lg hover:bg-[#F4C542]/90 transition-all mt-4 font-medium"
                >
                  Let's Begin
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${navBg} backdrop-blur-md border-b ${borderColor} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`${textColor} ${textHover} transition-colors tracking-wide text-sm sm:text-base`}
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
        
        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden sm:block bg-[#F4C542] text-[#0a0a0a] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105 text-sm sm:text-base"
        >
          Let's Begin
        </button>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${textColor} ${textHover} transition-colors p-2`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${navBg} backdrop-blur-md border-t ${borderColor}`}
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => {
                  scrollToSection('about');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left ${textColor} hover:text-[#F4C542] py-3 px-4 rounded-lg hover:bg-white/10 transition-all`}
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollToSection('philosophy');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left ${textColor} hover:text-[#F4C542] py-3 px-4 rounded-lg hover:bg-white/10 transition-all`}
              >
                Philosophy
              </button>
              <button
                onClick={() => {
                  onNavigate('portfolio');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left ${textColor} hover:text-[#F4C542] py-3 px-4 rounded-lg hover:bg-white/10 transition-all`}
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  scrollToSection('experience');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left ${textColor} hover:text-[#F4C542] py-3 px-4 rounded-lg hover:bg-white/10 transition-all`}
              >
                Experience
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left ${textColor} hover:text-[#F4C542] py-3 px-4 rounded-lg hover:bg-white/10 transition-all`}
              >
                Contact
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="block w-full bg-[#F4C542] text-[#0a0a0a] py-3 px-4 rounded-lg hover:bg-[#F4C542]/90 transition-all mt-4 font-medium"
              >
                Let's Begin
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}