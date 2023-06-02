const loginData = require("../../fixtures/tricentis/login.json");

class baseLogin {
  loginMenu = ".ico-login";
  email = "#Email";
  passw = "#Password";
  rememberMe = "#RememberMe";
  loginBtn = "form > .buttons > .button-1";
  logoutMenu = ".ico-logout";

  clickLoginMenu() {
    //cy.get(this.loginMenu).click();
    cy.klik(this.loginMenu);
  }
  inputEmail() {
    //cy.get(this.email).type(loginData.validEmail);
    cy.ketik(this.email, loginData.validEmail);
  }
  inputPassw() {
    //cy.get(this.passw).type(loginData.validPass);
    cy.ketik(this.passw, loginData.validPass);
  }
  clickLogin() {
    cy.get(this.loginBtn).click();
  }
  verifyLogout() {
    cy.get(this.logoutMenu).should("be.visible");
  }
}

export default baseLogin;
