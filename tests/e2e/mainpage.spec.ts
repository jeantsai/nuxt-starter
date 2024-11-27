import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Nuxt template/);
});

test('get login link', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('banner').locator('span').click();

  // The login link should be visible.
  await expect(page.getByLabel('Login').locator('a')).toBeVisible();

  // Click the login link.
  await page.getByLabel('Login').locator('a').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
