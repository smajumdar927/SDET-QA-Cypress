describe("API test suit", ()=>{

    it("GET method api test", ()=>{
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                authorization: "Bearer 09e6a117e9c018c96f076cc7740433b17da84295f1889ef844cfe813800a46a6"
            }
        }).then((res)=>{
            console.log(res)
            expect(res.body[0].id).to.eq(3753)
            expect(res.status).to.eq(200)
            expect(res.body[0]).to.have.property("name", "Harinarayan Nayar")
            expect(res.body[0]).to.have.property("gender")
        })
    })
})