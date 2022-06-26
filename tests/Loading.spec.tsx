import { render } from "@testing-library/react";
import Loading from "../src/Loading";

describe("Loading", () => {
  it("should show the text 'Loading...'", () => {
    const { container } = render(<Loading />);

    expect(container.textContent).toBe("Loading...");
  });
});
