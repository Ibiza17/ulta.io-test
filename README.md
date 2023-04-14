## Manual test cases for 'https://www.saucedemo.com/'

## Execution instructions

1) Download the code
2) Open your Cypress Test Runner by running npm run cy:open in your terminal or by clicking the Cypress icon in your project's toolbar.
3) Click on the purchase-flow.js file to run the test.
4) The Cypress Test Runner will open a browser window and navigate to the Sauce Demo website.
5) The test will then log in using the username and password provided in loginData.json.
6) An item will be added to the cart, and the test will verify that the item was added to the cart.
7) The test will then proceed to the checkout process, filling in the details provided in checkoutData.json.
8) The checkout process will be completed, and the test will verify that the order was successful.
9) Finally, the test will navigate back to the home page.

This Cypress code will automate the process of logging in to the Sauce Demo website, adding an item to the cart, checking out, and verifying that the order was successful. The test uses cy.get to select elements on the page and cy.type and cy.click to interact with those elements. It also uses cy.url and cy.contains to verify that the correct pages and elements are displayed at each step of the process.

### Test Case 1: Verify successful login with valid credentials

### Steps:

1) Navigate to the URL 'https://www.saucedemo.com/'
2) Enter a valid username(standard_user) and password(secret_sauce)
3) Click the Login button

### Expected Result:

1) User should be able to successfully log in with valid credentials
2) The URL should include '/inventory.html'
3) The page should display the text 'Products'

### Actual Result:

1) Login passed successfully and we can see the products page

### Test Case 2: Verify that login passed successfully
1) Verify that the user has been logged in by checking if the URL includes '/inventory.html'
2) Verify that the page contains the text 'Products'

### Steps:
1) From baseURL address check if it contains /inventory, also check if title contains products

### Expected Result:

1) The login should pass and we should see the products

### Actual Result:

1) We able to see the list of the products after login

### Test Case 3: Add item to the cart

### Steps:

1) From the products page click on the first product at the list
2) Click on the 'Add to Cart' button

### Expected Result:

1) User should be able to add an item to the cart successfully
2) The shopping cart badge should display the number '1'
3) The cart item list should not be empty

### Actual Result:

1 The test passed successfully

### Test Case 4: Verify that item added to the cart

### Steps:

1) Verify that the shopping cart badge displays the number '1'
2) Click on the shopping cart link
3) Verify that the cart item list is not empty

### Expected Result:

1) Only one product should added to the cart

### Actual Result:

1) Sauce labs backpack added to the cart because he is the first on the list

### Test Case 5: Verify successful checkout process

### Steps:

1) Click on the 'Checkout' button
2) Enter the required details such as First Name(david), Last Name(test), and Postal Code(121212)
3) Click on the 'Continue' button
4) Verify that the summary information is displayed
5) Verify that the page contains the text 'Checkout'
6) Click on the 'Finish' button
7) Verify that the URL includes '/checkout-complete.html'
8) Verify that the page contains the text 'Thank you for your order'

### Expected Result:

1) User should be able to successfully complete the checkout process
2) The summary information should be displayed
3) The page should contain the text 'Checkout'
4) User should be redirected to the checkout-complete page after clicking the 'Finish' button
5) The page should contain the text 'Thank you for your order'

### Actual Result:

1) The purchase process successfully passed and we redirected to the homa page after the purchase.

### Test Case 6: Go back to home page after successful purchase

### Steps:

1) Click on back home button after the purchase

### Expected Result:
1) The user should be redirect to the /inventory url which is the procusts page

### Actual result:
1) The products page redirected successfully

## I would improve:

1) To make the test more readable and reusable, i would consider extracting commonly used test steps into custom commands, e.g., logging in, adding an item to the cart, checking out, etc.
2) The current test only validates a single product added to the cart, i would consider adding additional tests for adding multiple products, removing items from the cart, updating the quantity, etc.
3) The test only covers a happy path scenario. It is important to include negative testing scenarios such as entering invalid login credentials or incorrect information during checkout to ensure the application handles them appropriately.

4. I would consider using fixtures for reusable data, such as login credentials and checkout information, to keep the test code clean and easy to read.
