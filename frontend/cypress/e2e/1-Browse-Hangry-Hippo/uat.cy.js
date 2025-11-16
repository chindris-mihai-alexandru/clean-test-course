describe("Category Selection Tests", () => {
  beforeEach(() => {
    cy.visit("https://hangryhippo.quantic.host/");
  });

  it("selects Handhelds", () => {
    cy.contains("Handhelds").click();
    cy.contains("Cheese Burger").should("be.visible");
    cy.contains("Fajita Tacos").should("be.visible");
  });

  it("selects Appeteasers", () => {
    cy.contains("Appeteasers").click();
  });
});
