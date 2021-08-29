describe('Authenticator:', function() {
  // Step 1: setup the application state
  beforeEach(function() {
    cy.visit('/');
  });
  
  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      // Step 2: Take an action (Sign in)
      cy.get(selectors.searchInput).type("Somebody to love");
      cy.get(selectors.searchButton).contains('Пошук').click();

      // Step 3: Make an assertion (Check for sign-out text)
        //cy.get(selectors.signOutButton).contains('Sign Out');
    });
  });

});
export const selectors = {
  // Auth component classes
  searchInput: '[data-test="search-input"]',
  searchButton: '[data-test="search-button"]'
}