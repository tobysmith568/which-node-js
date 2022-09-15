describe("Index", () => {
  it("should load and render the information from the node.js repo", () => {
    cy.visit("/");

    cy.get(`h2:contains("If you're a...")`);
    cy.get(`h3:contains("Library Maintainer")`);
    cy.get(`h3:contains("Website/Service Maker")`);
    cy.get(`h3:contains("No one should use")`);
  });
});

export {};
