// Schedule dates are UTC calendar days, and the site is built in whichever timezone the build runs
// in, so "today" is always the UTC day
const previousMidnightTimestamp = () => {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  return date.getTime();
};

export const isInTheFuture = (input: Date) => {
  return input.getTime() > previousMidnightTimestamp();
};

export const isInThePast = (input: Date) => {
  return input.getTime() < previousMidnightTimestamp();
};
