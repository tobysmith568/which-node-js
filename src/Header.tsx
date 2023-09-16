import styled from "@emotion/styled";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Background>
      <Title>
        <span>Which Version of</span>
        <NodeJsLogoWrapper>
          <NodeJsLogo>
            <img src="/node-js-logo.svg" alt="Node.js" width={120} height={72} />
          </NodeJsLogo>
          ?
        </NodeJsLogoWrapper>
      </Title>
      <SubTitle>
        An <i>unofficial</i> guide to which Node.js versions you should be using.
      </SubTitle>
    </Background>
  );
};
export default Header;

const Background = styled.div`
  background-color: #333;
  display: grid;
  text-align: center;
  padding: 0.5em;
`;

const Title = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  flex-wrap: wrap;
`;

const SubTitle = styled.p`
  color: #fff;
`;

const NodeJsLogoWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const NodeJsLogo = styled.span`
  padding-left: 0.5em;
  padding-right: 0.5em;
`;
