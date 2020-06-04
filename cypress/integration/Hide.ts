describe('Hide', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the Hide story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('hide', 'default');
    });

    it('should render hidden span when no device selected', () => {
      cy.get('[data-testid="default"]').should('exist');
      cy.percySnapshot('Hide');
    });

    it('should hide span when it is table and it should be hidden on tablets', () => {
      cy.changeKnob('tablet', 'true');
      cy.get('[data-testid="default"]').should('be.visible');
      cy.viewport('ipad-2');
      cy.get('[data-testid="default"]').should('not.be.visible');
    });
  });
});
