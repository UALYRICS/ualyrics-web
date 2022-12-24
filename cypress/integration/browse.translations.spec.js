describe('Browse translations', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('finds artist by first letter', () => {
    // Click on letter 'K'
    cy.get(selectors.letterK).contains('K').click();

    // Assert artist found
    cy.contains(selectors.artistName, 'Kid Cudi').should('exist');
  });

  it('finds translation by first letter, name and song title', () => {
    // Select letter 'K'
    cy.get(selectors.firstLetterSelect).select('K');
    // Select artist
    cy.get(selectors.artistTitleSelect).select('Kid Cudi');
    // Select song
    cy.get(selectors.songSelect).select('Beautiful Trip');
    // Go to translation
    cy.get(selectors.goToTranslationButton).contains('Перейти').click();

    // Assert translation rendered
    cy.location('pathname').should('match', translationPathRegex);
  });

  xit('finds recently added translation', () => {
    // Click show more
    cy.get(selectors.showMoreButton).contains('Показати більше').click();

    // Assert translation found
    cy.contains(selectors.recentlyAddedTitle, 'Beautiful Trip').should('exist');
  });
});

const translationPathRegex = /^\/translations\/(\w+)/;

const selectors = {
  letterK: '[data-test="first-letter-K"]',
  artistName: '[data-test="artist-name"]',
  firstLetterSelect: '[data-test="first-letter-select"]',
  artistTitleSelect: '[data-test="artist-title-select"]',
  songSelect: '[data-test="song-select"]',
  goToTranslationButton: '[data-test="go-to-translation-button"]',
  showMoreButton: '[data-test="show-more-button"]',
  recentlyAddedTitle: '[data-test="recently-added-title"]',
}