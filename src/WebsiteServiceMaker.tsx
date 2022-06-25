import { FC } from "react";
import NodeVersions from "./NodeVersions";
import useVersions from "./useVersions";

const WebsiteServiceMaker: FC = () => {
  const versions = useVersions();

  if (!versions) {
    return null;
  }

  const { activeVersions, maintenanceVersions } = versions;

  return (
    <>
      <h3>Website/Service Maker</h3>

      <h4>Then you should use</h4>

      <NodeVersions versions={[activeVersions[0]]} until={"maintenance"} />

      <h4>But it&apos;s OK if you use</h4>

      <NodeVersions
        versions={[...maintenanceVersions, ...activeVersions]}
        until={"end"}
        separatorText="or"
      />
    </>
  );
};
export default WebsiteServiceMaker;
