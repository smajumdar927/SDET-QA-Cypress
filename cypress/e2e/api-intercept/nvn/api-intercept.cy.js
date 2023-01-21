describe("API Intercept suit", ()=>{
    it("mocking with intercept test with static datat", ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept('GET', '/posts*', {body:{
            firstName : "Krish", //This is static data
            lastName : "Maj" //This is static data
        }}).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then((res)=>{
            cy.log(res)
        })

    })
    it.only('mocking with intercept test with dynamic/fixture data', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept("GET", "/posts", {fixture: "nvn-intercept"}).as("posts")
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then((res)=>{
            cy.log(res)
        })
    });
})