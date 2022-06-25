import styled from "@emotion/styled";
import NextLink from "next/link";
import { FC, PropsWithChildren, useMemo } from "react";

interface Props {
  href: string;
  newTab?: boolean;
}

const Link: FC<PropsWithChildren<Props>> = ({ children, href, newTab }) => {
  const target = useMemo(() => (newTab ? "_blank" : undefined), [newTab]);
  const rel = useMemo(() => (href.startsWith("http") ? "noopener noreferrer" : undefined), [href]);

  return (
    <NextLink href={href} passHref>
      <MenuAnchor target={target} rel={rel}>
        {children}
      </MenuAnchor>
    </NextLink>
  );
};
export default Link;

const MenuAnchor = styled.a`
  color: #ccc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;
