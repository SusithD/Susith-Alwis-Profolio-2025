import { Menu, X } from 'lucide-react';
import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { useThrottledScroll } from '../hooks/useThrottledScroll';
import { siteConfig } from '../data/site-config';
import MobileMenu from './Navigation/MobileMenu';

interface NavigationProps {
  currentPage: 'home' | 'portfolio' | 'project';
  onNavigate: (page: 'home' | 'portfolio' | 'project', projectId?: string) => void;
  projectTitle?: string;
}

export default function Navigation({ currentPage, onNavigate, projectTitle: _projectTitle }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  useThrottledScroll(
    useCallback(() => {
      setScrolled(window.scrollY > 50);

      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const navHeight = 72;
        const isOverAbout = rect.top <= navHeight && rect.bottom >= navHeight;
        setIsLightSection(isOverAbout);
      } else {
        setIsLightSection(false);
      }
    }, []),
    100
  );

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Dynamic colors based on section (used by home page nav)
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
    const contactClick = () => scrollToSection('contact');

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
              {siteConfig.name}
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
                onClick={contactClick}
                className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          <button
            onClick={contactClick}
            className="hidden sm:block bg-[#F4C542] text-[#0a0a0a] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105 text-sm sm:text-base"
          >
            Let&apos;s Begin
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#F4C542] transition-colors p-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <MobileMenu
          isOpen={mobileMenuOpen}
          items={[
            { label: 'Home', onClick: () => { onNavigate('home'); closeMobileMenu(); } },
            { label: 'Portfolio', onClick: () => {}, isActive: true },
          ]}
          ctaLabel="Let's Begin"
          ctaOnClick={() => { contactClick(); closeMobileMenu(); }}
        />
      </motion.nav>
    );
  }

  if (currentPage === 'project') {
    const contactClick = () => scrollToSection('contact-project');

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
              {siteConfig.name}
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
                onClick={contactClick}
                className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          <button
            onClick={contactClick}
            className="hidden sm:block bg-[#F4C542] text-[#0a0a0a] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105 text-sm sm:text-base"
          >
            Let&apos;s Begin
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#F4C542] transition-colors p-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <MobileMenu
          isOpen={mobileMenuOpen}
          items={[
            { label: 'Home', onClick: () => { onNavigate('home'); closeMobileMenu(); } },
            { label: 'Portfolio', onClick: () => { onNavigate('portfolio'); closeMobileMenu(); } },
          ]}
          ctaLabel="Let's Begin"
          ctaOnClick={() => { contactClick(); closeMobileMenu(); }}
        />
      </motion.nav>
    );
  }

  // Home page
  const homeTextClass = `${textColor} hover:text-[#F4C542]`;

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
            {siteConfig.name}
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
          className="hidden sm:block bg-[#F4C542] text-[#0a0a0a] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#F4C542]/90 transition-all hover:scale-105 text-sm sm:text-base"
        >
          Let&apos;s Begin
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${textColor} ${textHover} transition-colors p-2`}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        navBg={navBg}
        borderColor={borderColor}
        items={[
          { label: 'About', onClick: () => { scrollToSection('about'); closeMobileMenu(); }, className: homeTextClass },
          { label: 'Philosophy', onClick: () => { scrollToSection('philosophy'); closeMobileMenu(); }, className: homeTextClass },
          { label: 'Portfolio', onClick: () => { onNavigate('portfolio'); closeMobileMenu(); }, className: homeTextClass },
          { label: 'Experience', onClick: () => { scrollToSection('experience'); closeMobileMenu(); }, className: homeTextClass },
        ]}
        ctaLabel="Let's Begin"
        ctaOnClick={() => { scrollToSection('contact'); closeMobileMenu(); }}
      />
    </motion.nav>
  );
}
