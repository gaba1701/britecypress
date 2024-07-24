describe('IMDb Born Today Section - Celebrities Born Yesterday', () => {
  it('should navigate to Celebrities born yesterday and take a screenshot of the 3rd name', () => {
    // Set the viewport size to a larger size, e.g., 1920x1080
    cy.viewport(1920, 1080)

    // Go to IMDb.com
    cy.visit('https://www.imdb.com/');

    //Accept Terms & Conditions
    cy.get('[data-testid="accept-button"]').then(($button) => {
      if ($button.length) {
        cy.wrap($button).click()
      }
    })
    // Unfold the Menu button and navigate to the Born Today section
    cy.get('#imdbHeader-navDrawerOpen > span').contains('Menu').click()
    cy.contains('Born Today').click()

    // Delete the default search and adding current date to the selector
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${day}`; // Format: MM-DD

    // Set the date to the current date
    cy.get(`[data-testid="selected-input-chip-list-birthday-${formattedDate}"]`).click(); // Or use other actions as needed

    // Unfold Birthday and search for Celebrities born yesterday
    cy.contains('Birthday').click(); // Click on Birthday section

    // Enter input field and writing yesterday date


    const getFormattedYesterdayDate = () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(yesterday.getDate()).padStart(2, '0');
      return `${month}-${day}`; // Format: MM-DD
    }

    // Get formatted yesterday's date
    const formattedDateYesterday = getFormattedYesterdayDate();

    cy.get('[data-testid="birthday-input-test-id"]').click().type(formattedDateYesterday).type('{enter}')

    cy.get('[data-testid="adv-search-get-results"]').click()

    // Click on the 3rd name in the list
    var thirdElement = cy.get('.ipc-metadata-list-summary-item:nth-child(3)').find("div.ipc-title");
    thirdElement.click();

    //Take a screenshot
    cy.screenshot('full-page-screenshot');
  });
});