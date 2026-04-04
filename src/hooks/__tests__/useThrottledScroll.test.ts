import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useThrottledScroll } from '../useThrottledScroll';

describe('useThrottledScroll', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('fires callback on initial render', () => {
    const callback = vi.fn();
    renderHook(() => useThrottledScroll(callback, 100));
    expect(callback).toHaveBeenCalledOnce();
  });

  it('registers and cleans up scroll listener', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const callback = vi.fn();

    const { unmount } = renderHook(() => useThrottledScroll(callback, 100));
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true });

    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('throttles rapid scroll events', () => {
    const callback = vi.fn();
    renderHook(() => useThrottledScroll(callback, 200));

    // Reset count after initial call
    callback.mockClear();

    // Fire multiple scroll events rapidly
    window.dispatchEvent(new Event('scroll'));
    window.dispatchEvent(new Event('scroll'));
    window.dispatchEvent(new Event('scroll'));

    // First call is immediate, the rest are throttled
    expect(callback.mock.calls.length).toBeLessThanOrEqual(2);

    // After throttle period, the trailing call should fire
    vi.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalled();
  });
});
