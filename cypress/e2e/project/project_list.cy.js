import { loginPage } from "../../support/pages/login_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import {homePage} from "../../support/pages/home_page.cy"
import Utils from "../../support/utils.cy";
import { portfolioPage } from "../../support/pages/portfolio_page.cy";
import data from "../../fixtures/data.json"

describe("F: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit(data.URL);
        loginPage.enterEmail(data.loginData.email);
        loginPage.clickContinue();
        loginPage.enterPassword(data.loginData.password);
        loginPage.clickLogin();
    });

    it("TC40: PL-Verificar el CRUD de una tarea creada en este proyecto",()=>{
        proyectoPage.createSimpleProject(data.project.name.simple);
        proyectoPage.deleteProject(data.project.name.simple);
    })

    
})