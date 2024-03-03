import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { NodeJsVersion } from "./NodeJsVersion";
import { getVersions } from "./getVersions";

const hasFetchedAtom = atom<boolean>(false);
const versionsAtom = atom<NodeJsVersion[] | null>(null);

const useVersions = (): NodeJsVersion[] | null => {
  const [hasFetched, setHasFetched] = useAtom(hasFetchedAtom);
  const [versions, setVersions] = useAtom(versionsAtom);

  useEffect(() => {
    if (hasFetched) {
      return;
    }

    getVersions().then(nodeJsVersions => {
      setVersions(nodeJsVersions.reverse());
      setHasFetched(true);
    });
  }, [hasFetched, setHasFetched, setVersions]);

  if (!hasFetched) {
    return null;
  }

  return versions;
};

export default useVersions;
