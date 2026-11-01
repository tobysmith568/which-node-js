import { describe, expect, it } from "bun:test";
import { getPackageUrl } from "./getPackageUrl";

describe("getPackageUrl", () => {
  it("should link to the version of an unscoped package", () => {
    const result = getPackageUrl("zod@4.1.3");

    expect(result).toBe("https://www.npmjs.com/package/zod/v/4.1.3");
  });

  it("should link to the version of a scoped package", () => {
    const result = getPackageUrl("@astrojs/sitemap@3.7.4");

    expect(result).toBe("https://www.npmjs.com/package/@astrojs/sitemap/v/3.7.4");
  });
});
