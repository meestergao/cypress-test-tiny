describe("page", () => {
  it("works", () => {
    cy.visit("https://example.cypress.io");
    cy.visit("https://example.cypress.io", {
      onBeforeLoad(win) {
        cy.stub(win, "fetch")
          .withArgs("test")
          .resolves({
            ok: true,
            json: () => []
          });
      }
    });
  });
});
