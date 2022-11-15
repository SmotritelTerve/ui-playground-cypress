const blogTitle = "UI Playground";

describe('smoke test suite for UI Playground blog', () => {
    beforeEach(() => {

      cy.visit("/")
    })
  
    it('the blog title should be equal UI Playground', () => {

      cy.title().should('eq', blogTitle);

    })
  })
  