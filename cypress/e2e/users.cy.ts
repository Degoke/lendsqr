describe('users', () => {
  it('should navigate to the users page', () => {
    cy.visit('http://localhost:3000/users')
    cy.get('h1').contains('Users')
  })
})

export {}
