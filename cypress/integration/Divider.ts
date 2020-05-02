describe('Divider', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Divider story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('divider', 'default');
    });

    it('should render divider', () => {
      cy.get('hr').should('exist');
      cy.percySnapshot('Divider');
    });
  });
});
