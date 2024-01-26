describe("Login", () => {
     beforeEach(() => {    
     cy.visit("https://www.saucedemo.com/")
     })

it('Inciar sesión exitosamente', ()=>{
     cy.loginOk('standard_user', 'secret_sauce')
     cy.contains('Products').should('be.visible')
     cy.clickMenuButton()
     cy.clickLogoutButton() 
})

//este caso falla intencionalmente ya que se deja en blanco el campo password//
it('Intentar iniciar sesión con credenciales incorrectas', ()=>{
     cy.loginOk('standard_user', '')
     cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible') 
})

it("Agregar productos al carrito", () => {
cy.loginOk('standard_user', 'secret_sauce')
cy.clickButton()
cy.clickMenuButton()
cy.clickLogoutButton()
})
})

