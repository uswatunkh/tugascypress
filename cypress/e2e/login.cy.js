 
 
 function login (){
    // describe('template spec', () => {

        //beforeEach(() => {
            cy.visit('https://kasirdemo.belajarqa.com/', { timeout: 60000 })
            cy.url().should("include", "login")
            cy.clearLocalStorage();
            cy.get("#email").type("uswatunkha@yopmail.com")
            cy.get("#password").type("uswatun00")
            cy.get(".chakra-button").click()
            
          
         //})
        // it('login', () => {
            
            

       // })


        // it('without a username or password', () => {
        //     // cy.get('button', {timeout: 30000})
        //     //   .contains('chakra-button css-1n8i4of')
        //     //   .should('be.visible')
        //     //   .click()
        //     // cy.get('#error')
        //     //   .should('have.text', 'Please enter your username')
        //   })
      //})

 }
 
 export {login };