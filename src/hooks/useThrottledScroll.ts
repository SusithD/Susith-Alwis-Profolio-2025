import { useEffect, useRef, useCallback } from 'react';

/**
 * Runs a callback on scroll events, throttled to fire at most once per interval.
 * Fires immediately on first scroll, then throttles subsequent calls.
 */
export function useThrottledScroll(callback: () => void, throttleMs = 100) {
  const lastRun = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stableCallback = useCallback(() => callback(), [callback]);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const elapsed = now - lastRun.current;

      if (elapsed >= throttleMs) {
        lastRun.current = now;
        stableCallback();
      } else {
        // Schedule trailing call
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          lastRun.current = Date.now();
          stableCallback();
        }, throttleMs - elapsed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    stableCallback(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [stableCallback, throttleMs]);
}
