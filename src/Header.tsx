import styled from "@emotion/styled";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Background>
      <Title>
        What Version of
        <NodeJsLogo>
          <img src="/node-js-logo.svg" alt="Node.js" width={120} height={72} />
        </NodeJsLogo>
        ?
      </Title>
      <SubTitle>
        An <i>unofficial</i> guide to what Node.js versions you should be using.
      </SubTitle>
    </Background>
  );
};
export default Header;

const Background = styled.div`
  background-color: #333;
  display: grid;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
`;

const SubTitle = styled.p`
  color: #fff;
`;

const NodeJsLogo = styled.span`
  padding-left: 0.5em;
  padding-right: 0.5em;
`;
