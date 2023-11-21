describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-form-input");
    cy.get("@subscribe-form-input").type("hello@gmail.com");
    cy.contains(/Successfully subbed: hello@gmail.com!/i).should("not.exist");
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/Successfully subbed: hello@gmail.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: hello@gmail.com!/i).should("not.exist");

    cy.contains(/Invalid email: !/i).should("not.exist");
    cy.get("@subscribe-form-input").type("hello@gmail.io");
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/Invalid email: hello@gmail.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: !/i).should("not.exist");
  });

  it.only("Testing subscribe function", () => {
    cy.getDataTest("subscribe-btn").click();
  });
});
