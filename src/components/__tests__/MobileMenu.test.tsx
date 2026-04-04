import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MobileMenu from '../Navigation/MobileMenu';

describe('MobileMenu', () => {
  const defaultItems = [
    { label: 'Home', onClick: vi.fn() },
    { label: 'About', onClick: vi.fn() },
  ];

  it('renders nothing when closed', () => {
    const { container } = render(
      <MobileMenu isOpen={false} items={defaultItems} ctaLabel="Contact" ctaOnClick={vi.fn()} />
    );
    expect(container.textContent).toBe('');
  });

  it('renders menu items when open', () => {
    render(
      <MobileMenu isOpen={true} items={defaultItems} ctaLabel="Contact" ctaOnClick={vi.fn()} />
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(
      <MobileMenu isOpen={true} items={defaultItems} ctaLabel="Let's Begin" ctaOnClick={vi.fn()} />
    );
    expect(screen.getByText("Let's Begin")).toBeInTheDocument();
  });

  it('calls item onClick when clicked', async () => {
    const onClick = vi.fn();
    render(
      <MobileMenu
        isOpen={true}
        items={[{ label: 'Home', onClick }]}
        ctaLabel="CTA"
        ctaOnClick={vi.fn()}
      />
    );
    await userEvent.click(screen.getByText('Home'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('calls ctaOnClick when CTA clicked', async () => {
    const ctaOnClick = vi.fn();
    render(
      <MobileMenu isOpen={true} items={defaultItems} ctaLabel="Contact" ctaOnClick={ctaOnClick} />
    );
    await userEvent.click(screen.getByText('Contact'));
    expect(ctaOnClick).toHaveBeenCalledOnce();
  });

  it('highlights active item', () => {
    render(
      <MobileMenu
        isOpen={true}
        items={[{ label: 'Active', onClick: vi.fn(), isActive: true }]}
        ctaLabel="CTA"
        ctaOnClick={vi.fn()}
      />
    );
    const activeItem = screen.getByText('Active');
    expect(activeItem.className).toContain('bg-white/20');
  });
});
