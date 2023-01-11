describe("Fixture test suit", ()=>{
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