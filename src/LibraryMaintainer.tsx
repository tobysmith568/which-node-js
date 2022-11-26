import { FC } from "react";
import NodeVersions from "./NodeVersions";
import useVersions from "./data/useVersions";

const LibraryMaintainer: FC = () => {
  const versions = useVersions();

  if (!versions) {
    return null;
  }

  const shouldUse = versions.find(v => v.shouldBeUsedForLibraries());
  const shouldRunTestsAgainst = versions.filter(v => v.shouldBeUsedForLibraryTests());

  return (
    <>
      <h3>Library Maintainer</h3>

      <h4>Then you should use</h4>

      <NodeVersions versions={shouldUse === undefined ? [] : [shouldUse]} until={"lts"} />

      <h4>But also run your tests against</h4>

      <NodeVersions versions={shouldRunTestsAgainst} until={"end"} separatorText="and" />
    </>
  );
};
export default LibraryMaintainer;
