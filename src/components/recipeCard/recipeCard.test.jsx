import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RecipeCard from './recipeCard.jsx';

describe('RecipeCard', () => {
  it('показує назву рецепта та кнопку збереження', () => {
    render(<RecipeCard title="Млинці" rating={4} color="#e8c9c9" />);
    expect(screen.getByText('Млинці')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Зберегти рецепт' })).toBeInTheDocument();
  });
});
