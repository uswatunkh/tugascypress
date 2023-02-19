 
 
 function login (){
  
            cy.visit('https://kasirdemo.belajarqa.com/', { timeout: 60000 })
            cy.url().should("include", "login")
            cy.clearLocalStorage();
            cy.get("#email").type("uswatunkha@yopmail.com")
            cy.get("#password").type("uswatun00")
            cy.get(".chakra-button").click()
          

 }
 
 export {login };