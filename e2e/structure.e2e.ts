import { expect, test } from "@playwright/test";

const paths = ["/", "/faq", "/terms", "/privacy", "/third-party"];

// The markdown documents use a top-level heading for the title and for each of their sections, so
// these pages have several `h1`s of their own. On every page that has any, the site title must not be one.
const pagesWithTheirOwnHeading = ["/terms", "/privacy", "/third-party"];

test.describe("landmarks", () => {
  for (const path of paths) {
    test(`should have exactly one of each landmark on ${path}`, async ({ page }) => {
      await page.goto(path);

      await expect(page.getByRole("banner")).toHaveCount(1);
      await expect(page.getByRole("main")).toHaveCount(1);
      await expect(page.getByRole("contentinfo")).toHaveCount(1);
      await expect(page.getByRole("navigation", { name: "Footer" })).toHaveCount(1);
    });
  }
});

test.describe("the site title", () => {
  test("should be the only h1 on the home page", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("header h1")).toContainText("Which Version of");
  });

  test("should be the only h1 on the FAQ page", async ({ page }) => {
    await page.goto("/faq");

    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("header h1")).toContainText("Which Version of");
  });

  for (const path of pagesWithTheirOwnHeading) {
    test(`should not be an h1 on ${path}`, async ({ page }) => {
      await page.goto(path);

      await expect(page.locator("header h1")).toHaveCount(0);
      await expect(page.locator("main h1").first()).toBeVisible();
    });
  }
});

test("should list the footer links in a list", async ({ page }) => {
  await page.goto("/");

  const footerLinks = page.getByRole("navigation", { name: "Footer" }).getByRole("listitem");

  await expect(footerLinks).toHaveText([
    "Home",
    "FAQ",
    "GitHub",
    "Terms",
    "Privacy",
    "Third-Party Licenses"
  ]);
});

test.describe("the not found page", () => {
  test("should respond with a 404 and a heading", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");

    expect(response?.status()).toBe(404);
    await expect(page.locator("h1")).toHaveText("Page not found");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex,follow");
  });
});

test("should open external links in a new tab", async ({ page }) => {
  await page.goto("/faq");

  const externalLink = page.locator('main a[href="https://nodejs.org/"]').first();

  await expect(externalLink).toHaveAttribute("target", "_blank");
  await expect(externalLink).toHaveAttribute("rel", "nofollow");
});
