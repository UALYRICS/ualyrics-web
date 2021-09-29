describe('Search functionality', function() {
  // Setup the application state
  beforeEach(function() {
    cy.visit('/');
  });

  it('finds songs using Genius API', () => {
    // Arrange
    cy.get(selectors.searchInput).type("Somebody to love");

    // Act
    cy.get(selectors.searchButton).contains('Пошук').click();

    // Assert
    cy.get(selectors.songsList).should('have.length', 10);
  });

});

const selectors = {
  // Auth component classes
  searchInput: '[data-test="search-input"]',
  searchButton: '[data-test="search-button"]',
  songsList: '[data-test="song-card-list"] .song',
}