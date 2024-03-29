describe('Login functionality', () => {
  it('works for a non federated user', () => {
    cy.visit('/');

    // Click 'Login' button
    cy.get(selectors.loginButton).contains('Увійти').click();

    // Verify we are on login page
    cy.location('pathname').should('eq', '/');

    //Fill in username/password
    cy.get(selectors.username).first().type(Cypress.env('USERNAME'));
    cy.get(selectors.password).first().type(Cypress.env('PASSWORD'));

    // Click 'Login' button
    cy.get('button[type="submit"]').contains('Увійти').click();


    // Assert we are on home page
    cy.location('pathname').should('eq', '/');

    // Assert we are logged in
    cy.get(selectors.currentUser).contains('IT');
  });
});

const selectors = {
  loginButton: '[data-test="login-button"]',
  username: 'input[name="username"]',
  password: 'input[name="password"]',
  currentUser: '[data-test="current-user"]',
}