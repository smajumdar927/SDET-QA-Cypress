

describe("Interact with alert", () => {
    //1)Javascript Alert: It will have some text and Ok button
    it("should interact with alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert", (text) => {
            expect(text).to.contains("I am a JS Alert")
        })
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    //2)Javascript Alert: It will have some text and both "Ok" & "Cancel" button
    it("should interact with confirm OK button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", (text) => {
            expect(text).to.contains("I am a JS Confirm")
        })
        cy.get("#result").should("have.text", "You clicked: Ok")
    })
    it("should interact with confirm Cancel button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", () => false)// This event will handle the cancel button in the alert
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })

    //3) Javascript Prompt: It will have input text field with "Ok" & "Cancel" button
    it("should interact with confirm Ok button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("I am a prompt")
            cy.get("button[onclick='jsPrompt()']").click()
        })
        cy.get("#result").should("have.text", "You entered: I am a prompt")

    })

    //Need to fix this test
    // it.only("should interact with confirm Cancel button", () => {
    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //     cy.window().then((win) => {
    //         cy.stub(win, "prompt").returns("I am a prompt")
    //     })

    //     cy.window().then((win) => {
    //        cy.stub(win, "prompt").callsFake(()=> null)
    //         cy.get("button[onclick='jsPrompt()']").click()
    //     })
    //     cy.get("#result").should("have.text", "You entered: null")
    // })

    //4) JS Authenticated alert
    it.only("should interact with basic authenticated alert" , ()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth :
        {username: "admin",
         password: "admin"}
        }
    )
    cy.get("div[class='example'] p").should("contain", "Congratulations!")
    cy.get("div[class='example'] p").should("have.contain", "Congratulations! You must have the proper credentials.")
})
})