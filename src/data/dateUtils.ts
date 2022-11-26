const previousMidnightTimestamp = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime();
};

export const isInTheFuture = (input: Date) => {
  return input.getTime() > previousMidnightTimestamp();
};

export const isInThePast = (input: Date) => {
  return input.getTime() < previousMidnightTimestamp();
};
