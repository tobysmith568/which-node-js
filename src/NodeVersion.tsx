import { FC, useMemo } from "react";
import Date from "./Date";
import { isInThePast } from "./data/dateUtils";

interface Props {
  version: string;
  codename?: string;
  until?: Date;
}

const NodeVersion: FC<Props> = ({ version, codename, until }) => {
  const untilText = useMemo(() => {
    if (!until) {
      return <span>until TBC</span>;
    }

    if (isInThePast(until)) {
      return null;
    }

    return (
      <>
        until <Date date={until} />
      </>
    );
  }, [until]);

  return (
    <div>
      <>
        {version}
        {codename && <> ({codename})</>}
        {untilText && <> {untilText}</>}
      </>
    </div>
  );
};
export default NodeVersion;
