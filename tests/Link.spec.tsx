import { render, screen, within } from "@testing-library/react";
import Link from "../src/Link";

describe("Link", () => {
  it("should render one anchor tag", () => {
    render(<Link href="any" />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });

  it("should render the given children within the anchor", () => {
    const children = <div data-testid="children">inner child text</div>;

    render(<Link href="any">{children}</Link>);

    const link = screen.getByRole("link");

    const renderedChildrenByText = within(link).getByText(/inner child text/);
    const renderedChildrenByTestId = within(link).getByTestId("children");

    expect(renderedChildrenByText).toStrictEqual(renderedChildrenByTestId);
    expect(renderedChildrenByText).toBeInTheDocument();
  });

  describe("target", () => {
    it("should not set the target of the anchor when newTab is undefined", () => {
      render(<Link href="any" />);

      const link = screen.getByRole("link");

      expect(link).not.toHaveAttribute("target");
    });

    it("should not set the target of the anchor when newTab is explicitly undefined", () => {
      render(<Link href="any" newTab={undefined} />);

      const link = screen.getByRole("link");

      expect(link).not.toHaveAttribute("target");
    });

    it("should not set the target of the anchor when newTab is false", () => {
      render(<Link href="any" newTab={false} />);

      const link = screen.getByRole("link");

      expect(link).not.toHaveAttribute("target");
    });

    it("should set the target of the anchor to _blank when newTab is true", () => {
      render(<Link href="any" newTab={true} />);

      const link = screen.getByRole("link");

      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  describe("rel", () => {
    it("should not set the rel of the anchor when the href does not being with http", () => {
      render(<Link href="NotBeginningWithHttp" />);

      const link = screen.getByRole("link");

      expect(link).not.toHaveAttribute("rel");
    });

    it("should set the rel of the anchor to 'noopener noreferrer' when the href does being with http", () => {
      render(<Link href="httpSomething" />);

      const link = screen.getByRole("link");

      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("color", () => {
    it("should set the color of the anchor to #ccc when no color is given", () => {
      render(<Link href="any" />);

      const link = screen.getByRole("link");

      expect(link).toHaveStyle({ color: "#ccc" });
    });

    it("should set the color of anchor to the given color when is given", () => {
      const givenColor = "#123456";

      render(<Link href="any" color={givenColor} />);

      const link = screen.getByRole("link");

      expect(link).toHaveStyle({ color: givenColor });
    });
  });
});
