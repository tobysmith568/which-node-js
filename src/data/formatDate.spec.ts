import { describe, expect, it } from "bun:test";
import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("should format as day, abbreviated month, and year", () => {
    const date = new Date(Date.UTC(2026, 3, 22));

    const result = formatDate(date);

    expect(result).toBe("22 Apr 2026");
  });

  it("should not pad single-digit days", () => {
    const date = new Date(Date.UTC(2026, 0, 5));

    const result = formatDate(date);

    expect(result).toBe("5 Jan 2026");
  });

  it("should abbreviate September to three letters", () => {
    const date = new Date(Date.UTC(2026, 8, 1));

    const result = formatDate(date);

    expect(result).toBe("1 Sep 2026");
  });

  it("should use the UTC day regardless of the time within it", () => {
    const date = new Date(Date.UTC(2026, 11, 31, 23, 59, 59));

    const result = formatDate(date);

    expect(result).toBe("31 Dec 2026");
  });
});
