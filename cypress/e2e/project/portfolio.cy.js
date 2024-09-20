import { loginPage } from "../../support/pages/login_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import {homePage} from "../../support/pages/home_page.cy"
import Utils from "../../support/utils.cy";
import { portfolioPage } from "../../support/pages/portfolio_page.cy";


describe("F: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("fernandezfreddy1707@gmail.com");
        loginPage.clickContinue();
        loginPage.enterPassword("password1707");
        loginPage.clickLogin();
    });

    it("TC48: POG-Verificar el CRUD de un portafolio",()=>{
        portfolioPage.createPortfolio("portafolioSimple");
        Utils.clickElement(portfolioPage.elements.SeeOptionsPortfolioButton());
        Utils.clickElement(portfolioPage.elements.RenamePortfolioOption());
        Utils.clearAndTypeText(portfolioPage.elements.RenamePortfolioText(), "portafolioRenombrado");
        Utils.clickElement(portfolioPage.elements.SaveChangeButton());
        Utils.verifyTextEquals(portfolioPage.elements.NamePprtfolioElement(), "portafolioRenombrado");
        portfolioPage.deletePortfolio("portafolioRenombrado");
    })

    
})