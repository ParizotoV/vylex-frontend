/// <reference types="cypress" />


const host = Cypress.env('host') ?? ''

describe('<Login />', () => {
  before(() => {
    cy.clearAllLocalStorage()
    cy.visit(`${host}/login`)
  })

  it('Should render page', () => {
    cy.get('text').contains('Seja bem vindo!').should('exist')
    cy.get('text').contains('Acesse o gerenciador de alunos').should('exist')
    cy.get('text').contains('Esqueceu sua senha?').should('exist')
    cy.get('text').contains('Não tem uma conta? Cadastre-se').should('exist')
    cy.get('button').contains('ENTRAR').should('exist')
  })
})

export { }

