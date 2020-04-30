describe('Select', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Select story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('select', 'default');
    });

    it('should render select', () => {
      cy.get('select').should('exist');
      cy.percySnapshot('select');
    });

    it('when a different option is chosen then select value changes', () => {
      cy.get('select').select('Fourth item').should('have.value', '4');
    });
  });
});
