import { describe, expect, it } from "bun:test";
import { markdownToHtml } from "satteri";
import { externalLinks } from "./externalLinks";

const render = (markdown: string) => {
  const { html } = markdownToHtml(markdown, { hastPlugins: [externalLinks] });
  return html;
};

describe("externalLinks", () => {
  it("should open links to other websites in a new tab and mark them nofollow", () => {
    const html = render("[Node.js](https://nodejs.org/)");

    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="nofollow"');
  });

  it("should mark links to this website nofollow, but not open them in a new tab", () => {
    const html = render("[Home](https://which-node.js.org)");

    expect(html).not.toContain("target=");
    expect(html).toContain('rel="nofollow"');
  });

  it("should leave relative links alone", () => {
    const html = render("[FAQ](/faq)");

    expect(html).not.toContain("target=");
    expect(html).not.toContain("rel=");
  });

  it("should leave non-http links alone", () => {
    const html = render("[Email](mailto:someone@example.com)");

    expect(html).not.toContain("target=");
    expect(html).not.toContain("rel=");
  });
});
