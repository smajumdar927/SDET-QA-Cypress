//There are four types of mocha hooks in cypress

//before
//after
//beforeEach
//afterEach

describe("This is test suit", ()=>{

    before(()=>{
        cy.log("****** visit the website *****")
    })

    after(()=>{
        cy.log("****** close the window *******")
    })

    beforeEach(()=>{
        cy.log("******* Login the app *******")
    })

    afterEach(()=>{
        cy.log("******* Logout the app ******")
    })
    it("TC-01 display the products", ()=>{
        cy.log("***** Display the products ******");
    })
    it("TC-02 search the products", ()=>{
        cy.log("***** Search the products ******");
    })
    it("TC-3 sort the products", ()=>{
        cy.log("***** Sort the products ******");
    })
    it("TC-04 add to cart the products", ()=>{
        cy.log("***** Add to cart the products ******");
    })
})