import { expect, test } from "@playwright/test";

test("should load and render the third-party licenses information", async ({ page }) => {
  await page.goto("/third-party");

  const heading = page.locator("h4", {
    hasText: "This page was generated using the generate-license-file npm package."
  });
  await expect(heading).toBeVisible();
});
