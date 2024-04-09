import { render } from "@testing-library/react";
import NodeVersion from "../src/NodeVersion";

const fakeNow = new Date(2022, 7, 26, 1, 2, 3);

const oneDayInMs = 1000 * 60 * 60 * 24;

describe("NodeVersion", () => {
  beforeAll(() => {
    jest.useFakeTimers({
      now: fakeNow
    });
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should contain the given version", () => {
    const version = "the given version";

    const { container } = render(<NodeVersion version={version} />);

    expect(container.textContent).toContain(version);
  });

  it("should contain the given codename after the version", () => {
    const version = "the given version";
    const codename = "the given codename";

    const { container } = render(<NodeVersion version={version} codename={codename} />);

    expect(container.textContent).toContain(`${version} (${codename})`);
  });

  it("should contain 'until TBC' if the until is undefined", () => {
    const version = "the given version";

    const { container } = render(<NodeVersion version={version} />);

    expect(container.textContent).toContain("until TBC");
  });

  it("should contain the until if it is given and is in the future", () => {
    const version = "the given version";
    const until = new Date(+fakeNow + oneDayInMs);
    const untilToString = until.toLocaleDateString();

    const { container } = render(<NodeVersion version={version} until={until} />);

    expect(container.textContent).toContain(`until ${untilToString}`);
  });

  it("should contain the until if it is given and is exactly now", () => {
    const version = "the given version";
    const fakeNowToString = fakeNow.toLocaleDateString();

    const { container } = render(<NodeVersion version={version} until={fakeNow} />);

    expect(container.textContent).toContain(`until ${fakeNowToString}`);
  });

  it("should only contain the version if the until is given and is in the past", () => {
    const version = "the given version";
    const until = new Date(+fakeNow - oneDayInMs);

    const { container } = render(<NodeVersion version={version} until={until} />);

    expect(container.textContent).toBe(version);
  });
});
