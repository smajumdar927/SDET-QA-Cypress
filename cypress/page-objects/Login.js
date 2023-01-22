class Login {
    usernameElement = '.oxd-input[name="username"]'
    passwordElement = '.oxd-input[name="password"]'
    btnElement = '.oxd-button'
    validationTextElement = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    username(username) {
        cy.get(this.usernameElement).type(username)

    }
    password(password) {
        cy.get(this.passwordElement).type(password)

    }
    btnLogin() {
        cy.get(this.btnElement).click()

    }
    invalidText(text) {
        cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
          .should("have.text", text)

    }
}

export default Login