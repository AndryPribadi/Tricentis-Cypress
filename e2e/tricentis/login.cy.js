import baseLogin from "../../support/PageObject/loginPage.cy";
import cartPage from "../../support/PageObject/cartPage.cy";

describe("tricentis test", () => {
  const BaseLogin = new baseLogin();
  const CartPage = new cartPage();
  it("login", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    BaseLogin.clickLoginMenu();
    BaseLogin.inputEmail();
    //cy.get("#Password").type("sanber123");
    BaseLogin.inputPassw();
    //cy.get("#RememberMe").click();
    //cy.get("form > .buttons > .button-1").click();
    BaseLogin.clickLogin();
    //cy.get(".ico-logout").should("be.visible");
    BaseLogin.verifyLogout;
  });
  it("cart", () => {
    cy.visit("");
    cy.get(".ico-login").click();
    cy.get("#Email").type("sanber67@gmail.com");
    cy.get("#Password").type("sanber123");
    cy.get("#RememberMe").click();
    cy.get("form > .buttons > .button-1").click();
    cy.get(".ico-logout").should("be.visible");
    CartPage.addCart();
    cy.get(".ico-cart > .cart-label").click();
    cy.get("#giftcard_2_RecipientName").type("sanber");
    cy.get("#giftcard_2_RecipientEmail").type("andry@gmail.com");
    cy.get("#giftcard_2_Message").type("memberikan komentar");
    cy.get("#add-to-cart-button-2").click();
  });
});
