//Import

import 'cypress-xpath'

Cypress.Commands.add('getByXpath', (xpath, ...args) => {
  cy.xpath(xpath, ...args)
})
import elements from './elements/diccionario_datos.js'


Cypress.Commands.add("loginOk", (text, password) => {
  elements.login.userInput().type(text)
  elements.login.passInput().type(password)
  elements.login.loginButton().click()
})

Cypress.Commands.add("clickButton", () => {
  elements.addToCart.addToCartButton().click()
})
