/// <reference types="cypress" />

const blogUrl = "https://ui-playground.blogspot.com/";
const userName = "Alex";
let textToVerify = `Your name is ${userName}`;

describe('Suite to verify Input field and Submit button', () => {
    beforeEach(() => {

      cy.visit(blogUrl)
    })
  
    it('Text field contains entered name', () => {
      cy.get("#PageList2 a[href*='elements']").click()
      cy.get("li a[href*='input-field-and-button']")
      .should('be.visible')
      .click()
      cy.get("#user").type(userName)
      cy.get("button[name=submit_action]").click()
      cy.get('#enteredName')
      .should('have.text', textToVerify)
    })
  })
  