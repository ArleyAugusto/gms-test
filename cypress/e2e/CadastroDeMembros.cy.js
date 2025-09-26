/// <reference types="cypress"/>

describe('US-012-funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastros de campos obrigatórios', () => {
    cy.visit('http://192.168.10.103:8080')
    cy.get('#signup-firstname').type('Arley')
    cy.get('#signup-lastname').type('Augusto')
    cy.get('#signup-email').type('arleyteete@qa.com.br')
    cy.get('#signup-phone').type('3499992258')
    cy.get('#signup-password').type('Senhadificil123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})


