import { render, screen } from "@testing-library/react";
import HorizontalMenu, { MenuItem } from "../src/HorizontalMenu";

describe("HorizontalMenu", () => {
  it("should render the given menu items", () => {
    const menuItems: MenuItem[] = [
      { name: "Item #1", href: "/item1" },
      { name: "Item #2", href: "/item2" },
      { name: "Item #3", href: "/item3" }
    ];

    render(<HorizontalMenu menuItems={menuItems} />);

    const menuItem1 = screen.getByRole("link", { name: /Item #1/ });
    expect(menuItem1).toHaveAttribute("href", "/item1");

    const menuItem2 = screen.getByRole("link", { name: /Item #2/ });
    expect(menuItem2).toHaveAttribute("href", "/item2");

    const menuItem3 = screen.getByRole("link", { name: /Item #3/ });
    expect(menuItem3).toHaveAttribute("href", "/item3");
  });

  it("should support relative urls", () => {
    const relativeUrl = "/item1.com";

    const menuItems: MenuItem[] = [{ name: "Item", href: relativeUrl }];

    render(<HorizontalMenu menuItems={menuItems} />);

    const menuItem1 = screen.getByRole("link", { name: /Item/ });
    expect(menuItem1).toHaveAttribute("href", relativeUrl);
  });

  it("should support absolute urls", () => {
    const absoluteUrl = "https://item1.com";

    const menuItems: MenuItem[] = [{ name: "Item", href: absoluteUrl }];

    render(<HorizontalMenu menuItems={menuItems} />);

    const menuItem1 = screen.getByRole("link", { name: /Item/ });
    expect(menuItem1).toHaveAttribute("href", absoluteUrl);
  });

  it("should support mailto urls", () => {
    const mailToUrl = "mailto:item@1.com";

    const menuItems: MenuItem[] = [{ name: "Item", href: mailToUrl }];

    render(<HorizontalMenu menuItems={menuItems} />);

    const menuItem1 = screen.getByRole("link", { name: /Item/ });
    expect(menuItem1).toHaveAttribute("href", mailToUrl);
  });

  it("should render a divide after all items except the last", () => {
    const menuItems: MenuItem[] = [
      { name: "Item #1", href: "/item1" },
      { name: "Item #2", href: "/item2" },
      { name: "Item #3", href: "/item3" }
    ];

    render(<HorizontalMenu menuItems={menuItems} />);

    const menuItem1 = screen.getByRole("link", { name: /Item #1/ });
    const menuItem1NextItem = menuItem1.nextElementSibling;

    expect(menuItem1NextItem).not.toBeNull();
    expect(menuItem1NextItem).toHaveAttribute("data-testid", "divide");

    const menuItem2 = screen.getByRole("link", { name: /Item #2/ });
    const menuItem2NextItem = menuItem2.nextElementSibling;

    expect(menuItem2NextItem).not.toBeNull();
    expect(menuItem2NextItem).toHaveAttribute("data-testid", "divide");

    const menuItem3 = screen.getByRole("link", { name: /Item #3/ });
    const menuItem3NextItem = menuItem3.nextElementSibling;

    expect(menuItem3NextItem).toBeNull();
  });
});
