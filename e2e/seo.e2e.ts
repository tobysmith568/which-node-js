import { expect, test } from "@playwright/test";

const siteUrl = "https://which-node.js.org";

interface PageExpectation {
  path: string;
  canonicalPath: string;
  title: string;
  description: string;
  robots: string;
}

const pages: PageExpectation[] = [
  {
    path: "/",
    canonicalPath: "/",
    title: "Which Version of Node.js?",
    description: "Which version of Node.js should you be using?",
    robots: "index,follow"
  },
  {
    path: "/faq",
    canonicalPath: "/faq",
    title: "FAQ",
    description: "Frequently Asked Questions about Which Version of Node.js?",
    robots: "index,follow"
  },
  {
    path: "/terms",
    canonicalPath: "/terms",
    title: "Terms & Conditions",
    description: "Terms & Conditions for Which Version of Node.js?",
    robots: "noindex,follow"
  },
  {
    path: "/privacy",
    canonicalPath: "/privacy",
    title: "Privacy Policy",
    description: "Privacy Policy for Which Version of Node.js?",
    robots: "noindex,follow"
  },
  {
    path: "/third-party",
    canonicalPath: "/third-party",
    title: "Third-Party Libraries",
    description: "Third-Party Libraries used by Which Version of Node.js?",
    robots: "noindex,follow"
  }
];

const noIndexPaths = ["/terms", "/privacy", "/third-party"];

test.describe("page metadata", () => {
  for (const { path, canonicalPath, title, description, robots } of pages) {
    test(`should set the metadata of ${path}`, async ({ page }) => {
      await page.goto(path);

      const canonicalUrl = siteUrl + canonicalPath;

      await expect(page).toHaveTitle(title);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        description
      );
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", robots);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonicalUrl);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", title);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
        "content",
        description
      );
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        "content",
        canonicalUrl
      );
      await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "website");
    });
  }
});

test.describe("sitemap", () => {
  test("should list the indexable pages", async ({ request }) => {
    const response = await request.get("/sitemap-0.xml");
    const sitemap = await response.text();

    expect(response.ok()).toBe(true);
    expect(sitemap).toContain(`<loc>${siteUrl}/</loc>`);
    expect(sitemap).toContain(`<loc>${siteUrl}/faq</loc>`);
  });

  test("should not list the pages which are marked as noindex", async ({ request }) => {
    const response = await request.get("/sitemap-0.xml");
    const sitemap = await response.text();

    for (const path of noIndexPaths) {
      expect(sitemap).not.toContain(path);
    }
    expect(sitemap).not.toContain("404");
  });

  test("should be advertised by the index", async ({ request }) => {
    const response = await request.get("/sitemap-index.xml");
    const sitemapIndex = await response.text();

    expect(response.ok()).toBe(true);
    expect(sitemapIndex).toContain(`<loc>${siteUrl}/sitemap-0.xml</loc>`);
  });
});

test.describe("robots.txt", () => {
  test("should point to the sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt");
    const robots = await response.text();

    expect(response.ok()).toBe(true);
    expect(robots).toContain(`Sitemap: ${siteUrl}/sitemap-index.xml`);
  });

  test("should not block any page, so that crawlers can see their noindex", async ({ request }) => {
    const response = await request.get("/robots.txt");
    const robots = await response.text();

    expect(robots).not.toMatch(/^Disallow:\s*\S/m);
  });
});
