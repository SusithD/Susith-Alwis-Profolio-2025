import { Menu, X } from 'lucide-react';
import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { useThrottledScroll } from '../hooks/useThrottledScroll';
import { siteConfig } from '../data/site-config';
import MobileMenu from './Navigation/MobileMenu';
import InnerPageNav from './Navigation/InnerPageNav';

interface NavigationProps {
  currentPage: 'home' | 'portfolio' | 'project';
  onNavigate: (page: 'home' | 'portfolio' | 'project', projectId?: string) => void;
  projectTitle?: string;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
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

  if (currentPage !== 'home') {
    return <InnerPageNav currentPage={currentPage} onNavigate={onNavigate} />;
  }

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navBg = isLightSection
    ? scrolled ? 'bg-white/90' : 'bg-white/50'
    : scrolled ? 'bg-dark/90' : 'bg-dark/50';

  const textColor = isLightSection ? 'text-dark-alt' : 'text-white';
  const textHover = 'hover:text-accent';
  const borderColor = isLightSection ? 'border-dark-alt/10' : 'border-white/10';
  const pillBg = isLightSection ? 'bg-dark-alt/10' : 'bg-white/10';
  const pillHover = isLightSection ? 'hover:bg-dark-alt/20' : 'hover:bg-white/10';
  const pillTextColor = isLightSection ? 'text-dark-alt/80 hover:text-dark-alt' : 'text-white/80 hover:text-white';
  const homeTextClass = `${textColor} hover:text-accent`;

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
            {[
              { label: 'About', section: 'about' },
              { label: 'Philosophy', section: 'philosophy' },
              { label: 'Portfolio', section: null },
              { label: 'Experience', section: 'experience' },
              { label: 'Contact', section: 'contact' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => item.section ? scrollToSection(item.section) : onNavigate('portfolio')}
                className={`px-4 py-1.5 rounded-full ${pillTextColor} ${pillHover} transition-all text-sm`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          className="hidden sm:block bg-accent text-dark px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-accent/90 transition-all hover:scale-105 text-sm sm:text-base"
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
