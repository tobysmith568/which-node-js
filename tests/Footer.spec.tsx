import { render, screen, within } from "@testing-library/react";
import Footer from "../src/Footer";

describe("Footer", () => {
  it("should contain a link to the index", () => {
    render(<Footer />);

    const indexLink = screen.getByRole("link", { name: /Home/ });

    expect(indexLink).toHaveAttribute("href", "/");
  });

  it("should contain a link to the faq", () => {
    render(<Footer />);

    const faqLink = screen.getByRole("link", { name: /FAQ/ });

    expect(faqLink).toHaveAttribute("href", "/faq");
  });

  it("should contain a link to the GitHub repo", () => {
    render(<Footer />);

    const gitHubLink = screen.getByRole("link", { name: /GitHub/ });

    expect(gitHubLink).toHaveAttribute("href", "https://github.com/tobysmith568/which-node-js");
  });

  it("should contain a link to the GitHub repo that opens in a new tab", () => {
    render(<Footer />);

    const gitHubLink = screen.getByRole("link", { name: /GitHub/ });

    expect(gitHubLink).toHaveAttribute("target", "_blank");
  });

  it("should contain a link to the terms", () => {
    render(<Footer />);

    const termsLink = screen.getByRole("link", { name: /Terms/ });

    expect(termsLink).toHaveAttribute("href", "/terms");
  });

  it("should contain a link to the privacy policy", () => {
    render(<Footer />);

    const privacyLink = screen.getByRole("link", { name: /Privacy/ });

    expect(privacyLink).toHaveAttribute("href", "/privacy");
  });

  it("should contain a link to the third-party licenses", () => {
    render(<Footer />);

    const thirdPartyLink = screen.getByRole("link", { name: /Third-Party Licenses/ });

    expect(thirdPartyLink).toHaveAttribute("href", "/third-party");
  });

  describe("disclaimer", () => {
    const getDisclaimer = () => screen.getByText(/This website is unofficial/, { exact: false });

    it("should state that the site is not related or endorsed by Node.js", () => {
      render(<Footer />);

      const disclaimer = getDisclaimer();

      expect(disclaimer.textContent).toContain(
        "This website is unofficial. It is not related to, or endorsed by, Node.js or the OpenJS Foundation."
      );
    });

    it("should state that the site does not contain legal or security advice", () => {
      render(<Footer />);

      const disclaimer = getDisclaimer();

      expect(disclaimer.textContent).toContain(
        "This website does not contain legal or security-related advice."
      );
    });

    it("should contain a link to the nodejs.org website", () => {
      render(<Footer />);

      const disclaimer = getDisclaimer();

      const nodejsLink = within(disclaimer).getByRole("link", {
        name: /Node\.js/
      });

      expect(nodejsLink).toHaveAttribute("href", "https://nodejs.org");
    });

    it("should contain a link to the OpenJS Foundation website", () => {
      render(<Footer />);

      const disclaimer = getDisclaimer();

      const openJsLink = within(disclaimer).getByRole("link", {
        name: /the OpenJS Foundation/
      });

      expect(openJsLink).toHaveAttribute("href", "https://openjsf.org");
    });
  });

  it("should contain a link to tobysmith.uk", () => {
    render(<Footer />);

    const tobySmithLink = screen.getByRole("link", { name: /Toby Smith/ });

    expect(tobySmithLink).toHaveAttribute("href", "https://tobysmith.uk");
  });
});
