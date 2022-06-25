import { FC } from "react";
import NodeVersions from "./NodeVersions";
import useVersions from "./useVersions";

const LibraryMaintainer: FC = () => {
  const versions = useVersions();

  if (!versions) {
    return null;
  }

  const { currentVersions, activeVersions, maintenanceVersions } = versions;

  return (
    <>
      <h3>Library Maintainer</h3>

      <h4>Then you should use</h4>

      <NodeVersions versions={[currentVersions[0]]} until={"lts"} />

      <h4>But also run your tests against</h4>

      <NodeVersions
        versions={[...activeVersions, ...maintenanceVersions]}
        until={"end"}
        separatorText="and"
      />
    </>
  );
};
export default LibraryMaintainer;
