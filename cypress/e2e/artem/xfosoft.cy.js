describe('XFOSOFT test suit', ()=>{
    
    it('Test Scenario 1 : Verify that user can login and logout using with web elements', () => {
    cy.visit('/login');
    cy.get("input[placeholder='Email']").type('myxfosoft@xfosoft.com');
    cy.get("input[placeholder='Password']").type('xfosoft');
    cy.get("button[type='submit']").click();
    cy.wait(2000)
    cy.get(".nav-link[routerlink='/settings']").click();
    cy.get('.btn.btn-outline-danger').click();
    });
    it('Test Scenario 2: Verify that user can login and logout using commands', () => {
    cy.visit('/login');
    cy.loginXfosoft('myxfosoft@xfosoft.com', 'xfosoft')
    cy.logoutXfosoft()
    });  
    it('Test Scenario 3: Verify that user can login and logout using data-driven', () => {
    cy.visit('/login');
    cy.fixture('xfosoft').then((data)=>{
        cy.loginXfosoft(data.email, data.password)
    })
    cy.logoutXfosoft()
    });
  
})
