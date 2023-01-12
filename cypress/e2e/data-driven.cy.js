describe("Fixture test suit", ()=>{
     //Direct Access
     it("should have direct access from fixture file", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture("orangehrm").then((data) => {

            cy.get('.oxd-input[name="username"]').type(data.userName)
            cy.get('.oxd-input[name="password"]').type(data.passWord)
            cy.get('.oxd-button').click()

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", data.expected)
        })
    })

    //Before hook method
    let userData
    before(() => {
        cy.fixture("orangehrm").then((data) => {
            userData = data
        })
    })

    it.only("should load the data from fixture file before all it test", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('.oxd-input[name="username"]').type(userData.userName)
        cy.get('.oxd-input[name="password"]').type(userData.passWord)
        cy.get('.oxd-button').click()

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userData.expected)

    })

    
    it('should get the data from fixture files', () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        
        cy.fixture("openhrm02").then((data)=>{
            data.forEach((userData)=>{
                cy.get("input[placeholder='Username']").type(userData.userName)
                cy.get("input[placeholder='Password']").type(userData.passWord)
                cy.get("button[type='submit']").click()

                if (userData.userName == data[0].userName && userData.passWord == data[0].passWord) {
                    
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", data[0].expected)
                    cy.get('.oxd-userdropdown-name').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

                }else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", data[1].expected)
                }
            })
        })
    });
})