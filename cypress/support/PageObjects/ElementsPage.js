const inputFieldLinkCSS = "li a[href*='input-field-and-button']";

class ElementsPage {

    getInputFieldLink() {
        return cy.get(inputFieldLinkCSS);
    }
}

const elementsPage = new ElementsPage();

export default elementsPage;