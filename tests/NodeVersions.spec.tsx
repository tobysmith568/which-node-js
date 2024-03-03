import { render, screen } from "@testing-library/react";
import NodeVersions from "../src/NodeVersions";
import { NodeJsVersion } from "../src/data/NodeJsVersion";

describe("NodeVersions", () => {
  it("should render 'unknown' if no versions are passed in", () => {
    const versions: NodeJsVersion[] = [];

    render(<NodeVersions versions={versions} until="end" />);

    const unknown = screen.getByText(/unknown/);
    expect(unknown).toBeInTheDocument();
  });

  it("should render each version", () => {
    const versions: NodeJsVersion[] = [
      { version: "version 1" } as NodeJsVersion,
      { version: "version 2" } as NodeJsVersion,
      { version: "version 3" } as NodeJsVersion
    ];

    render(<NodeVersions versions={versions} until="end" />);

    const version1 = screen.getByText(/version 1/);
    expect(version1).toBeInTheDocument();

    const version2 = screen.getByText(/version 2/);
    expect(version2).toBeInTheDocument();

    const version3 = screen.getByText(/version 3/);
    expect(version3).toBeInTheDocument();
  });

  it("should render the separator text once", async () => {
    const separatorText = "separatorText";
    const versions: NodeJsVersion[] = [
      { version: "version 1" } as NodeJsVersion,
      { version: "version 2" } as NodeJsVersion,
      { version: "version 3" } as NodeJsVersion
    ];

    render(<NodeVersions versions={versions} until="end" separatorText={separatorText} />);

    const separatorTexts = await screen.findAllByText(separatorText);

    expect(separatorTexts).toHaveLength(1);
  });

  it("should render the separator text before the final version", () => {
    const separatorText = "separatorText";

    const versions: NodeJsVersion[] = [
      { version: "version 1" } as NodeJsVersion,
      { version: "version 2" } as NodeJsVersion,
      { version: "version 3" } as NodeJsVersion
    ];

    render(<NodeVersions versions={versions} until="end" separatorText={separatorText} />);

    const renderedSeparatorText = screen.getByText(separatorText);

    // Needed because this test tests the positions of HTML nodes relative to each other
    /* eslint-disable testing-library/no-node-access */
    const previousSibling = renderedSeparatorText.previousElementSibling;
    expect(previousSibling?.textContent).toContain("version 2");

    const nextSibling = renderedSeparatorText.nextElementSibling;
    expect(nextSibling?.textContent).toContain("version 3");
    /* eslint-enable testing-library/no-node-access */
  });
});
