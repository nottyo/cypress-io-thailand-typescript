declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Yield meta tag element
       * @memberof Cypress.Chainable
       * @example
       * cy.metaTag('og:image').should('have.attr', 'content');
       */
      metaTag: (property: string) => Chainable<Element>
    }
  }
}

/**
 * Yield meta tag element
 * @param property meta tag property
 * @example metaTag('og:image') => get meta element
 */
export const metaTag = (property: string) => {
  return cy.get(`meta[property="${property}"]`)
}

Cypress.Commands.add('metaTag', metaTag)