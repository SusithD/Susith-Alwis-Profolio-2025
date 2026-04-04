import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { siteConfig } from '../../data/site-config';
import MobileMenu from './MobileMenu';

interface InnerPageNavProps {
  currentPage: 'portfolio' | 'project';
  onNavigate: (page: 'home' | 'portfolio' | 'project') => void;
}

export default function InnerPageNav({ currentPage, onNavigate }: InnerPageNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  const contactId = currentPage === 'project' ? 'contact-project' : 'contact';
  const contactClick = () => scrollToSection(contactId);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const desktopPills = currentPage === 'portfolio'
    ? [
        { label: 'Home', onClick: () => onNavigate('home'), active: false },
        { label: 'Portfolio', onClick: () => {}, active: true },
        { label: 'Contact', onClick: contactClick, active: false },
      ]
    : [
        { label: 'Home', onClick: () => onNavigate('home'), active: false },
        { label: 'Portfolio', onClick: () => onNavigate('portfolio'), active: false },
        { label: 'Contact', onClick: contactClick, active: false },
      ];

  const mobileItems = currentPage === 'portfolio'
    ? [
        { label: 'Home', onClick: () => { onNavigate('home'); closeMobileMenu(); } },
        { label: 'Portfolio', onClick: () => {}, isActive: true },
      ]
    : [
        { label: 'Home', onClick: () => { onNavigate('home'); closeMobileMenu(); } },
        { label: 'Portfolio', onClick: () => { onNavigate('portfolio'); closeMobileMenu(); } },
      ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/10 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8">
          <button
            onClick={() => onNavigate('home')}
            className="text-white hover:text-accent transition-colors tracking-wide text-sm sm:text-base"
          >
            {siteConfig.name}
          </button>
          <div className="hidden md:flex items-center gap-1 bg-white/10 rounded-full px-2 py-2">
            {desktopPills.map((pill) => (
              <button
                key={pill.label}
                onClick={pill.onClick}
                className={`px-4 py-1.5 rounded-full transition-all text-sm ${
                  pill.active
                    ? 'text-white bg-white/20'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={contactClick}
          className="hidden sm:block bg-accent text-dark px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-accent/90 transition-all hover:scale-105 text-sm sm:text-base"
        >
          Let&apos;s Begin
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-accent transition-colors p-2"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        items={mobileItems}
        ctaLabel="Let's Begin"
        ctaOnClick={() => { contactClick(); closeMobileMenu(); }}
      />
    </motion.nav>
  );
}
