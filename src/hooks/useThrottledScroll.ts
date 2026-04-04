import { useEffect, useRef } from 'react';

/**
 * Runs a callback on scroll events, throttled to the given interval.
 * Automatically cleans up on unmount.
 */
export function useThrottledScroll(callback: () => void, throttleMs = 100) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(callback, throttleMs);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [callback, throttleMs]);
}
