/// <reference types="cypress" />

describe('Example JS Test', () => {
  it('open cypress github', () => {
    cy.visit('https://medium.com/cypress-io-thailand')
    cy.title().should('eq', 'Cypress.io Thailand – Medium')
  })
})