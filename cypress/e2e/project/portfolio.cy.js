import { loginPage } from "../../support/pages/login_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import {homePage} from "../../support/pages/home_page.cy"
import Utils from "../../support/utils.cy";
import { portfolioPage } from "../../support/pages/portfolio_page.cy";
import data from "../../fixtures/data.json"
import { tareaPage } from "../../support/pages/tarea_page.cy";

describe("F: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit(data.URL);
        loginPage.enterEmail(data.loginData.email);
        loginPage.clickContinue();
        loginPage.enterPassword(data.loginData.password);
        loginPage.clickLogin();
    });

    it("TC48: POG-Verificar el CRUD de un portafolio",()=>{
        portfolioPage.createPortfolio(data.portfolio.name.simple);
        Utils.clickElement(portfolioPage.elements.SeeOptionsPortfolioButton());
        Utils.clickElement(portfolioPage.elements.RenamePortfolioOption());
        Utils.clearAndTypeText(portfolioPage.elements.RenamePortfolioText(), data.portfolio.name.edited);
        Utils.clickElement(portfolioPage.elements.SaveChangeButton());
        Utils.verifyTextEquals(portfolioPage.elements.NamePprtfolioElement(), data.portfolio.name.edited);
        portfolioPage.deletePortfolio(data.portfolio.name.edited);
    })

    it("TC :Verificar la funcionalidad del buscador de la aplicacion",()=>{
        Utils.clickElement(tareaPage.elements.MyTaskButton());
        tareaPage.createTask({name: data.task.title.simple});
        proyectoPage.createSimpleProject(data.project.name.simple);
        portfolioPage.createPortfolio(data.portfolio.name.simple);
        homePage.verifyElementSearch(data.task.title.simple, data.item.task);
        homePage.verifyElementSearch(data.project.name.simple, data.item.project);
        homePage.verifyElementSearch(data.portfolio.name.simple, data.item.portfolio);
        tareaPage.DeleteTask(data.task.title.simple);
        proyectoPage.deleteProject(data.project.name.simple);
        portfolioPage.deletePortfolio(data.portfolio.name.simple);

    })

    
})