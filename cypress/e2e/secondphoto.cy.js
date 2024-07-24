describe('IMDb Top 250 TV Shows - Breaking Bad Photos', () => {
  it('should navigate to Breaking Bad and click on the 2nd Danny Trejo photo', () => {
    // Go to IMDb.com
    cy.visit('https://www.imdb.com/');

    //Accept Terms & Conditions
    cy.get('[data-testid="accept-button"]').then(($button) => {
      if ($button.length) {
        cy.wrap($button).click();
      }
    })

    // Unfold the Menu button and navigate to Top 250 TV Shows
    cy.get('#imdbHeader-navDrawerOpen > span').contains('Menu').click();
    cy.contains('Top 250 TV Shows').click();

    // // Ensure the Top 250 TV Shows page is loaded
    cy.get('a[href*="/chart/toptv"]').should('exist');

    // Click on Breaking Bad
    cy.contains('Breaking Bad').click();

    // // Go to the Photos section
    cy.get('[data-testid="hero__photo-link"]').click();

    // Switch to gallery
    cy.get('[data-testid="mv-gallery-button"]').click();

    // Select filter
    cy.get('[data-testid="image-chip-dropdown-test-id"]').click();

    // Select only Danny Trejo's photos [could be 6 or any other number]
    cy.get('select[id="Person-filter-select-dropdown"]')
      .find("option").contains("Danny Trejo")
      .then((selectOption) => {
        cy.get('select[id="Person-filter-select-dropdown"]').select(selectOption.text());
      });

    // Close promt and apply search
    cy.get('[data-testid="promptable__x"]').click();
    cy.wait(5000) // ugly hack, should be a way to wait for filter to finish

    // Select 2nd photo from the list
    cy.get('[data-testid="sub-section-images"]>div>a>img')
      .eq(1)
      .click();
  });
});