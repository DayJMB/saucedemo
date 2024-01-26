const elements = {
    login: {
      userInput: () => cy.get('[id="user-name"]'),
      passInput: () => cy.get('[id="password"]'),
      loginButton: () => cy.get('[id="login-button"]'),
      
    },

    addToCart:{
      addToCartButton: ()=> cy.get('[id="add-to-cart-sauce-labs-backpack"]'),
    },

    logout:{
      openMenuButton: ()=> cy.get('[id="react-burger-menu-btn"]'),
      logoutButton: ()=> cy.get('[id="logout_sidebar_link"]'),
    },
    

  }
  
export default elements