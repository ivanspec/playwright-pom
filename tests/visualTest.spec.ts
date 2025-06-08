import { test, expect } from '@playwright/test';

test('user visual testing', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://shopee.co.id/buyer/login?');

  await expect(page.getByRole('textbox', { name: 'No. Handphone/Username/Email' })).toBeVisible();
  await expect(page).toHaveScreenshot('homepage.png');
  await page.waitForTimeout(3000);
  
});
