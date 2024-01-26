describe("Login", () => {     
     it ('Login exitoso', ()=>{
     cy.visit("https://www.saucedemo.com/")
     cy.loginOk('standard_user', 'secret_sauce')
     cy.contains('Products').should('be.visible') 
})
})

