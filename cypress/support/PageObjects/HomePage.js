const elementsLinkCSS = "#PageList2 a[href*='elements']";

class HomePage {

    getElementsLink() {
        return cy.get(elementsLinkCSS);
    }
}

const homePage = new HomePage();

export default homePage;