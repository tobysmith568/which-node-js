import { isInTheFuture, isInThePast } from "../src/dateUtils";

const fakeNow = new Date(2022, 7, 26, 1, 2, 3);

const oneSecondInMs = 1000;

describe("dateUtils", () => {
  beforeAll(() => {
    jest.useFakeTimers({
      now: fakeNow
    });
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe("isInTheFuture", () => {
    it("should return true when given a date that is after now", () => {
      const oneSecondInTheFuture = new Date(+fakeNow + oneSecondInMs);

      const result = isInTheFuture(oneSecondInTheFuture);

      expect(result).toBe(true);
    });

    it("should return false when given a date that is before now", () => {
      const oneSecondInThePast = new Date(+fakeNow - oneSecondInMs);

      const result = isInTheFuture(oneSecondInThePast);

      expect(result).toBe(false);
    });

    it("should return false when given a date that is exactly now", () => {
      const result = isInTheFuture(fakeNow);

      expect(result).toBe(false);
    });
  });

  describe("isInThePast", () => {
    it("should return true when given a date that is before now", () => {
      const oneSecondInThePast = new Date(+fakeNow - oneSecondInMs);

      const result = isInThePast(oneSecondInThePast);

      expect(result).toBe(true);
    });

    it("should return false when given a date that is after now", () => {
      const oneSecondInTheFuture = new Date(+fakeNow + oneSecondInMs);

      const result = isInThePast(oneSecondInTheFuture);

      expect(result).toBe(false);
    });

    it("should return false when given a date that is exactly now", () => {
      const result = isInThePast(fakeNow);

      expect(result).toBe(false);
    });
  });
});
