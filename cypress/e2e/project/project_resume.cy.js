import { loginPage } from "../../support/pages/login_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import {homePage} from "../../support/pages/home_page.cy"
import { proyectoPageResume } from "../../support/pages/projectResume_page.cy";
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

    it("TC37: PR-Validar el flujo para la creacion de un nuevo portafolio y la asignacion de un proyecto al mismo",()=>{
        portfolioPage.createPortfolio("portafolioParaProyecto");
        proyectoPage.createSimpleProject("proyectoParaPortafolio");
        Utils.clickElement(portfolioPage.elements.ProjectSummary());
        Utils.clickElement(proyectoPageResume.elements.AddToPortfolioButton());
        Utils.typeAndPressEnter(proyectoPageResume.elements.AddNamePortfolioText(), "portafolioParaProyecto");
        Utils.clickElement(portfolioPage.elements.SeeAllPortfolioButton());
        Utils.searchElementByTextAndClick(portfolioPage.elements.PortfolioList(), "portafolioParaProyecto");
        Utils.verifyTextInMultipleElements(portfolioPage.elements.ListOfJobs(),"proyectoParaPortafolio");
        portfolioPage.deletePortfolio("portafolioParaProyecto");
        proyectoPage.deleteProject("proyectoParaPortafolio");
    })

    it("TC34: PR-Verificar el crud de mienbros con sus roles dentro de un proyecto",()=>{
        proyectoPage.createSimpleProject("ProbarRoles");
        Utils.clickElement(portfolioPage.elements.ProjectSummary());
        proyectoPageResume.addNewMemberAndAssignRol("freddyfernandez778@gmail.com", "Administrador del proyecto");
        proyectoPageResume.addNewMemberAndAssignRol("201704849@est.umss.edu", "Editor");
        proyectoPageResume.addNewMemberAndAssignRol("correoValido@gmail.com","Autor del comentario");
        proyectoPageResume.addNewMemberAndAssignRol("hola@gmail.com","Lector");
        proyectoPageResume.deleteMember("hola@gmail.com");
        proyectoPageResume.deleteMember("201704849@est.umss.edu");
        proyectoPageResume.deleteMember("correoValido@gmail.com");
        proyectoPageResume.deleteMember("freddyfernandez778@gmail.com");
        proyectoPage.deleteProject("ProbarRoles");
    //Esta en veremos no me funciona pero tampoco estoy seguro por que falla cuando se trata de eliminar mienbros pero como a veces no se añaden ps falla
    })
})