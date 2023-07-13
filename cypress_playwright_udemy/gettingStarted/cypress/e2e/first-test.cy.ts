describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:9001/');
    cy.get('li').should('have.length', 6);
  });
});
