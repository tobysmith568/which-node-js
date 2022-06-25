import styled from "@emotion/styled";
import { FC, Fragment } from "react";
import { NodeJsVersion, ResponseVersions } from "./getVersions";
import NodeVersion from "./NodeVersion";

interface Props {
  versions: NodeJsVersion[];
  until: keyof ResponseVersions;
  separatorText?: string;
}

const NodeVersions: FC<Props> = ({ versions, until, separatorText }) => {
  return (
    <>
      {versions.map((v, i) => (
        <Fragment key={v.version}>
          <Separator>{i === versions.length - 1 && separatorText}</Separator>
          <NodeVersion version={v.version} codename={v.codename} until={v[until]} />
        </Fragment>
      ))}
    </>
  );
};
export default NodeVersions;

const Separator = styled.div`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;
