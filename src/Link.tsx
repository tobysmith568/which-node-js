import styled from "@emotion/styled";
import NextLink from "next/link";
import { FC, PropsWithChildren, useMemo } from "react";

interface Props {
  href: string;
  newTab?: boolean;
  color?: string;
  hoverColor?: string;
}

const Link: FC<PropsWithChildren<Props>> = ({ children, href, newTab, color, hoverColor }) => {
  color = color ?? "#ccc";
  hoverColor = hoverColor ?? "#fff";

  const target = useMemo(() => (newTab ? "_blank" : undefined), [newTab]);
  const rel = useMemo(() => (href.startsWith("http") ? "noopener noreferrer" : undefined), [href]);

  return (
    <NextLink href={href} passHref legacyBehavior>
      <MenuAnchor target={target} rel={rel} color={color} hoverColor={hoverColor}>
        {children}
      </MenuAnchor>
    </NextLink>
  );
};
export default Link;

interface MenuAnchorProps {
  color: string;
  hoverColor: string;
}

const MenuAnchor = styled.a<MenuAnchorProps>`
  color: ${props => props.color};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${props => props.hoverColor};
  }
`;
