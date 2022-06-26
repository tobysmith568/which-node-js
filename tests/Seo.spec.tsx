import { render } from "@testing-library/react";
import Seo from "../src/Seo";

const renderInHead = (component: JSX.Element) =>
  render(component, {
    container: document.head
  });

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    }
  };
});

describe("Seo", () => {
  it("should set the title to the title prop", () => {
    const title = "My Title";

    renderInHead(<Seo title={title} description="" path="" />);

    expect(document.head.outerHTML).toContain(`<title>${title}</title>`);
  });

  it("should set the og:title to the title prop", () => {
    const title = "My Title";

    renderInHead(<Seo title={title} description="" path="" />);

    expect(document.head.outerHTML).toContain(`<meta property="og:title" content="${title}">`);
  });

  it("should set the description to the description prop", () => {
    const description = "My Description";

    renderInHead(<Seo title="" description={description} path="" />);

    expect(document.head.outerHTML).toContain(`<meta name="description" content="${description}">`);
  });

  it("should set the og:description to the description prop", () => {
    const description = "My Description";

    renderInHead(<Seo title="" description={description} path="" />);

    expect(document.head.outerHTML).toContain(
      `<meta property="og:description" content="${description}">`
    );
  });

  it("should set the canonical url to the canonicalDomain plus the path prop", () => {
    const path = "/my/path";

    renderInHead(<Seo title="" description="" path={path} />);

    expect(document.head.outerHTML).toContain(
      `<link rel="canonical" href="https://what-version-of-node.js.org${path}">`
    );
  });

  describe("robots", () => {
    it("should set the robots meta content to index,follow when no noIndex is given", () => {
      renderInHead(<Seo title="" description="" path="" />);

      expect(document.head.outerHTML).toContain(`<meta name="robots" content="index,follow">`);
    });

    it("should set the robots meta content to index,follow when noIndex is null", () => {
      renderInHead(<Seo title="" description="" path="" noIndex={null!} />);

      expect(document.head.outerHTML).toContain(`<meta name="robots" content="index,follow">`);
    });

    it("should set the robots meta content to index,follow when noIndex is false", () => {
      renderInHead(<Seo title="" description="" path="" noIndex={false} />);

      expect(document.head.outerHTML).toContain(`<meta name="robots" content="index,follow">`);
    });

    it("should set the robots meta content to noindex,follow when noIndex is true", () => {
      renderInHead(<Seo title="" description="" path="" noIndex />);

      expect(document.head.outerHTML).toContain(`<meta name="robots" content="noindex,follow">`);
    });
  });
});
