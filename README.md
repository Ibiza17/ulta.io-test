# Manual test cases for 'https://www.saucedemo.com/'

###Test Case 1: Verify successful login with valid credentials

###Steps:

1) Navigate to the URL 'https://www.saucedemo.com/'
2) Enter a valid username(standard_user) and password(secret_sauce)
3) Click the Login button

###Expected Result:

1) User should be able to successfully log in with valid credentials
2) The URL should include '/inventory.html'
3) The page should display the text 'Products'

###Actual Result:

1) Login passed successfully and we can see the products page

### Test Case 2: Verify that login passed successfully
1) Verify that the user has been logged in by checking if the URL includes '/inventory.html'
2) Verify that the page contains the text 'Products'

###Steps:
1) From baseURL address check if it contains /inventory, also check if title contains products

###Expected Result:

1) The login should pass and we should see the products

###Actual Result:

1) We able to see the list of the products after login

###Test Case 3: Add item to the cart

###Steps:

1) From the products page click on the first product at the list
2) Click on the 'Add to Cart' button

###Expected Result:

1) User should be able to add an item to the cart successfully
2) The shopping cart badge should display the number '1'
3) The cart item list should not be empty

###Actual Result:

1 The test passed successfully

###Test Case 4: Verify that item added to the cart

###Steps:

1) Verify that the shopping cart badge displays the number '1'
2) Click on the shopping cart link
3) Verify that the cart item list is not empty

###Expected Result:

1) Only one product should added to the cart

###Actual Result:

1) Sauce labs backpack added to the cart because he is the first on the list

###Test Case 5: Verify successful checkout process

###Steps:

1) Click on the 'Checkout' button
2) Enter the required details such as First Name(david), Last Name(test), and Postal Code(121212)
3) Click on the 'Continue' button
4) Verify that the summary information is displayed
5) Verify that the page contains the text 'Checkout'
6) Click on the 'Finish' button
7) Verify that the URL includes '/checkout-complete.html'
8) Verify that the page contains the text 'Thank you for your order'

###Expected Result:

1) User should be able to successfully complete the checkout process
2) The summary information should be displayed
3) The page should contain the text 'Checkout'
4) User should be redirected to the checkout-complete page after clicking the 'Finish' button
5) The page should contain the text 'Thank you for your order'

###Actual Result:

1) The purchase process successfully passed and we redirected to the homa page after the purchase.

Test Case 6: Go back to home page after successful purchase

###Steps:

1) Click on back home button after the purchase

###Expected Result:
1) The user should be redirect to the /inventory url which is the procusts page

###Actual result:
1) The products page redirected successfully
