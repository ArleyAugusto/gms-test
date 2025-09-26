/// <reference types="cypress"/>

describe('US-015 - Recomendações', () => {
  it('Exibir recomendações automáticas do dia', () => {
   cy.visit('http://192.168.10.103:8080');
   cy.contains('RECOMENDAÇÕES DO DIA');
   cy.get('#recommendations-section').should('be.visible');


  })
})

