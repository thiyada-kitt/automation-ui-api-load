describe('Cypress UI smoke', () => {
  it('shows Example Domain heading', () => {
    cy.visit('/');
    cy.contains('h1', 'Example Domain').should('be.visible');
  });
});
