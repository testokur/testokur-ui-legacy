describe('Checkbox', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Checkbox story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('checkbox', 'default');
    });

    it('when click on label input is checked', () => {
      cy.get('[data-testid="default"]').get('input').should('not.be.checked');
      cy.get('[data-testid="default"]').get('span').click();
      cy.get('[data-testid="default"]').get('input').should('be.checked');
      cy.percySnapshot('Checkbox checked');
    });
  });
});
