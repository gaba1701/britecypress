describe('IMDb Top Box Office Rating Test', () => {
  it('Navigates to Top Box Office and rates a movie', () => {
    // Set the viewport size to a larger size, e.g., 1920x1080
    cy.viewport(1920, 1080)

    // Visit IMDb website
    cy.visit('https://www.imdb.com/')

    cy.get('[data-testid="accept-button"]').then(($button) => {
      if ($button.length) {
        cy.wrap($button).click()
      }
    })

    // Unfold the Menu and navigate to the Top Box Office section
    cy.get('#imdbHeader-navDrawerOpen > span').contains('Menu').click()
    cy.contains('Top Box Office').click()

    // Ensure the Top Box Office page is loaded
    cy.url().should('include', '/chart/boxoffice')

    // Click on the 2nd item on the Top Box Office list
    cy.get('.ipc-metadata-list-summary-item:nth-child(2)').find("div.cli-poster-container").click()

    // Ensure the movie page is loaded
    cy.url().should('include', '/title/')

    // Click on the IMDb Rating button
    cy.get('div[data-testid="hero-rating-bar__user-rating__unrated').eq(0).click()

    // Interact with the rating stars
    cy.get('button.ipc-starbar__rating__button[role="button"][aria-label="Rate 5"]').click({ force: true })

    // Submit the rating
    cy.get('div.ipc-rating-prompt__rating-container').contains('Rate').click()
  })
})