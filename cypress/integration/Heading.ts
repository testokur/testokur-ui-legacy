describe('Heading', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Heading story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('heading', 'default');
    });

    it('should render heading', () => {
      cy.get('[data-testid="default"]').should('exist');
      cy.percySnapshot('Heading');
    });

    it('should render selected element and entered text', () => {
      const title = 'I am the title!';
      cy.changeKnob('Children', title);
      cy.changeKnob('element', 'h1');
      cy.get('h1').should('contain.text', title);
    });
  });
});
