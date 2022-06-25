import { FC } from "react";
import NodeVersions from "./NodeVersions";
import useVersions from "./useVersions";

const NoOne: FC = () => {
  const versions = useVersions();

  if (!versions) {
    return null;
  }

  const { deadVersions } = versions;

  return (
    <>
      <h3>No one should use</h3>

      <NodeVersions versions={deadVersions} until={"start"} />
    </>
  );
};
export default NoOne;
