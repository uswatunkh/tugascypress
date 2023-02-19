import { login } from '../e2e/login.cy.js'

describe('template spec', () => {
    beforeEach(() => {
        login()
        cy.clearLocalStorage();
        cy.get("[href='/categories'] .css-1mqa38q").click()
        
        
    })


    it('Negative case masukin kategori kosong', () => {
        cy.get(".css-1piskbq").click()
         cy.get(".chakra-button").click()
         cy.get(".chakra-alert").
         should('have.text', '"name" is not allowed to be empty')
 
    })

    it('Negative case masukin nama kategori kosong', () => {
        cy.get(".css-1piskbq").click()
        cy.get("#deskripsi").type("uswauswa")
         cy.get(".chakra-button").click()
         cy.get(".chakra-alert").
         should('have.text', '"name" is not allowed to be empty')
 
    })

    it('Positive case masukin tambah kategori', () => {
        cy.get(".css-1piskbq").click()
        cy.get("#nama").type("uswauswa")
        cy.get("#deskripsi").type("uswauswa")
         cy.get(".chakra-button").click()
         cy.on('.chakra-toast .chakra-alert__title',(t)=>{
            //assertions
            expect(t).to.contains('success');
         })
         
         cy.on('.chakra-toast .chakra-alert__desc',(t)=>{
            //assertions
            expect(t).to.contains('item ditambahkan');
         })
         cy.reload(true)
        
 
    })

    it('Negative case Ubah kategori dengan nama kosong', () => {
         cy.get("[aria-controls='menu-list-19']").click()
         cy.get("[tabindex='0']").click()
         cy.get("#nama").clear()
         cy.get(".chakra-button").click()
         cy.get(".chakra-alert").
         should('have.text', '"name" is not allowed to be empty')
    })

    it('Positive case Ubah kategori', () => {
        cy.get("[aria-controls='menu-list-19']").click()
        cy.get("[tabindex='0']").click()
        cy.get("#nama").clear()
        cy.get("#nama").type("Kategori ubah dua")
        cy.get("#deskripsi").clear()
        cy.get("#deskripsi").type("Deskripsi ubah dua")
        cy.get(".chakra-button").click()
        cy.reload(true)
   })






    
})





