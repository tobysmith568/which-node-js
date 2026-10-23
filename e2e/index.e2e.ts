import { expect, test } from "@playwright/test";

test("should load and render the information from the node.js repo", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("h2", { hasText: "If you're a..." })).toBeVisible();
  await expect(page.locator("h3", { hasText: "Library Maintainer" })).toBeVisible();
  await expect(page.locator("h3", { hasText: "Website/Service Maker" })).toBeVisible();
  await expect(page.locator("h3", { hasText: "No one should use" })).toBeVisible();
});
