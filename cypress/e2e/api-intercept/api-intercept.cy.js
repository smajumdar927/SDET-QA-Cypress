describe("API Intercept suit", ()=>{
    it("test api with simple intercept", ()=>{
        cy.get('.nav-link[routerlink="/editor"]').click();
        cy.get('input[placeholder="Article Title"]').type('Article 01');
    })
})