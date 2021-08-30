describe('Search functionality', function() {
  // Step 1: setup the application state
  beforeEach(function() {
    cy.visit('/');
  });
  
  describe('Search bar', () => {
    it('finds songs using Genius API', () => {
      // Arrange
      cy.get(selectors.searchInput).type("Somebody to love");

      // Act
      cy.get(selectors.searchButton).contains('Пошук').click();

      // Assert
      cy.get(selectors.songsList).should('have.length', 10);
    });
  });

});
export const selectors = {
  // Auth component classes
  searchInput: '[data-test="search-input"]',
  searchButton: '[data-test="search-button"]',
  songsList: '[data-test="song-card-list"] .song',
}