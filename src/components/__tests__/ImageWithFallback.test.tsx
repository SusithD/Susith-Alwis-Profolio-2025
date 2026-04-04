import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

describe('ImageWithFallback', () => {
  it('renders image with correct src and alt', () => {
    render(<ImageWithFallback src="/test.jpg" alt="Test image" />);
    const img = screen.getByRole('img', { name: 'Test image' });
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('defaults to lazy loading and async decoding', () => {
    render(<ImageWithFallback src="/test.jpg" alt="Test" />);
    const img = screen.getByRole('img', { name: 'Test' });
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('decoding', 'async');
  });

  it('shows fallback on image error', () => {
    render(<ImageWithFallback src="/broken.jpg" alt="Broken image" />);
    const img = screen.getByRole('img', { name: 'Broken image' });
    fireEvent.error(img);

    // After error, the container div gets role="img" with the alt as aria-label
    const fallback = screen.getByRole('img', { name: 'Broken image' });
    expect(fallback).toBeInTheDocument();
    // The container should have the dark-theme-friendly background class
    expect(fallback.className).toContain('bg-white/5');
  });

  it('passes className to image element', () => {
    render(<ImageWithFallback src="/test.jpg" alt="Test" className="custom-class" />);
    const img = screen.getByRole('img', { name: 'Test' });
    expect(img).toHaveClass('custom-class');
  });
});
