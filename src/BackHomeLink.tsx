import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";

const BackHomeLink: FC = () => (
  <Link href="/" passHref legacyBehavior>
    <Anchor>
      <ContentWrapper>
        <BackArrow />
        Home
      </ContentWrapper>
    </Anchor>
  </Link>
);
export default BackHomeLink;

const BackArrow: FC = () => (
  <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>Arrow Back</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="M244 400L100 256l144-144M120 256h292"
    />
  </svg>
);

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
    opacity: 0;
  }

  &:hover {
    ::after {
      opacity: 1;
    }
  }
`;

const Anchor = styled.a`
  color: black;
  text-decoration: none !important;
  font-weight: 700;
`;
