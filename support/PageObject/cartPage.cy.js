class cartPage {
  cart =
    ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2";

  addCart() {
    cy.get(this.cart).click();
  }
}
export default cartPage;
