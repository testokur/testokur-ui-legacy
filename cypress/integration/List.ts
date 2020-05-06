import createPalette from '../../src/modules/theme/createPalette';

describe('List', () => {
  before(() => {
    cy.visitStorybook();
  });

  context('given the List story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('list', 'default');
    });

    it('should render list', () => {
      cy.get('div[data-testid="default"]').should('exist');
      cy.percySnapshot('List');
    });

    it('when mouse hovers an item , item gets highlighted', () => {
      const palette = createPalette({});
      cy.get('div[data-testid="default"] > li:last').trigger('mouseover');
      cy.get('div[data-testid="default"] > li:last').should('have.css', 'background-color').and('eq', palette.cloudLight);
    });
  });
});
