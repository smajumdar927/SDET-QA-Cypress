
// #id
// .class
// [attribute='value']
// .class[attribute='value']

describe('Locator Suit', ()=>{
  it('should test locator-01', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('.oxd-input[name="username"]').type('Admin')
    cy.get('.oxd-input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()

    //Assertion
    cy.get('.oxd-text--h6').contains('Dashboard')
    cy.get('.oxd-main-menu-item').should('have.length', 11)
    cy.get('.oxd-main-menu-item-wrapper')
    
  })
})