import { render, screen } from "@testing-library/react";
import { NodeJsVersion } from "../src/getVersions";
import NodeVersions from "../src/NodeVersions";

describe("NodeVersions", () => {
  it("should render each version", () => {
    const versions: NodeJsVersion[] = [
      { version: "version 1" },
      { version: "version 2" },
      { version: "version 3" }
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
      { version: "version 1" },
      { version: "version 2" },
      { version: "version 3" }
    ];

    render(<NodeVersions versions={versions} until="end" separatorText={separatorText} />);

    const separatorTexts = await screen.findAllByText(separatorText);

    expect(separatorTexts.length).toBe(1);
  });

  it("should render the separator text before the final version", () => {
    const separatorText = "separatorText";

    const versions: NodeJsVersion[] = [
      { version: "version 1" },
      { version: "version 2" },
      { version: "version 3" }
    ];

    render(<NodeVersions versions={versions} until="end" separatorText={separatorText} />);

    const renderedSeparatorText = screen.getByText(separatorText);

    const previousSibling = renderedSeparatorText.previousElementSibling;
    expect(previousSibling?.textContent).toBe("version 2");

    const nextSibling = renderedSeparatorText.nextElementSibling;
    expect(nextSibling?.textContent).toBe("version 3");
  });
});
