import { useCallback } from 'react';

/**
 * Provides a reusable scroll-to-section function.
 * Optionally runs a callback before scrolling (e.g. navigate home first).
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollAfterNavigation = useCallback(
    (sectionId: string, onNavigate?: () => void) => {
      if (onNavigate) {
        onNavigate();
        // Wait for the page to render before scrolling
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          });
        });
      } else {
        scrollToSection(sectionId);
      }
    },
    [scrollToSection]
  );

  return { scrollToSection, scrollAfterNavigation };
}
