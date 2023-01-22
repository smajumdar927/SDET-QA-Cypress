// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('loginXfosoft', (email, password)=>{
    cy.get("input[placeholder='Email']").type(email)
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[type='submit']").click();
})
Cypress.Commands.add('logoutXfosoft', (email, password)=>{
    cy.get(".nav-link[routerlink='/settings']").click();
    cy.get('.btn.btn-outline-danger').click();
})
//
// -- This is a child command --

// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- This will help for auto command
///<reference types = "Cypress"/>