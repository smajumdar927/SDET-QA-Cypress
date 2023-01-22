import Login from "../page-objects/Login"
import Dashboard from "../page-objects/Dashboard"
describe("POM", () => {
    
    it("approach number 01", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('.oxd-input[name="username"]').type("Admin")
        cy.get('.oxd-input[name="password"]').type("admin123")
        cy.get('.oxd-button').click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("have.text", "Dashboard")
    })
    it("approach number 02", () => {
        const ln = new Login
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        ln.username("Admin")
        ln.password("admin123")
        ln.btnLogin()
        ln.validationText("Dashboard")
    })
    it.only("approach number 03", () => {
        const ln = new Login
        const dashboard = new Dashboard
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture("orangehrm2").then((data)=>{
            data.forEach((userData)=>{
                ln.username(userData.userName)
                ln.password(userData.passWord)
                ln.btnLogin()
                // ln.validationText(userData.expected)

                if (userData.userName == data[0].userName && userData.passWord == data[0].passWord) {
                    
                    // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", data[0].expected)
                    // cy.get('.oxd-userdropdown-name').click()
                    // cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                    dashboard.dashboardValidation(data[0].expected)
                    dashboard.logout()

                }else{
                    // cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", data[1].expected)
                    ln.invalidText(data[1].expected)
                }
            })
        })
        
    })
    
})