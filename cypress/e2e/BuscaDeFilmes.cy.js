/// <reference types="cypress"/>

describe('US-001 - Busca de filmes', () => {
  it('Deve fazer a busca com sucesso de algum título', () => {
    cy.visit('http://192.168.10.103:8080')
    cy.get('#search-input').type('The Matrix')
    cy.get('#search-button').click()
    cy.get('#results-section').should('be.visible')
  })

  it('Deve limpar uma busca', () => {
    cy.visit('http://192.168.10.103:8080')
    cy.get('#search-input').type('The Matrix')
    cy.get('#search-button').click()
    cy.get('#clear-button').click()
    cy.get('#search-input').should('have.value', '')
    })

     it('Deve buscar um filme inexistente', () => {
    cy.visit('http://192.168.10.103:8080')
    cy.get('#search-input').type('hot dog louco')
    cy.get('#search-button').click()
    cy.contains('Filme não encontrado.');
    })
})

