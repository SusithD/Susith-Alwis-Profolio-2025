import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotFoundPage from '../NotFoundPage';

describe('NotFoundPage', () => {
  it('renders 404 heading', () => {
    render(<NotFoundPage onNavigateHome={vi.fn()} />);
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });

  it('renders back to home button', () => {
    render(<NotFoundPage onNavigateHome={vi.fn()} />);
    expect(screen.getByRole('button', { name: /back to home/i })).toBeInTheDocument();
  });

  it('calls onNavigateHome when button clicked', async () => {
    const onNavigateHome = vi.fn();
    render(<NotFoundPage onNavigateHome={onNavigateHome} />);
    await userEvent.click(screen.getByRole('button', { name: /back to home/i }));
    expect(onNavigateHome).toHaveBeenCalledOnce();
  });

  it('displays informative message', () => {
    render(<NotFoundPage onNavigateHome={vi.fn()} />);
    expect(screen.getByText(/doesn.t exist or has been moved/)).toBeInTheDocument();
  });
});
