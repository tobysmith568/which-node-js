import { render, screen } from "@testing-library/react";
import BackHomeLink from "../src/BackHomeLink";

describe("BackHomeLink", () => {
  it("should contain one link element", () => {
    render(<BackHomeLink />);

    const homeLink = screen.getByRole("link", {});

    expect(homeLink).toBeInTheDocument();
  });

  it("should contain the text 'Home'", () => {
    render(<BackHomeLink />);

    const homeLink = screen.getByRole("link", {
      name: /.*Home.*/
    });

    expect(homeLink).toBeInTheDocument();
  });

  it("should route to the index", () => {
    render(<BackHomeLink />);

    const homeLink = screen.getByRole("link");

    expect(homeLink).toHaveAttribute("href", "/");
  });
});
