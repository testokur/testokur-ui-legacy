describe('Checkbox', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Checkbox story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('Checkbox', 'Default');
    });
    cy.get('[data-testid="default"]').should('not.be.checked');
  });
});
