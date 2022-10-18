import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { isInTheFuture, isInThePast } from "./dateUtils";
import { getVersions, NodeJsVersion } from "./getVersions";

interface Versions {
  currentVersions: NodeJsVersion[];
  activeVersions: NodeJsVersion[];
  maintenanceVersions: NodeJsVersion[];
  deadVersions: NodeJsVersion[];
}

const hasFetchedAtom = atom<boolean>(false);
const versionsAtom = atom<Versions | null>(null);

const useVersions = (): Versions | null => {
  const [hasFetched, setHasFetched] = useAtom(hasFetchedAtom);
  const [versions, setVersions] = useAtom(versionsAtom);

  useEffect(() => {
    if (hasFetched) {
      return;
    }

    getVersions().then(allVersions => {
      const currentVersions: NodeJsVersion[] = [];
      const activeVersions: NodeJsVersion[] = [];
      const maintenanceVersions: NodeJsVersion[] = [];
      const deadVersions: NodeJsVersion[] = [];

      for (const version of allVersions) {
        if (isCurrent(version)) {
          currentVersions.push(version);
          continue;
        }

        if (isActive(version)) {
          activeVersions.push(version);
          continue;
        }

        if (isMaintenance(version)) {
          maintenanceVersions.push(version);
          continue;
        }

        deadVersions.unshift(version);
      }

      if (currentVersions.length === 0) {
        const mostRecentMaintenance = maintenanceVersions.at(-1);

        if (!mostRecentMaintenance) {
          throw "No current or maintenance versions";
        }

        currentVersions.push(mostRecentMaintenance);
      }

      if (activeVersions.length === 0) {
        const mostRecentCurrent = currentVersions.at(-1);

        if (!mostRecentCurrent) {
          throw "No active, current, or maintenance versions";
        }

        activeVersions.push(mostRecentCurrent);
      }

      setVersions({ currentVersions, activeVersions, maintenanceVersions, deadVersions });
      setHasFetched(true);
    });
  }, [hasFetched, setHasFetched, setVersions]);

  if (!hasFetched) {
    return null;
  }

  return versions;
};
export default useVersions;

const isCurrent = (v: NodeJsVersion) =>
  v.start && isInThePast(v.start) && v.lts && isInTheFuture(v.lts);
const isActive = (v: NodeJsVersion) =>
  v.lts && isInThePast(v.lts) && v.maintenance && isInTheFuture(v.maintenance);
const isMaintenance = (v: NodeJsVersion) =>
  v.maintenance && isInThePast(v.maintenance) && v.end && isInTheFuture(v.end);
