describe("Testing", () => {
  beforeEach(() => {
    cy.visit("/overview");
  });
  it("Hello", () => {
    cy.contains(
      "git clone https://github.com/coderyansolomon/cypress-course.git"
    ).should("not.be.visible");
    cy.getDataTest("accordion-item-1").click();
    cy.contains(
      "git clone https://github.com/coderyansolomon/cypress-course.git"
    ).should("be.visible");
    cy.getDataTest("accordion-item-1").click();
  });
});
