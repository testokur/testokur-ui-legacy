describe('MaskedInputField', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the WithPhoneMask story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('maskedinputfield', 'with-phone-mask');
    });

    it('should render a input', () => {
      cy.get('input').should('exist');
      cy.percySnapshot('MaskedInputField');
    });

    it('should format phone number', () => {
      cy.get('input').type('5544205163').should('have.value', '(554) 420-5163');
    });
  });
});
