describe('PokéAPI Berry Endpoint Tests', () => {
  const validBerryId = 1;
  const validBerryName = 'cheri';
  const invalidBerryId = 9999; // An ID that is expected to be invalid

  it('should return expected response for a valid berry ID', () => {
    cy.request(`https://pokeapi.co/api/v2/berry/${validBerryId}/`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', validBerryId);
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('growth_time');
      expect(response.body).to.have.property('max_harvest');
      expect(response.body).to.have.property('natural_gift_power');
      expect(response.body).to.have.property('size');
      expect(response.body).to.have.property('smoothness');
      expect(response.body).to.have.property('soil_dryness');
    });
  });

  it('should return expected response for a valid berry name', () => {
    cy.request(`https://pokeapi.co/api/v2/berry/${validBerryName}/`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', validBerryName);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('growth_time');
      expect(response.body).to.have.property('max_harvest');
      expect(response.body).to.have.property('natural_gift_power');
      expect(response.body).to.have.property('size');
      expect(response.body).to.have.property('smoothness');
      expect(response.body).to.have.property('soil_dryness');
    });
  });

  it('should return an error for an invalid berry ID', () => {
    cy.request({
      url: `https://pokeapi.co/api/v2/berry/${invalidBerryId}/`,
      failOnStatusCode: false // 
    }).then((response) => {
      console.log(response.body); // Log the response body
      expect(response.status).to.eq(404);
    });
  });
});