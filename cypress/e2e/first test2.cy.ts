describe("🚀 Visit Page and Login",() =>{
    
    
    it("visit page",()=>{
        cy.visit("https://www.saucedemo.com/")
    })

    it("Login",() => {
        cy
        .get("input[id='user-name']")
        .type("standard_user")
    })

    
})