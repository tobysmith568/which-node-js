import { describe, expect, it } from "bun:test";
import { getCanonicalUrl } from "./getCanonicalUrl";

const site = new URL("https://which-node.js.org");

describe("getCanonicalUrl", () => {
  it("should use the site root for the home page", () => {
    expect(getCanonicalUrl("/", site)).toBe("https://which-node.js.org/");
  });

  it("should use the site root for the built home page", () => {
    expect(getCanonicalUrl("/index.html", site)).toBe("https://which-node.js.org/");
  });

  it("should leave the pathname of a served page as it is", () => {
    expect(getCanonicalUrl("/faq", site)).toBe("https://which-node.js.org/faq");
  });

  it("should remove the extension from the pathname of a built page", () => {
    expect(getCanonicalUrl("/faq.html", site)).toBe("https://which-node.js.org/faq");
  });
});
