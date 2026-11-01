import { afterAll, beforeAll, describe, expect, it, setSystemTime } from "bun:test";
import { NodeJsVersion } from "./NodeJsVersion";

const fakeNow = new Date(Date.UTC(2026, 5, 1, 12));

const past = new Date(Date.UTC(2025, 0, 1));
const future = new Date(Date.UTC(2027, 0, 1));

interface Phases {
  start?: Date;
  lts?: Date;
  maintenance?: Date;
  end?: Date;
}

const createVersion = ({ start, lts, maintenance, end }: Phases) =>
  new NodeJsVersion("v1", undefined, start, lts, maintenance, end);

describe("NodeJsVersion", () => {
  beforeAll(() => {
    setSystemTime(fakeNow);
  });

  afterAll(() => {
    setSystemTime();
  });

  describe("a version which has not started yet", () => {
    const version = createVersion({ start: future, lts: future, maintenance: future, end: future });

    it("should be not yet current and not yet out of support", () => {
      expect(version.notYetCurrent()).toBe(true);
      expect(version.hasStartedBeingCurrent()).toBe(false);
      expect(version.notYetOutOfSupport()).toBe(true);
      expect(version.isOutOfSupport()).toBe(false);
    });

    it("should not be recommended for anything", () => {
      expect(version.shouldBeUsedForLibraries()).toBe(false);
      expect(version.shouldBeUsedForLibraryTests()).toBe(false);
      expect(version.shouldBeUsedForWebsites()).toBe(false);
      expect(version.canBeUsedForWebsites()).toBe(false);
    });
  });

  describe("a current version which will become LTS", () => {
    const version = createVersion({ start: past, lts: future, maintenance: future, end: future });

    it("should be used for libraries only", () => {
      expect(version.shouldBeUsedForLibraries()).toBe(true);
      expect(version.shouldBeUsedForLibraryTests()).toBe(false);
      expect(version.shouldBeUsedForWebsites()).toBe(false);
      expect(version.canBeUsedForWebsites()).toBe(false);
    });
  });

  describe("a current version which will never be LTS", () => {
    const version = createVersion({ start: past, end: future });

    it("should not yet be LTS or maintenance", () => {
      expect(version.notYetLts()).toBe(true);
      expect(version.notYetMaintenance()).toBe(true);
    });

    it("should be used for libraries only", () => {
      expect(version.shouldBeUsedForLibraries()).toBe(true);
      expect(version.shouldBeUsedForLibraryTests()).toBe(false);
      expect(version.shouldBeUsedForWebsites()).toBe(false);
      expect(version.canBeUsedForWebsites()).toBe(false);
    });
  });

  describe("an active LTS version", () => {
    const version = createVersion({ start: past, lts: past, maintenance: future, end: future });

    it("should have started being LTS", () => {
      expect(version.hasStartedBeingLts()).toBe(true);
      expect(version.notYetLts()).toBe(false);
    });

    it("should be used for websites and library tests, but not libraries", () => {
      expect(version.shouldBeUsedForLibraries()).toBe(false);
      expect(version.shouldBeUsedForLibraryTests()).toBe(true);
      expect(version.shouldBeUsedForWebsites()).toBe(true);
    });

    it("should not be merely 'ok' for websites until it enters maintenance", () => {
      expect(version.canBeUsedForWebsites()).toBe(false);
    });
  });

  describe("a version in maintenance", () => {
    const version = createVersion({ start: past, lts: past, maintenance: past, end: future });

    it("should have started being maintenance", () => {
      expect(version.hasStartedBeingMaintenance()).toBe(true);
      expect(version.notYetMaintenance()).toBe(false);
    });

    it("should be ok for websites and used for library tests", () => {
      expect(version.canBeUsedForWebsites()).toBe(true);
      expect(version.shouldBeUsedForLibraryTests()).toBe(true);
      expect(version.shouldBeUsedForLibraries()).toBe(false);
    });
  });

  describe("a version which is out of support", () => {
    const version = createVersion({ start: past, lts: past, maintenance: past, end: past });

    it("should be out of support", () => {
      expect(version.isOutOfSupport()).toBe(true);
      expect(version.notYetOutOfSupport()).toBe(false);
    });

    it("should not be recommended for anything", () => {
      expect(version.shouldBeUsedForLibraries()).toBe(false);
      expect(version.shouldBeUsedForLibraryTests()).toBe(false);
      expect(version.shouldBeUsedForWebsites()).toBe(false);
      expect(version.canBeUsedForWebsites()).toBe(false);
    });
  });

  describe("a version with no end date", () => {
    const version = createVersion({ start: past });

    it("should be neither out of support nor not yet out of support", () => {
      expect(version.isOutOfSupport()).toBe(false);
      expect(version.notYetOutOfSupport()).toBe(false);
    });
  });
});
