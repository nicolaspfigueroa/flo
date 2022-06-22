describe('navigation', () => {
  it('user can navigate through journey', () => {
    //from home page, user clicks on journey
    cy.visit('http://localhost:3000');
    cy.findByRole('link', {
      name: /new york 4 days/i
    }).click();
    //checks / unchecks boxes
    //adds restaurant
    //adds note
  })
})