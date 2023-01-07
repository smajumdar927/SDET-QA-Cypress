describe("Interact with dropdowns", ()=>{
    it('should interact with select tag only', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        //if the html has select tag then cypress can use built in "select"
        cy.get("#zcf_address_country").select("United States")
        .should("have.value", "United States")
        cy.get(".globalstatecode").select("New Jersey")
        .should("have.value", "new jersey")
    });
    it('should interact with non-select/bootstrap tag only', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        //Since the drop-down is bootstrap created then it should use "click/type and enter" method
        //assertion can be done "have.text" method 
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Japan").type("{enter}")
        cy.get("#select2-billing_country-container").should("have.text", "Japan")
    });
    it('should auto suggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Bangladesh")
        cy.get(".suggestion-title").contains("Bangladesh Liberation War").click()
    });
    it.only('should interact with dynamic dropdown', () => {
        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type("cypress automation")
        //this is static way to write down
        //cy.get(".wM6W7d").contains("cypress automation tutorial").click()

        //this is dynamic way to write down
        cy.get(".wM6W7d").each((element, index, list)=>{
            if(element.text() == "cypress automation tool"){
                cy.wrap(element).click()
            }
        })
        cy.get("input[name='q']").should("have.value", "cypress automation tool")
    });
    

})