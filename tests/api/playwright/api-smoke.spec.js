const { test, expect } = require('@playwright/test');

test('API smoke: GitHub API root responds', async ({ request }) => {
  const response = await request.get('https://api.github.com');
  expect(response.ok()).toBeTruthy();
});
