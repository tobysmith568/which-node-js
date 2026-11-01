import { isInThePast } from "./dateUtils";

export type UntilStatus = "tbc" | "ended" | "upcoming";

/** Whether a phase's end date is unknown, has already passed, or is still to come (today counts as to come) */
export const getUntilStatus = (until: Date | undefined): UntilStatus => {
  if (until === undefined) {
    return "tbc";
  }

  return isInThePast(until) ? "ended" : "upcoming";
};
