import { render, screen } from "@testing-library/react";
import Header from "../src/Header";

describe("Header", () => {
  it("should contain the website title", () => {
    render(<Header />);

    const title = screen.getByRole("heading", {
      name: /What Version of Node\.js \?/
    });

    expect(title).toBeInTheDocument();
  });
});
