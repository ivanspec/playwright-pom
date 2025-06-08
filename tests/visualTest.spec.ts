import { test, expect } from '@playwright/test';

test('Example visual testing', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://shopee.co.id/buyer/login?');

  await expect(page.getByRole('textbox', { name: 'No. Handphone/Username/Email' })).toBeVisible();
  await expect(page).toHaveScreenshot({
    name: 'homepage.png',
    omitPlatformFromName: true  // This will use the same name across platforms
  });
});
