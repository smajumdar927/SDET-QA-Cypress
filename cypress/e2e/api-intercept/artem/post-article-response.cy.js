describe('Post article suit', ()=>{

beforeEach(() => {
    cy.visit('/login');
    cy.loginXfosoft('myxfosoft@xfosoft.com', 'xfosoft')
});

it('should intercept post response', () => {

    cy.intercept('POST', 'https://api.realworld.io/api/articles/').as('posts')

    cy.get('.nav-link[routerlink="/editor"]').click()
    cy.get('input[placeholder="Article Title"]').type('Article no 6')
    cy.get(':nth-child(2) > .form-control').type('Nothing')
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type('I am the best QA')
    cy.get('input[placeholder="Enter tags"]').type('Automation')
    cy.get('button[type="button"]').click()

    cy.wait('@posts').then((res)=>{
        console.log(res);
        expect(res.response.statusCode).to.equal(200)
    })
});

})