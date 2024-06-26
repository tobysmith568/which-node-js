import { FC } from "react";
import NodeVersions from "./NodeVersions";
import useVersions from "./data/useVersions";

const WebsiteServiceMaker: FC = () => {
  const versions = useVersions();

  if (!versions) {
    return null;
  }

  const canBeUsed = versions.filter(v => v.canBeUsedForWebsites());
  const shouldUse = versions.find(v => v.shouldBeUsedForWebsites()) ?? canBeUsed[0];

  return (
    <>
      <h3>Website/Service Maker</h3>

      <h4>Then you should use</h4>

      <NodeVersions versions={shouldUse === undefined ? [] : [shouldUse]} until={"maintenance"} />

      {canBeUsed.length > 0 && (
        <>
          <h4>But it&apos;s OK if you use</h4>

          <NodeVersions versions={canBeUsed} until={"end"} separatorText="or" />
        </>
      )}
    </>
  );
};
export default WebsiteServiceMaker;
