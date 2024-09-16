import { typeText, clickElement } from './functions.cy.js';

class LoginPage {
    
    elements = {
        EmailText: () => cy.get("input[type='email']"),
        ContinueButton: () => cy.get("form[class='LoginEmailForm']>div[role]"),
        PasswordText: () => cy.get("input[type='password']"),
        LoginButton: () => cy.get("div[role='button']:nth-child(3)")
    };

    
    enterEmail(email) {
        typeText(this.elements.EmailText(), email);
    }

    clickContinue() {
        clickElement(this.elements.ContinueButton());
    }

    enterPassword(password) {
        typeText(this.elements.PasswordText(), password);
    }

    clickLogin() {
        clickElement(this.elements.LoginButton());
    }
}

export const loginPage = new LoginPage();
