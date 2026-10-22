import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Rating from './rating.jsx';

describe('Rating', () => {
  it('показує оцінку в aria-label', () => {
    render(<Rating value={3.5} />);
    expect(screen.getByLabelText('Оцінка 3.5 з 5')).toBeInTheDocument();
  });

  it('працює з нульовою оцінкою за замовчуванням', () => {
    render(<Rating />);
    expect(screen.getByLabelText('Оцінка 0 з 5')).toBeInTheDocument();
  });
});
