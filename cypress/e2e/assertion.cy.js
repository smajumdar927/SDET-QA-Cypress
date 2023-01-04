// There are two types od assertions:

// Implicit Assertion:
// - should
// - and 

// Explicit Assertion:
// - expect 
// - assert 

describe('Verify the assertion', ()=>{
    it('should verify the implicit assertion', ()=>{
        const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        cy.visit(url)
        //Method 01
        // cy.url().should('eq', url)
        // cy.url().should('include', 'orangehrmlive')
        // cy.url().should('contain', 'orangehrmlive.com')
        
        //Method 02
        // cy.url().should('eq', url)
        // .should('include', 'orangehrmlive')
        // .should('contain', 'orangehrmlive.com')
        
        //Method 03
        // cy.url().should('eq', url)
        // .and('include', 'orangehrmlive')
        // .and('contain', 'orangehrmlive.com')

        //Verify the title
        // cy.title().should('include', 'Orange')
        // .and('contain', 'Orange')
        // .and('eq', 'OrangeHRM')
        // .and('not.eq', 'AppleHRM')

        //Verify the links
        cy.get('a').should('have.length', 5)

        //Verify the logo
        cy.get('.orangehrm-login-branding').should('exist')

        //Verify the inputted value right or wrong
        cy.get("input[placeholder='Username']").type("Admin")
        .and("have.value", "Admin")
        .and("not.have.value", "admin")

        cy.get("input[placeholder='Password']").type("admin123")
        .and("have.value", "admin123")

    })
})