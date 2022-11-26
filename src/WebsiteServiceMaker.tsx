import { FC } from "react";
import NodeVersions from "./NodeVersions";
import useVersions from "./data/useVersions";

const WebsiteServiceMaker: FC = () => {
  const versions = useVersions();

  if (!versions) {
    return null;
  }

  const shouldUse = versions.find(v => v.shouldBeUsedForWebsites());
  const canBeUsed = versions.filter(v => v.canBeUsedForWebsites());

  return (
    <>
      <h3>Website/Service Maker</h3>

      <h4>Then you should use</h4>

      <NodeVersions versions={shouldUse === undefined ? [] : [shouldUse]} until={"maintenance"} />

      <h4>But it&apos;s OK if you use</h4>

      <NodeVersions versions={canBeUsed} until={"end"} separatorText="or" />
    </>
  );
};
export default WebsiteServiceMaker;
