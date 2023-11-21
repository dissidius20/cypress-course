describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("Contains correct header", () => {
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
  it.only("Accordion item 1 works correctly", () => {
    const accordionContent = ".MuiAccordionSummary-content";
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get(accordionContent).click({ multiple: true });

    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.contains(
      /Within your describe block, you will also have it blocks/i
    ).should("be.visible");
    cy.contains(/Cypress gives you various commands to help you test/i).should(
      "be.visible"
    );
    cy.contains(
      /You're often going to want to get an element from the DOM and make some sort of assertion/i
    ).should("be.visible");
    cy.contains(
      /After you get an element, you probably want to do something with that element, like make an assertion./i
    ).should("be.visible");

    cy.get(accordionContent).click({ multiple: true });

    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.contains(
      /Within your describe block, you will also have it blocks/i
    ).should("not.be.visible");
    cy.contains(/Cypress gives you various commands to help you test/i).should(
      "not.be.visible"
    );
    cy.contains(
      /You're often going to want to get an element from the DOM and make some sort of assertion/i
    ).should("not.be.visible");
    cy.contains(
      /After you get an element, you probably want to do something with that element, like make an assertion./i
    ).should("not.be.visible");
  });
});

// cy.get('[data-test="accordion-item-1"] div[role="button"]').click();

// cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
// cy.contains(/Your tests will exist in a describe block/i).should(
//   "not.be.visible"
// );
