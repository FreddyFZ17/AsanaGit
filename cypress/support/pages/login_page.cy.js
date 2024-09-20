import Utils from '../utils.cy.js';


class LoginPage {
    
    elements = {
        EmailText: () => cy.get("input[type='email']"),
        ContinueButton: () => cy.get("form[class='LoginEmailForm']>div[role]"),
        PasswordText: () => cy.get("input[type='password']"),
        LoginButton: () => cy.get("div[role='button']:nth-child(3)"),
        InvalidEmailMessage:()=>cy.get("div[role='alert']"),
        InvalidPasswordMessage:()=>cy.get("div[role='alert']>div>p:nth-child(2)"),
    };

    
    enterEmail(email) {
        Utils.typeText(this.elements.EmailText(), email);
    }

    clickContinue() {
        Utils.clickElement(this.elements.ContinueButton());
    }

    enterPassword(password) {
        Utils.typeText(this.elements.PasswordText(), password);
    }

    clickLogin() {
        Utils.clickElement(this.elements.LoginButton());
    }

    verifyInvalidEmail(){
        Utils.verifyTextEqualsAny(this.elements.InvalidEmailMessage(),'Please enter a valid email address.', 'Ingresa una dirección de email válida.')
    }

    verifyInvalidPassword(){
        Utils.verifyTextEqualsAny(this.elements.InvalidPasswordMessage(),"The username or password is not correct.","El nombre de usuario o contraseña son incorrectos.")
    }
}

export const loginPage = new LoginPage();
