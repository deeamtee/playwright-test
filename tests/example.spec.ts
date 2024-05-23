import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');

  page.on('request', (request) => {
    console.log(request.postData());
    console.log(request.postDataBuffer());
    console.log(request.postDataJSON());
    
  })

  const button = page.getByText('Нажмите, чтобы сделать запрос');
  await button.click();

  await expect(1).toBe(1);
});
