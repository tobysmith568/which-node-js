import { FC, useMemo } from "react";
import Date from "./Date";
import { isInTheFuture, isInThePast } from "./dateUtils";

interface Props {
  version: string;
  codename?: string;
  until?: Date;
}

const NodeVersion: FC<Props> = ({ version, codename, until }) => {
  const untilText = useMemo(() => {
    if (!until) {
      return null;
    }

    if (isInTheFuture(until)) {
      return (
        <>
          until <Date date={until} />
        </>
      );
    }

    if (isInThePast(until)) {
      return <>ever</>;
    }

    return null;
  }, [until]);

  return (
    <div>
      <>
        {version} {codename && <>({codename}) </>}
        {untilText}
      </>
    </div>
  );
};
export default NodeVersion;
