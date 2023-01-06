
describe("Interacting with radio button and checkbox", ()=>{
    it("should interact with radio buttons", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("#female").should("be.visible")
        .check()
        .and("be.checked")
        cy.get("#male").should("be.visible")
        .and("not.be.checked")
        cy.get("#other").should("be.visible")
        .and("be.disabled")
    })

    it.only("should interact with checkbox", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //checking one day only
        //cy.get("#monday").check().should("be.checked") 

        //checking all checkboxes at a time
        // cy.get('input.form-check-input[type="checkbox"]').check().should("be.checked")

        //checking the first and/or last checkboxes only
        cy.get('input.form-check-input[type="checkbox"]').first().check().should("be.checked")
        cy.get('input.form-check-input[type="checkbox"]').last().check().should("be.checked")

    })
})