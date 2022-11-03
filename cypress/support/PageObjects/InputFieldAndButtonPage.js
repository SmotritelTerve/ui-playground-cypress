const inputNameFieldCSS = "#user";
const submitButtonCSS = "button[name=submit_action]";
const resultTextFieldCSS = "#enteredName";

class InputFieldAndButtonPage {

    getInputNameField() {
        return cy.get(inputNameFieldCSS);
    }
    getSubmitButton() {
        return cy.get(submitButtonCSS);
    }
    getResultTextField() {
        return cy.get(resultTextFieldCSS);
    }
}

const inputFieldAndButtonPage = new InputFieldAndButtonPage();

export default inputFieldAndButtonPage;