import { test, expect } from '@playwright/test';

test.describe('EPAM services navigation', () => {
  test('navigate to Client Work via Services menu', async ({ page }) => {
    // 1) Go to EPAM homepage
    await page.goto('https://www.epam.com/');

    // 2) Locate the "Services" header item and hover to reveal the dropdown
    // Use flexible locators with fallbacks: it can be a link or a button depending on the site markup.
    let services = page.getByRole('link', { name: /Services/i }).first();
    if (await services.count() === 0) {
      services = page.getByRole('button', { name: /Services/i }).first();
    }
    await services.hover();

    // 3) Click the "Explore Our Client Work" link inside the Services dropdown
    // Prefer role-based lookup, fall back to text if necessary.
    let explore = page.getByRole('link', { name: /Explore our client work/i });
    if (await explore.count() === 0) {
      explore = page.getByText(/Explore Our Client Work/i);
    }

    // Click and wait for navigation to complete
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle' }),
      explore.click(),
    ]);

    // 4) Verify that the "Client Work" heading/text is visible on the resulting page
    const clientWorkHeading = page.getByRole('heading', { name: /Client Work/i });
    // As a resilient fallback, also check for the raw text anywhere on the page
    await expect(clientWorkHeading).toBeVisible({ timeout: 10000 });
  });
});
