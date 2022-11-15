/// <reference types="cypress" />

import homePage from '../../support/PageObjects/HomePage';
import elementsPage from '../../support/PageObjects/ElementsPage';
import inputFieldAndButtonPage from '../../support/PageObjects/InputFieldAndButtonPage';

const userName = "Alex";
let textToVerify = `Your name is ${userName}`;

describe('Suite to verify Input field and Submit button', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('Text field contains entered name', () => {
    homePage.getElementsLink().click()
    elementsPage.getInputFieldLink()
      .should('be.visible')
      .click()
    inputFieldAndButtonPage.getInputNameField().type(userName)
    inputFieldAndButtonPage.getSubmitButton().click()
    inputFieldAndButtonPage.getResultTextField()
      .should('have.text', textToVerify)
  })
})
