describe('Button', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Button story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('button', 'default');
    });

    it('should render a default button', () => {
      cy.get('button').should('exist');
      cy.percySnapshot('Default button');
    });
  });
});
