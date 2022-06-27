import styled from "@emotion/styled";
import { FC, Fragment } from "react";
import Link from "./Link";

export interface MenuItem {
  name: string;
  href: string;
  newTab?: boolean;
}

interface Props {
  menuItems: MenuItem[];
}

const HorizontalMenu: FC<Props> = ({ menuItems }) => {
  return (
    <Menu>
      {menuItems.map(({ name, href, newTab }, i) => (
        <Fragment key={i}>
          {i > 0 && <Divide data-testid="divide" />}
          <Link href={href} newTab={newTab}>
            {name}
          </Link>
        </Fragment>
      ))}
    </Menu>
  );
};
export default HorizontalMenu;

const Menu = styled.div`
  margin-top: 0.8em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Divide = styled.span`
  margin-left: 0.7em;
  margin-right: 0.7em;

  ::before {
    content: "|";
  }
`;
