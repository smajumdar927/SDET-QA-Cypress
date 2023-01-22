class Dashboard {
    dashboardValidation(validationText){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", validationText)

    }
    logout(){
        cy.get('.oxd-userdropdown-name').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    }
}

export default Dashboard