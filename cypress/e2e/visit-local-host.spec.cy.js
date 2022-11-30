describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('a').should('contains.text', 'Learn React');
  })
})