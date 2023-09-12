import { render as rtlRender, screen } from "@testing-library/react";
import { NodeJsVersion } from "../src/data/NodeJsVersion";
import useVersions from "../src/data/useVersions";
import LibraryMaintainer from "../src/LibraryMaintainer";

jest.mock("../src/data/useVersions");

describe("LibraryMaintainer", () => {
  const mockedUseVersions = jest.mocked(useVersions);

  beforeEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  const render = () => rtlRender(<LibraryMaintainer />);

  describe("when there are versions to run tests against", () => {
    beforeEach(() => {
      mockedUseVersions.mockReturnValue([
        { shouldBeUsedForLibraryTests: () => false, shouldBeUsedForLibraries: () => false },
        { shouldBeUsedForLibraryTests: () => false, shouldBeUsedForLibraries: () => false },
        { shouldBeUsedForLibraryTests: () => true, shouldBeUsedForLibraries: () => false }
      ] as NodeJsVersion[]);
    });

    it("should show versions to run tests against", () => {
      render();

      const testTitle = screen.getByRole("heading", {
        level: 4,
        name: "But also run your tests against"
      });
      expect(testTitle).toBeInTheDocument();
    });
  });

  describe("when there are no versions to run tests against", () => {
    beforeEach(() => {
      mockedUseVersions.mockReturnValue([
        { shouldBeUsedForLibraryTests: () => false, shouldBeUsedForLibraries: () => false },
        { shouldBeUsedForLibraryTests: () => false, shouldBeUsedForLibraries: () => false },
        { shouldBeUsedForLibraryTests: () => false, shouldBeUsedForLibraries: () => false }
      ] as NodeJsVersion[]);
    });

    it("should not show versions to run tests against", () => {
      render();

      const testTitle = screen.queryByRole("heading", {
        level: 4,
        name: "But also run your tests against"
      });
      expect(testTitle).not.toBeInTheDocument();
    });
  });
});
