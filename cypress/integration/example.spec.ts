/// <reference types="cypress" />

describe('sample test with typescript', () => {
  beforeEach(() => {
    cy.visit('https://medium.com/cypress-io-thailand')
  })

  it('open cypress thailand medium blog', () => {
    cy.title().should('eq', 'Cypress.io Thailand – Medium')
  })

  it('check og:image', () => {
    const ogImageUrl = 'https://cdn-images-1.medium.com/max/1200/1*UNOzsNR5s80Mi94gnMyJTQ.png'
    cy.metaTag('og:image').should('have.attr', 'content', ogImageUrl)
  })
})