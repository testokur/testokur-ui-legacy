describe('Badge', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Badge story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('badge', 'default');
    });

    it('should render badge', () => {
      cy.get('[data-testid="default"]').should('exist');
      cy.percySnapshot('Badge');
    });

    it('should draw badege with icon and text', () => {
      const title = 'I am the badge!';
      cy.changeKnob('Children', title);
      cy.get('[data-testid="default"]').get('svg').should('exist');
      cy.get('[data-testid="default"]').should('contain.text', title);
    });
  });
});
