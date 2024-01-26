const elements = {
    login: {
      userInput: () => cy.get('[id="user-name"]'),
      passInput: () => cy.get('[id="password"]'),
      loginButton: () => cy.get('[id="login-button"]'),

    },
    addToCart:{
      addToCartButton: ()=> cy.get('[id="add-to-cart-sauce-labs-backpack"]'),
    }

  }
  
export default elements