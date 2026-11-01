import { describe, expect, it } from "bun:test";
import { parseVersions } from "./parseVersions";

describe("parseVersions", () => {
  it("should return no versions for an empty schedule", () => {
    const result = parseVersions({});

    expect(result).toEqual([]);
  });

  it("should return the versions in the order they were given", () => {
    const body = {
      v1: { start: "2020-01-01", end: "2021-01-01" },
      v2: { start: "2021-01-01", end: "2022-01-01" }
    };

    const result = parseVersions(body);

    expect(result.map(v => v.version)).toEqual(["v1", "v2"]);
  });

  it("should parse every date and the codename", () => {
    const body = {
      v18: {
        start: "2022-04-19",
        lts: "2022-10-25",
        maintenance: "2023-10-18",
        end: "2025-04-30",
        codename: "Hydrogen"
      }
    };

    const [version] = parseVersions(body);

    expect(version?.codename).toBe("Hydrogen");
    expect(version?.start).toEqual(new Date("2022-04-19"));
    expect(version?.lts).toEqual(new Date("2022-10-25"));
    expect(version?.maintenance).toEqual(new Date("2023-10-18"));
    expect(version?.end).toEqual(new Date("2025-04-30"));
  });

  it("should leave optional phases and the codename undefined when they are missing", () => {
    const body = { v19: { start: "2022-10-18", end: "2023-06-01" } };

    const [version] = parseVersions(body);

    expect(version?.codename).toBeUndefined();
    expect(version?.lts).toBeUndefined();
    expect(version?.maintenance).toBeUndefined();
  });

  it("should throw when the body is not a record of versions", () => {
    expect(() => parseVersions("not a schedule")).toThrow();
  });

  it("should tolerate a version which has no dates yet", () => {
    const [version] = parseVersions({ v1: { codename: "No dates" } });

    expect(version?.start).toBeUndefined();
    expect(version?.end).toBeUndefined();
  });
});
