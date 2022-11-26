import { isInTheFuture, isInThePast } from "../../src/data/dateUtils";

const fakeNow = new Date(2022, 7, 26, 1, 2, 3);
const fakeLastMidnight = new Date(2022, 7, 26, 0, 0, 0);

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
    it("should return true when given a date that is after midnight last night", () => {
      const oneSecondIntoToday = new Date(+fakeLastMidnight + oneSecondInMs);

      const result = isInTheFuture(oneSecondIntoToday);

      expect(result).toBe(true);
    });

    it("should return false when given a date that is before midnight last night", () => {
      const oneSecondInThePast = new Date(+fakeLastMidnight - oneSecondInMs);

      const result = isInTheFuture(oneSecondInThePast);

      expect(result).toBe(false);
    });

    it("should return false when given a date that is exactly midnight last night", () => {
      const result = isInTheFuture(fakeLastMidnight);

      expect(result).toBe(false);
    });
  });

  describe("isInThePast", () => {
    it("should return true when given a date that is before midnight last night", () => {
      const oneSecondInThePast = new Date(+fakeLastMidnight - oneSecondInMs);

      const result = isInThePast(oneSecondInThePast);

      expect(result).toBe(true);
    });

    it("should return false when given a date that is after midnight last night", () => {
      const oneSecondInTheFuture = new Date(+fakeLastMidnight + oneSecondInMs);

      const result = isInThePast(oneSecondInTheFuture);

      expect(result).toBe(false);
    });

    it("should return false when given a date that is exactly midnight last night", () => {
      const result = isInThePast(fakeLastMidnight);

      expect(result).toBe(false);
    });
  });
});
