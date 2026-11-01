import { afterAll, beforeAll, describe, expect, it, setSystemTime } from "bun:test";
import { NodeJsVersion } from "./NodeJsVersion";
import {
  getLibraryMaintainerVersions,
  getOutOfSupportVersions,
  getWebsiteServiceMakerVersions
} from "./versionGroups";

const fakeNow = new Date(Date.UTC(2026, 5, 1, 12));

const past = new Date(Date.UTC(2025, 0, 1));
const future = new Date(Date.UTC(2027, 0, 1));

// Newest first, as getVersions returns them
const current = new NodeJsVersion("current", undefined, past, future, future, future);
const activeLts = new NodeJsVersion("activeLts", undefined, past, past, future, future);
const maintenance = new NodeJsVersion("maintenance", undefined, past, past, past, future);
const endOfLife = new NodeJsVersion("endOfLife", undefined, past, past, past, past);
const notStarted = new NodeJsVersion("notStarted", undefined, future, future, future, future);

const names = (versions: NodeJsVersion[]) => versions.map(v => v.version);

describe("versionGroups", () => {
  beforeAll(() => {
    setSystemTime(fakeNow);
  });

  afterAll(() => {
    setSystemTime();
  });

  describe("getLibraryMaintainerVersions", () => {
    it("should use the current version and test against the supported LTS and maintenance versions", () => {
      const versions = [notStarted, current, activeLts, maintenance, endOfLife];

      const result = getLibraryMaintainerVersions(versions);

      expect(names(result.use)).toEqual(["current"]);
      expect(names(result.alsoTestAgainst)).toEqual(["activeLts", "maintenance"]);
    });

    it("should fall back to the first version to test against when there is no current version", () => {
      const versions = [activeLts, maintenance, endOfLife];

      const result = getLibraryMaintainerVersions(versions);

      expect(names(result.use)).toEqual(["activeLts"]);
    });

    it("should use nothing when no version is suitable", () => {
      const versions = [endOfLife, notStarted];

      const result = getLibraryMaintainerVersions(versions);

      expect(result.use).toEqual([]);
      expect(result.alsoTestAgainst).toEqual([]);
    });
  });

  describe("getWebsiteServiceMakerVersions", () => {
    it("should use the newest LTS version and allow the maintenance versions", () => {
      const versions = [notStarted, current, activeLts, maintenance, endOfLife];

      const result = getWebsiteServiceMakerVersions(versions);

      expect(names(result.use)).toEqual(["activeLts"]);
      expect(names(result.alsoOk)).toEqual(["maintenance"]);
    });

    it("should fall back to the first ok version when no version is LTS", () => {
      const versions = [current, endOfLife];

      const result = getWebsiteServiceMakerVersions(versions);

      expect(result.use).toEqual([]);
      expect(result.alsoOk).toEqual([]);
    });
  });

  describe("getOutOfSupportVersions", () => {
    it("should only return versions which are out of support", () => {
      const versions = [current, endOfLife, activeLts];

      const result = getOutOfSupportVersions(versions);

      expect(names(result)).toEqual(["endOfLife"]);
    });
  });
});
