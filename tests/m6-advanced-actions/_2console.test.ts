import { test, expect } from "@playwright/test";

test('Check console', async ({ page }) => {

  // Must register the listeners before performing the action
  page.on('console', msg => {
    console.log(msg);
    expect.soft(msg.type()).not.toEqual('error');
  });

  page.on('pageerror', error => {
    console.log(`Found an error: ${error.name}, ${error.message}`);
    expect.soft(error.name).not.toEqual('Error');
  });

  page.goto('/');

  await page.getByRole('button', { name: 'Register' }).click();

});
