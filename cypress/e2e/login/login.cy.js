import { loginPage } from "../../support/pages/login_page.cy";
import data from "../../fixtures/data.json";

describe("F0: Login", () => {

    it("Iniciar Sesion Exitosamente", () => {
        cy.visit(data.URL);
        loginPage.enterEmail(data.loginData.email);
        loginPage.clickContinue();
        loginPage.enterPassword(data.loginData.password);
        loginPage.clickLogin();
    });

    it("TC : Inicio de Sesion Incorrecto", () => {
        cy.visit(data.URL);
        loginPage.enterEmail(data.loginData.wrongEmail);
        loginPage.clickContinue();  
        loginPage.verifyInvalidEmail();
        cy.visit(data.URL);
        loginPage.enterEmail(data.loginData.email);
        loginPage.clickContinue();
        loginPage.enterPassword(data.loginData.wrongPassword);
        loginPage.clickLogin();
        loginPage.verifyInvalidPassword();
    });//
});
