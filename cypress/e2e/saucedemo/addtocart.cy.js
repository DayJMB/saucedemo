import elements from '../../support/elements/diccionario_datos'
describe("Carrito de productos", () => {
    beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.loginOk('standard_user', 'secret_sauce')
    cy.contains('Products').should('be.visible')
    })
    it("Agregar productos al carrito", () => {
    cy.clickButton()})
})