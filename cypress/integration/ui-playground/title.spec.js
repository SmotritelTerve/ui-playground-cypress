const blogUrl = "https://ui-playground.blogspot.com/";
const blogTitle = "UI Playground";

describe('smoke test suite for UI Playground blog', () => {
    beforeEach(() => {

      cy.visit(blogUrl)
    })
  
    it('the blog title should be equal UI Playground', () => {

      cy.title().should('eq', blogTitle);

    })
  })
  