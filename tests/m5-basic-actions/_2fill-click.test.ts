import { test, expect } from "@playwright/test";

test('Fill test', async ({ page }) => {

  await page.goto('/');

  await page.getByLabel('First name').fill('Andrejs');

  await page.getByLabel('Date of birth').fill('2025-10-10');

});

test('Click demo', async ({ page }) => {

  await page.goto('/');

  const btn = page.getByRole('button', { name: 'Register' });

  await btn.click({ clickCount: 5 });
});
