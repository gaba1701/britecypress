describe('IMDb Nicolas Cage Profile Test', () => {
  beforeEach(() => {
    cy.visit('https://www.imdb.com');
  });

  it('should search for Nicolas Cage and access his profile', () => {
    // Search for Nicolas Cage
    cy.get('#suggestion-search').type('Nicolas Cage{enter}');
    cy.contains('Nicolas Cage').click();

    // Ensure we are on the Nicolas Cage profile page by url ID and name on the page
    cy.url().should('include', '/name/nm0000115/');

  });

  it('should unfold the Upcoming tab and click on the first movie with Completed tag', () => {
    // Navigate to Nicolas Cage's profile directly
    cy.visit('https://www.imdb.com/name/nm0000115/');

    // Click on Accept Terms and Conditions
    cy.get('[data-testid="accept-button"]')
    cy.contains('Accept').click();

    // Find and open the "Upcoming" section
    cy.get('[data-testid="accordion-item-actor-upcoming-projects"]')
    cy.contains('Upcoming').click();


    // Click on the first film in the "Upcoming" section
    cy.get('[data-testid="accordion-item-actor-upcoming-projects"]')
      .parent() // Traverse to parent to ensure we can find the list
      .next() // Move to the next sibling which should be the list
    cy.get('[data-testid="nm_flmg_unrel_credit_actor_1"]')
      //.find('.ipc-metadata-list-summary-item__t') 
      .first() // Get the first film in the list
      .click() // Click on the first film

    // Ensure we are on the correct movie page
    cy.url().should('include', '/title/');
  });
});