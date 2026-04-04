import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollToSection } from '../useScrollToSection';

describe('useScrollToSection', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('returns scrollToSection and scrollAfterNavigation', () => {
    const { result } = renderHook(() => useScrollToSection());
    expect(result.current.scrollToSection).toBeInstanceOf(Function);
    expect(result.current.scrollAfterNavigation).toBeInstanceOf(Function);
  });

  it('scrollToSection calls scrollIntoView on found element', () => {
    const mockElement = { scrollIntoView: vi.fn() };
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as unknown as HTMLElement);

    const { result } = renderHook(() => useScrollToSection());
    act(() => {
      result.current.scrollToSection('test-section');
    });

    expect(document.getElementById).toHaveBeenCalledWith('test-section');
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('scrollToSection does nothing if element not found', () => {
    vi.spyOn(document, 'getElementById').mockReturnValue(null);

    const { result } = renderHook(() => useScrollToSection());
    act(() => {
      result.current.scrollToSection('nonexistent');
    });

    expect(document.getElementById).toHaveBeenCalledWith('nonexistent');
  });
});
