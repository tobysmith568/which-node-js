const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" });

/** Formats a date as e.g. `22 Apr 2026`, always in UTC so that the output doesn't depend on the build machine */
export const formatDate = (date: Date) => {
  const day = date.getUTCDate();
  const month = monthFormatter.format(date);
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
};
