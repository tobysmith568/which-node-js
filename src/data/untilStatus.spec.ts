import { afterAll, beforeAll, describe, expect, it, setSystemTime } from "bun:test";
import { getUntilStatus } from "./untilStatus";

const fakeNow = new Date(Date.UTC(2022, 7, 26, 1, 2, 3));

const oneDayInMs = 1000 * 60 * 60 * 24;

describe("getUntilStatus", () => {
  beforeAll(() => {
    setSystemTime(fakeNow);
  });

  afterAll(() => {
    setSystemTime();
  });

  it("should be 'tbc' if the date is undefined", () => {
    expect(getUntilStatus(undefined)).toBe("tbc");
  });

  it("should be 'upcoming' if the date is in the future", () => {
    const until = new Date(+fakeNow + oneDayInMs);

    expect(getUntilStatus(until)).toBe("upcoming");
  });

  it("should be 'upcoming' if the date is exactly now", () => {
    expect(getUntilStatus(fakeNow)).toBe("upcoming");
  });

  it("should be 'ended' if the date is in the past", () => {
    const until = new Date(+fakeNow - oneDayInMs);

    expect(getUntilStatus(until)).toBe("ended");
  });
});
