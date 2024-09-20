import { loginPage } from "../../support/pages/login_page.cy";


describe("F0: Login", () => {
    it("Iniciar Sesion Exitosamente", () => {
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("fernandezfreddy1707@gmail.com");
        loginPage.clickContinue();
        loginPage.enterPassword("password1707");
        loginPage.clickLogin();
    });

    it("TC : Inicio de Sesion Incorrecto",()=>{
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("correoinvalido");
        loginPage.clickContinue();
        loginPage.verifyInvalidEmail();
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("fernandezfreddy1707@gmail.com");
        loginPage.clickContinue();
        loginPage.enterPassword("InvalidPassword");
        loginPage.clickLogin();
        loginPage.verifyInvalidPassword();
    })
});
