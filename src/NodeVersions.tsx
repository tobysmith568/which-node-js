import styled from "@emotion/styled";
import { FC, Fragment } from "react";
import { NodeJsVersion, PhaseName } from "./data/NodeJsVersion";
import NodeVersion from "./NodeVersion";

interface Props {
  versions: NodeJsVersion[];
  until: PhaseName;
  separatorText?: string;
}

const NodeVersions: FC<Props> = ({ versions, until, separatorText }) => {
  if (versions.length === 0) {
    return <div>unknown</div>;
  }

  return (
    <>
      {versions.map((v, i) => (
        <Fragment key={v.version}>
          {versions.length > 1 && (
            <Separator>{i === versions.length - 1 && separatorText}</Separator>
          )}
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
