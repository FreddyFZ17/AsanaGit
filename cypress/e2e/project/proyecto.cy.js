import { loginPage } from "../../support/pages/login_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import {homePage} from "../../support/pages/home_page.cy"
import Utils from "../../support/utils.cy";
import { tareaPage } from "../../support/pages/tarea_page.cy";
import { proyectoPageResume } from "../../support/pages/projectResume_page.cy";
import data from "../../fixtures/data.json"

describe("F1: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit(data.URL);
        loginPage.enterEmail(data.loginData.email);
        loginPage.clickContinue();
        loginPage.enterPassword(data.loginData.password);
        loginPage.clickLogin();
    });

    it("TC1: Validar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en un proyecto", () => {
        proyectoPage.createSimpleProject(data.project.name.simple)
        Utils.verifyTextInMultipleElements(proyectoPage.elements.ProjectListInNavVar(), data.project.name.simple);
        Utils.searchElementByTextAndClick(proyectoPage.elements.ProjectListInNavVar(),data.project.name.simple);
        Utils.clickElement(proyectoPage.elements.OptionsProjectButton());
        Utils.clickElement(proyectoPage.elements.EditDetailsProjectOption());
        Utils.clearAndTypeText(proyectoPage.elements.EditNameProjectText(),data.project.name.edited);
        Utils.clearAndTypeText(proyectoPage.elements.DescriptionProjectText(),data.project.description);
        Utils.clickElement(proyectoPage.elements.CloseEdiDetailsProject())
        Utils.clickElement(tareaPage.elements.MyTaskButton());
        Utils.searchElementByTextAndClick(proyectoPage.elements.ProjectListInNavVar(),data.project.name.edited);
        Utils.clickElement(proyectoPage.elements.OptionsProjectButton());
        Utils.clickElement(proyectoPage.elements.EditDetailsProjectOption());
        Utils.verifyTextEquals(proyectoPage.elements.DescriptionProjectText(), data.project.description);
        Utils.clickElement(proyectoPage.elements.CloseEdiDetailsProject())
        proyectoPage.deleteProject(data.project.name.edited)
    });

    it("TC2: Verificar que se pueda crear un proyecto usando una plantilla predefinida", ()=>{
        proyectoPage.createProjectWithTemplate(data.project.name.withListTemplate, data.templateType.list);
        Utils.verifyTextInMultipleElements(proyectoPage.elements.NameSectionListProject(),data.sections.milestones);
        proyectoPage.createProjectWithTemplate(data.project.name.withDashboardTemplate, data.templateType.dashboard);
        Utils.verifyElementExist(proyectoPage.elements.SecondSectionToDashboard());
        proyectoPage.createProjectWithTemplate(data.project.name.withScheduleTemplate, data.templateType.schedule);
        Utils.verifyTextInMultipleElements(proyectoPage.elements.NameTaskInScheduleList(), data.task.title.scheduleExample);
        proyectoPage.deleteProject(data.project.name.withListTemplate);
        proyectoPage.deleteProject(data.project.name.withDashboardTemplate);
        proyectoPage.deleteProject(data.project.name.withScheduleTemplate);
    })

    it("TC3: Verificar que se pueda editar los detalles de un proyecto",()=>{
        proyectoPage.createSimpleProject(data.project.name.simple);
        Utils.clickElement(proyectoPage.elements.OptionsProjectButton());
        Utils.clickElement(proyectoPage.elements.EditDetailsProjectOption());
        Utils.clearAndTypeText(proyectoPage.elements.EditNameProjectText(),data.project.name.edited);
        Utils.clickElement(proyectoPage.elements.DeliveryDateProjectButton());
        proyectoPage.typeDateDeliveryProject(data.date.forNextWeek);
        Utils.clearAndTypeText(proyectoPage.elements.DescriptionProjectText(),data.project.description);
        Utils.clickElement(proyectoPage.elements.CloseEdiDetailsProject())
        Utils.clickElement(proyectoPageResume.elements.ProjectResumeButton());
        cy.wait(2000);
        Utils.verifyTextEquals(proyectoPageResume.elements.DescriptionProjectElement(),data.project.description);
        proyectoPage.deleteProject(data.project.name.edited);
    })

    /*it("",()=>{
        proyectoPage.createSimpleProject("proyectoSimple");
        //proyectoPage.deleteProject("proyectoSimple");
    })*/

})  