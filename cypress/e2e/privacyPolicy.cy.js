it('testa a página de política de privacidade de forma independete', () => {
  cy.visit("./src/privacy.html");
  cy.contains('h1', "CAC TAT - Política de Privacidade").should(
    "be.visible"
  );
  cy.contains('p', 'Talking About Testing').should('be.visible');
});