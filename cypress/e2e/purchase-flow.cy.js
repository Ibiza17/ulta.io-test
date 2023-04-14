import loginData from '../fixtures/loginData.json'
import checkoutData from '../fixtures/checkoutData.json'



describe('Sauce Demo', () => {

  it('should log in, add an item to the cart, and check out', () => {
    // Visit the login page
    cy.visit('https://www.saucedemo.com/')

    // Enter username and password
    cy.get('[data-test=username]').type(loginData.username)
    cy.get('[data-test=password]').type(loginData.password)

    // Click the login button
    cy.get('[data-test=login-button]').click()

    // Verify that the user has been logged in
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')

    // Add an item to the cart
    cy.get('[data-test^="add-to-cart-"]').first().click()
    // Verify that the item was added to the cart
    cy.get('.shopping_cart_badge').should('contain', '1')

    // View the cart
    cy.get('.shopping_cart_link').click();

    // Verify that product added to the cart
    cy.get('.cart_item').should('not.be.empty');


    // Check out
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type(checkoutData.firstName)
    cy.get('[data-test="lastName"]').type(checkoutData.lastName)
    cy.get('[data-test="postalCode"]').type(checkoutData.postalCode)
    cy.get('[data-test="continue"]').click()

    // Verify the checkout pass
    cy.get('.summary_info').should('not.be.empty')
    cy.get('.title').contains('Checkout')
    
    // Finish the process
    cy.get('[data-test=finish]').click()

    // Verify that the order was successful
    cy.url().should('include', '/checkout-complete.html')
    cy.get('.complete-header').should('contain', 'Thank you for your order')

    // Go back to home page after purchase
    cy.get('[data-test="back-to-products"]').click()
  })
})
