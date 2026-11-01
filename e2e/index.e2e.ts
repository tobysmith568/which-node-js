import { expect, test } from "@playwright/test";

test("should render the information from the node.js repo", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("h2", { hasText: "If you're a..." })).toBeVisible();
  await expect(page.locator("h3", { hasText: "Library Maintainer" })).toBeVisible();
  await expect(page.locator("h3", { hasText: "Website/Service Maker" })).toBeVisible();
  await expect(page.locator("h3", { hasText: "No one should use" })).toBeVisible();
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("should render the information from the node.js repo in the page itself", async ({
    page
  }) => {
    await page.goto("/");

    await expect(page.locator("h3", { hasText: "Library Maintainer" })).toBeVisible();
    await expect(page.locator("h3", { hasText: "Website/Service Maker" })).toBeVisible();
    await expect(page.locator("h3", { hasText: "No one should use" })).toBeVisible();
    await expect(page.getByText("Loading...")).toHaveCount(0);
  });
});

test("should show dates as day, abbreviated month, and year", async ({ page }) => {
  await page.goto("/");

  const dates = page.locator("time");
  await expect(dates.first()).toHaveText(/^\d{1,2} [A-Z][a-z]{2} \d{4}$/);
});

test("should give every date a machine-readable value", async ({ page }) => {
  await page.goto("/");

  const dateTimes = await page
    .locator("time")
    .evaluateAll(times => times.map(time => time.getAttribute("datetime")));

  expect(dateTimes.length).toBeGreaterThan(0);
  for (const dateTime of dateTimes) {
    expect(dateTime).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  }
});
