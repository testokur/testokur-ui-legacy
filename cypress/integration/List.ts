describe('List', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the List story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('list', 'default');
    });

    it('should render list', () => {
      cy.get('ul[data-testid="default"]').should('exist');
      cy.percySnapshot('List');
    });
  });
});
