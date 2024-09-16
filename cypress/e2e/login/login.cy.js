import { loginPage } from "../../support/pages/login_page.cy";


describe("F0: Login", () => {
    it("Iniciar Sesion Exitosamente", () => {
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("freddyfernandez778@gmail.com");
        loginPage.clickContinue();
        loginPage.enterPassword("password1707");
        loginPage.clickLogin();
    });
});
