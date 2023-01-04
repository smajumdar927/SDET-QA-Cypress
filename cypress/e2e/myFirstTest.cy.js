describe('Suite 01', () => {
  it('should verify the positive test ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM')
  })
  it('should verify the negative test ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'orangeHRM')
  })
})