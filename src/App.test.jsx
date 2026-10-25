import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('відображає головну сторінку з пошуком і навігацією', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Знайди свій ідеальний рецепт/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Пошук рецептів')).toBeInTheDocument();
    expect(screen.getByText('Вхід/Реєстрація')).toBeInTheDocument();
  });
});
