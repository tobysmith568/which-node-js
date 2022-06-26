import { render } from "@testing-library/react";
import Date from "../src/Date";

describe("Date", () => {
  it("should contain the text of the date's locale date string", () => {
    const expectedResult = "the date content";

    const fakeDate = {
      toLocaleDateString: () => expectedResult
    } as unknown as Date;

    const { container } = render(<Date date={fakeDate} />);

    expect(container.textContent).toBe(expectedResult);
  });
});
