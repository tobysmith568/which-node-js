import { render as rtlRender, screen } from "@testing-library/react";
import WebsiteServiceMaker from "../src/WebsiteServiceMaker";
import { NodeJsVersion } from "../src/data/NodeJsVersion";
import useVersions from "../src/data/useVersions";

jest.mock("../src/data/useVersions");

describe("WebsiteServiceMaker", () => {
  const mockedUseVersions = jest.mocked(useVersions);

  beforeEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  const render = () => rtlRender(<WebsiteServiceMaker />);

  describe("when there are versions to run tests against", () => {
    beforeEach(() => {
      mockedUseVersions.mockReturnValue([
        { canBeUsedForWebsites: () => false, shouldBeUsedForWebsites: () => false },
        { canBeUsedForWebsites: () => false, shouldBeUsedForWebsites: () => false },
        { canBeUsedForWebsites: () => true, shouldBeUsedForWebsites: () => false }
      ] as NodeJsVersion[]);
    });

    it("should show versions to run tests against", () => {
      render();

      const testTitle = screen.getByRole("heading", {
        level: 4,
        name: "But it's OK if you use"
      });
      expect(testTitle).toBeInTheDocument();
    });
  });

  describe("when there are no versions to run tests against", () => {
    beforeEach(() => {
      mockedUseVersions.mockReturnValue([
        { canBeUsedForWebsites: () => false, shouldBeUsedForWebsites: () => false },
        { canBeUsedForWebsites: () => false, shouldBeUsedForWebsites: () => false },
        { canBeUsedForWebsites: () => false, shouldBeUsedForWebsites: () => false }
      ] as NodeJsVersion[]);
    });

    it("should not show versions to run tests against", () => {
      render();

      const testTitle = screen.queryByRole("heading", {
        level: 4,
        name: "But it's OK if you use"
      });
      expect(testTitle).not.toBeInTheDocument();
    });
  });
});
