describe('navigation', () => {
  it('user can navigate through journey', () => {
    //from home page, user clicks on journey
    cy.visit('http://localhost:3000');
    cy.findByRole('link', {
      name: /new york 4 days/i
    }).click();
    //checks / unchecks boxes
    cy.contains('Empire State Buildin')
    .parent()
    .find('input[type=checkbox]')
    .check()
    //adds restaurant
    cy.get('input[name="name"]').type('Restaurant 1').should('have.value', 'Restaurant 1');
    cy.get('input[name="address"]').type('123 Main St.').should('have.value', '123 Main St.');
    cy.get('input[name="cuisineTypes"]').type('Burgers').should('have.value', 'Burgers');
    cy.get('input[name="suggestedFor"]').type('Me').should('have.value', 'Me');
    cy.get('#create').click();
    //adds note
    cy.get('input[name="note"]').type('Adding note').should('have.value', 'Adding note');
    cy.get('#notebutton').click();
  })
})
