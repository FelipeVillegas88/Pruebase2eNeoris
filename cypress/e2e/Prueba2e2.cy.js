import Method from '../pages/method'

const method = new Method()

describe("Prueba My Store", () => {
    
    it("Flujo completo", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a').contains('Sign in').click()
        cy.get('#email').type('felipevillegas26988@gmail.com')
        cy.get('#passwd').type('123456')
        cy.get('span').contains('Sign in').click()
        cy.get('#header_logo').click()
        cy.get('a').contains('Women').click()
        cy.scrollTo(0, 750)
        cy.wait(1000)
        cy.get('span').contains('Add to cart').click()
        cy.wait(1000)
        cy.get('span').contains('Proceed to checkout').click()
        cy.wait(1000)
        cy.scrollTo(0, 750)
        cy.wait(1000)
        method.nextCheckout()
        cy.scrollTo(0, 750)
        method.nextCheckout()
        cy.scrollTo(0, 350)
        cy.get('#cgv').check()
        method.nextCheckout()
        cy.scrollTo(0, 750)
        cy.get('a').contains('Pay by bank wire ').click()
        cy.scrollTo(0, 750)
        cy.get('#cart_navigation > .button > span').click()
        cy.wait(1000)
    })

})