/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select meta tag element
       * @example cy.metaTag('og:image')
      */
      metaTag(property: string): Chainable<Element>
    }
  }
}

/**
 * Yield meta tag element
 * @param property meta tag property
 * @example metaTag('og:image') => get meta element
 */
export function metaTag(property: string): any {
  return cy.get(`meta[property="${property}"]`)
}

Cypress.Commands.add('metaTag', metaTag)