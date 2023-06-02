describe("tricentis test", () => {
  it("register", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    cy.get(".ico-register").click();
    cy.get("#FirstName").type("sanbercode12");
    cy.get("#LastName").type("boothcamp12");
    cy.get("#Email").type("sanber67@gmail.com");
    cy.get("#Password").type("sanber123");
    cy.get("#ConfirmPassword").type("sanber123");
    cy.get("#register-button").click();
    cy.get(".result").should("contains.text", "Your registration completed");
    // cy.get(".validation-summary-errors > ul > li").should(
    //   "contains.text",
    //   "The specified email already exists"
    // );
  });
});
