import { loginPage } from "../../support/pages/login_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import {homePage} from "../../support/pages/home_page.cy"
import { proyectoPageResume } from "../../support/pages/projectResume_page.cy";
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

    it("TC37: PR-Validar el flujo para la creacion de un nuevo portafolio y la asignacion de un proyecto al mismo",()=>{
        portfolioPage.createPortfolio(data.portfolio.name.simple);
        proyectoPage.createSimpleProject(data.project.name.simple);
        Utils.clickElement(portfolioPage.elements.ProjectSummary());
        Utils.clickElement(proyectoPageResume.elements.AddToPortfolioButton());
        Utils.typeAndPressEnter(proyectoPageResume.elements.AddNamePortfolioText(), data.portfolio.name.simple);
        Utils.clickElement(portfolioPage.elements.SeeAllPortfolioButton());
        Utils.searchElementByTextAndClick(portfolioPage.elements.PortfolioList(), data.portfolio.name.simple);
        Utils.verifyTextInMultipleElements(portfolioPage.elements.ListOfJobs(),data.project.name.simple);
        portfolioPage.deletePortfolio(data.portfolio.name.simple);
        proyectoPage.deleteProject(data.project.name.simple);
    })

    it("TC34: PR-Verificar el crud de mienbros con sus roles dentro de un proyecto",()=>{
        proyectoPage.createSimpleProject(data.project.name.simple);
        Utils.clickElement(portfolioPage.elements.ProjectSummary());
        proyectoPageResume.addNewMemberAndAssignRol(data.members.member1, data.roles.admin);
        proyectoPageResume.addNewMemberAndAssignRol(data.members.member2, data.roles.editor);
        proyectoPageResume.addNewMemberAndAssignRol(data.members.member3,data.roles.commentator);
        proyectoPageResume.addNewMemberAndAssignRol(data.members.member4,data.roles.lector);
        proyectoPageResume.deleteMember(data.members.member1);
        proyectoPageResume.deleteMember(data.members.member2);
        proyectoPageResume.deleteMember(data.members.member3);
        proyectoPageResume.deleteMember(data.members.member4);
        proyectoPage.deleteProject(data.project.name.simple);
    //Esta en veremos no me funciona pero tampoco estoy seguro por que falla cuando se trata de eliminar mienbros pero como a veces no se añaden ps falla
    })
})