describe('Tabs', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Tabs story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('tabs', 'default');
    });

    it('should render tabs', () => {
      cy.get('div[data-testid="default"]').should('exist');
      cy.percySnapshot('Tabs');
    });

    it('when a tab is click selected tab changes', () => {
      cy.get('div[data-testid="default"] > label:last > input').should('not.be.checked');
      cy.get('div[data-testid="default"] > label:last').click();
      cy.get('div[data-testid="default"] > label:last > input').should('be.checked');
      cy.percySnapshot('Tabs Tab Selected');
    });
  });
});
