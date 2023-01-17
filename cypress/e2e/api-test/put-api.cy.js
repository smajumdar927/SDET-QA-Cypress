import { faker } from "@faker-js/faker"

describe("Create an user and update the property", () => {
    const randomName = faker.name.fullName()
    const randomEmail = faker.internet.email()
    const reGenRandomName = faker.name.fullName()
    const reGenRandomEmail = faker.internet.email()
    let accessToken
    before(()=>{ //Token is retrive from fixture file
        // const accessToken = "09e6a117e9c018c96f076cc7740433b17da84295f1889ef844cfe813800a46a6"
        cy.fixture("post").then((data)=>{
            accessToken = data
        })
    })
    it("should create the user first then update the name and email and then get the user", () => {
        //Create a new user
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Authorization": `Bearer ${accessToken.token}`,
                "Content-Type": "application/json"
            },
            body: {
                "name": randomName,
                "email": randomEmail,
                "gender": "male",
                "status": "active"
            }
        }).then((res) => {
            expect(res.status).to.eq(201)
            const userID = res.body.id
            cy.log(res.body.name)
            cy.log(res.body.email)
            cy.log(res.body.gender)
            cy.log(res.body.status)

            //Upadte the created user
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${userID}`,
                headers: {
                    "Authorization": `Bearer ${accessToken.token}`,
                    "Content-Type": "application/json"
                },
                body: {

                    "name": reGenRandomName,
                    "email": reGenRandomEmail,
                    "gender": "female",
                    "status": "inactive"
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                cy.log(res.body.name)
                cy.log(res.body.email)
                cy.log(res.body.gender)
                cy.log(res.body.status)

                //Get the updated user 
                cy.request({
                    method: "GET",
                    url: `https://gorest.co.in/public/v2/users/${userID}`,
                    headers: {
                        "Authorization": `Bearer ${accessToken.token}`,
                        "Content-Type": "application/json"
                    }
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                })
            })
        })
    })
})
