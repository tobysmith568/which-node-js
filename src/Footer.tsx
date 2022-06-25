import styled from "@emotion/styled";
import { FC } from "react";
import HorizontalMenu, { MenuItem } from "./HorizontalMenu";
import Link from "./Link";

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "FAQ", href: "/faq" },
  { name: "GitHub", href: "https://github.com/tobysmith568/what-node-js", newTab: true },
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
  { name: "Third-Party Licenses", href: "/third-party" }
];

const Footer: FC = () => {
  return (
    <Background>
      <HorizontalMenu menuItems={menuItems} />
      <p>
        This website is unofficial. It is not related to, or endorsed by,{" "}
        <Link href="https://nodejs.org" newTab>
          Node.js
        </Link>{" "}
        or{" "}
        <Link href="https://openjsf.org" newTab>
          the OpenJS Foundation
        </Link>
        .
        <br />
        This website does not contain legal or security-related advice.
      </p>
      <p>
        Made by <Link href="https://tobysmith.uk">Toby Smith</Link> with <Heart>❤</Heart> for
        Node.js and open-source!
      </p>
    </Background>
  );
};
export default Footer;

const Background = styled.div`
  background-color: #333;
  color: #fff;
  padding: 0.5em;
  min-height: 3em;
`;

const Heart = styled.span`
  color: #f00;
`;
