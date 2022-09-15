describe("Licenses", () => {
  it("should load and render the third-party licenses information", () => {
    cy.visit("/third-party");

    cy.get(`h4:contains("This page was generated using the generate-license-file npm package.")`);
  });
});

export {};
