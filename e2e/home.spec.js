import { test, expect } from '@playwright/test';

test.describe('Головна сторінка', () => {
  test('показує заголовок, пошук і навігацію', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: /Знайди свій ідеальний рецепт/i })
    ).toBeVisible();
    await expect(page.getByPlaceholder('Назва страви або інгредієнти')).toBeVisible();
    await expect(page.getByText('Вхід/Реєстрація')).toBeVisible();
  });

  test('показує чотири картки рецептів', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('article')).toHaveCount(4);
  });

  test('пошукове поле приймає текст', async ({ page }) => {
    await page.goto('/');
    const input = page.getByLabel('Пошук рецептів');
    await input.fill('млинці');
    await expect(input).toHaveValue('млинці');
  });
});
