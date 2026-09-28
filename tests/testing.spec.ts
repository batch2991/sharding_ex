import { test, expect } from '@playwright/test';

test('test1 - Google homepage', async ({ page }) => {
  await page.goto('https://www.google.com');
});

test('test2 - Search page', async ({ page }) => {
  await page.goto('https://www.google.com');
});

test('test3 - Playwright homepage', async ({ page }) => {
  await page.goto('https://playwright.dev');
});

test('test4 - Playwright docs', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
});

test('test5 - Playwright browsers', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/browsers');
});

test('test6 - Playwright locators', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/locators');
});

test('test7 - Playwright assertions', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-assertions');
});

test('test8 - Playwright test fixtures', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-fixtures');
});

test('test9 - Playwright test hooks', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/api/class-test');
});

test('test10 - Playwright configuration', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-configuration');
});

test('test11 - Google title', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('test12 - Google search box', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page.locator('textarea[name="q"]')).toBeVisible();
});

test('test13 - Playwright title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});

test('test14 - Playwright get started', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.getByText('Get started')).toBeVisible();
});

test('test15 - Playwright installation', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await expect(page).toHaveTitle(/Installation/);
});

test('test16 - Playwright writing tests', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/writing-tests');
});

test('test17 - Playwright test reports', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-reporters');
});

test('test18 - Playwright retries', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-retries');
});

test('test19 - Playwright timeouts', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-timeouts');
});

test('test20 - Playwright parallelism', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-parallel');
});

test('test21 - Playwright sharding', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-sharding');
});

test('test22 - Playwright projects', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-projects');
});

test('test23 - Playwright web first assertions', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/best-practices');
});

test('test24 - Playwright screenshots', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/screenshots');
});

test('test25 - Playwright videos', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/videos');
});

test('test26 - Playwright authentication', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/auth');
});

test('test27 - Playwright network mocking', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/mock');
});

test('test28 - Playwright API testing', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/api-testing');
});

test('test29 - Playwright trace viewer', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/trace-viewer');
});

test('test30 - Playwright CI execution', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/ci');
});
