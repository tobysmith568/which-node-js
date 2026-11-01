import type { NodeJsVersion } from "./NodeJsVersion";

export interface LibraryMaintainerVersions {
  /** The one version library maintainers should be developing against, if there is one */
  use: NodeJsVersion[];
  /** Other supported versions that library tests should also run against */
  alsoTestAgainst: NodeJsVersion[];
}

export interface WebsiteServiceMakerVersions {
  /** The one version that website/service makers should be using, if there is one */
  use: NodeJsVersion[];
  /** Other versions that are still fine to be using */
  alsoOk: NodeJsVersion[];
}

export const getLibraryMaintainerVersions = (
  versions: NodeJsVersion[]
): LibraryMaintainerVersions => {
  const alsoTestAgainst = versions.filter(v => v.shouldBeUsedForLibraryTests());
  const shouldUse = versions.find(v => v.shouldBeUsedForLibraries()) ?? alsoTestAgainst[0];

  return { use: shouldUse === undefined ? [] : [shouldUse], alsoTestAgainst };
};

export const getWebsiteServiceMakerVersions = (
  versions: NodeJsVersion[]
): WebsiteServiceMakerVersions => {
  const alsoOk = versions.filter(v => v.canBeUsedForWebsites());
  const shouldUse = versions.find(v => v.shouldBeUsedForWebsites()) ?? alsoOk[0];

  return { use: shouldUse === undefined ? [] : [shouldUse], alsoOk };
};

export const getOutOfSupportVersions = (versions: NodeJsVersion[]) =>
  versions.filter(v => v.isOutOfSupport());
