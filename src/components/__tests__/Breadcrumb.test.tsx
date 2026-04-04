import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Breadcrumb from '../Breadcrumb';

describe('Breadcrumb', () => {
  it('renders all items', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Home', onClick: vi.fn() },
          { label: 'Portfolio', onClick: vi.fn() },
          { label: 'Project', isActive: true },
        ]}
      />
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Project')).toBeInTheDocument();
  });

  it('renders clickable items as buttons', () => {
    const onClick = vi.fn();
    render(
      <Breadcrumb
        items={[
          { label: 'Home', onClick },
          { label: 'Current', isActive: true },
        ]}
      />
    );
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
  });

  it('calls onClick when clickable item is clicked', async () => {
    const onClick = vi.fn();
    render(
      <Breadcrumb
        items={[
          { label: 'Home', onClick },
          { label: 'Current', isActive: true },
        ]}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Home' }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders non-clickable active item as span', () => {
    render(
      <Breadcrumb items={[{ label: 'Active', isActive: true }]} />
    );
    const active = screen.getByText('Active');
    expect(active.tagName).toBe('SPAN');
  });

  it('has aria-label for accessibility', () => {
    render(<Breadcrumb items={[{ label: 'Home' }]} />);
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument();
  });
});
