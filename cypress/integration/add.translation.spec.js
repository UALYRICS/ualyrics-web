const translationPathRegex = /^\/translations\/(\w+)/;
const songPathRegex = /^\/songs\/(\w+)/;

describe('Add translation', () => {

  before(() => {
    cy.loginByCognitoApi(
      Cypress.env('username'),
      Cypress.env('password')
    )
  });

  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('to existing song', () => {
    // Find song
    cy.visit('/songs/381a9878-9fd6-4521-a292-9acba6eb20a1/translate');

    // Fill lyrics translation
    cy.get(selectors.lineTranslationInput).each(input => cy.wrap(input).type('test'));

    // Save/update translation
    cy.intercept('POST', '/graphql', (req) => {
      if (req.body.hasOwnProperty('query') && req.body.query.includes('mutation')) {
        req.alias = 'saveUpdateTranslation'
      }
    })
    cy.get(selectors.submitTranslationButton).contains('Опублікувати переклад').click();
    cy.wait('@saveUpdateTranslation');

    // Assert redirected to translation page
    cy.location('pathname').should('match', translationPathRegex);

    // Delete newly created translation
    cy.get(selectors.deleteTranslation).contains('Видалити переклад').click({force: true});

    // Verify redirected to song page
    cy.location('pathname').should('match', songPathRegex);
  });

});

const selectors = {
  currentUser: '[data-test="current-user"]',
  emailInput: 'input[name="email"]',
  passwordInput: '[id="password"]',
  addTranslationButton: '[data-test="add-translation-button"]',
  signInButton: '[data-test="sign-in-sign-in-button"]',
  lineTranslationInput: 'input[data-test="line-translation-input"]',
  submitTranslationButton: '[data-test="submit-translation-button"]',
  deleteTranslation: '[data-test="delete-translation"]',
}