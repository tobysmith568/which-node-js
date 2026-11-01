import type { NodeJsVersion } from "./NodeJsVersion";
import { parseVersions } from "./parseVersions";

const scheduleUrl = "https://raw.githubusercontent.com/nodejs/Release/main/schedule.json";

// Every page needs the versions, but the schedule only needs fetching once per build
let versionsPromise: Promise<NodeJsVersion[]> | undefined;

/** Gets the versions from the Node.js release schedule, newest first. Rejects if the schedule can't be fetched or is invalid. */
export const getVersions = () => {
  versionsPromise ??= fetchVersions();
  return versionsPromise;
};

const fetchVersions = async () => {
  const response = await fetch(scheduleUrl);

  if (!response.ok) {
    throw new Error(`Invalid response from GitHub: ${response.status} ${response.statusText}`);
  }

  const responseBody: unknown = await response.json();
  const versions = parseVersions(responseBody);

  return versions.reverse();
};
