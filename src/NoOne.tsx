import { FC } from "react";
import NodeVersions from "./NodeVersions";
import useVersions from "./data/useVersions";

const NoOne: FC = () => {
  const versions = useVersions();

  if (!versions) {
    return null;
  }

  const shouldNotBeUsed = versions.filter(v => v.isOutOfSupport());

  return (
    <>
      <h3>No one should use</h3>

      <NodeVersions versions={shouldNotBeUsed} until={"start"} />
    </>
  );
};
export default NoOne;
