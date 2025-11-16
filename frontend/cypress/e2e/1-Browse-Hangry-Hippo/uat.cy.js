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
    cy.contains("Tater Tots").should("be.visible");
    cy.contains("Buffalo Wings").should("be.visible");
    cy.contains("Cheese Burger").should("not.exist");
    cy.contains("Fajita Tacos").should("not.exist");
  });
});
