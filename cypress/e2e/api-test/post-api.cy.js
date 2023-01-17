import { faker } from '@faker-js/faker';

describe("POST API test suit", ()=>{
    const randomName = faker.name.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    const accessToken = "09e6a117e9c018c96f076cc7740433b17da84295f1889ef844cfe813800a46a6"
    it("POST api testing", ()=>{
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                authorization: `Bearer ${accessToken}`
            },
            body:{
                name: randomName,
                email: randomEmail,
                gender: "male",
                status: "active"
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property("email", randomEmail)
            expect(res.body).has.property("name", randomName)
        })
    })
})