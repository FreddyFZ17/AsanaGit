import { loginPage } from "../../support/pages/login_page.cy";
import { tareaPage } from "../../support/pages/tarea_page.cy";
import {home_page, homePage} from "../../support/pages/home_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import Utils from "../../support/utils.cy";
import data from "../../fixtures/data.json"


describe("F1: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit(data.URL);
        loginPage.enterEmail(data.loginData.email);
        loginPage.clickContinue();
        loginPage.enterPassword(data.loginData.password);
        loginPage.clickLogin();
        Utils.clickElement(tareaPage.elements.MyTaskButton());
        //Implementar una funcion que limpie el estado de cada testcase, es decir que no tenga filtros ni agrupaciones  
    });

    it("TC1: Verificar que se pueda crear una tarea nueva", () => {
        tareaPage.createTask({name: data.task.title.simple});
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.simple)
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.clearAndTypeText(tareaPage.elements.DescriptionText(), data.task.description.simple);
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        Utils.verifyTextInMultipleElements(tareaPage.elements.NameTaskList(), data.task.title.simple);
        tareaPage.DeleteTask(data.task.title.simple);
    });

    it("TC2: Verificar que un usuario pueda actualizar los detalles de una tarea existente", () => {
        tareaPage.createTask({name: data.task.title.simple});
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.simple)
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.clearAndTypeText(tareaPage.elements.TitleText(),data.task.title.edited);
        Utils.clearAndTypeText(tareaPage.elements.DescriptionText(), data.task.description.edited);
        Utils.typeText(tareaPage.elements.CommentTaskText(), data.task.comment);
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        Utils.clickElement(tareaPage.elements.DashboardViewButton());
        Utils.clickElement(tareaPage.elements.ListViewButton());
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(),data.task.title.edited);
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.verifyTextEquals(tareaPage.elements.DescriptionText(),data.task.description.edited);
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        tareaPage.DeleteTask(data.task.title.edited);
    });

    it("TC3: Verificar que un usuario pueda marcar una tarea como completada", () => {
        tareaPage.createTask({name: data.task.title.simple});
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.simple)
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.clickElement(tareaPage.elements.FinishTaskButton());
        Utils.clearAndTypeText(tareaPage.elements.TitleTextInDetails(), data.task.title.completed);
        Utils.clearAndTypeText(tareaPage.elements.TitleText(),data.task.title.completed);
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        tareaPage.searchAndVerifyTaskWithFilter(data.task.title.completed, data.filters.completedTask);
        tareaPage.DeleteTask(data.task.title.completed)
    });

    it("TC4: Verificar que un usuario pueda eliminar una tarea existente", () =>{
        tareaPage.createTask({name: data.task.title.simple});
        tareaPage.DeleteTask(data.task.title.simple);
        Utils.verifyElementExist(tareaPage.elements.PopUpConfirmDeleteTask());
    })

    it("TC5: Verificar la funcionalidad de añadir colaboradores y asignar otro administrador de una tarea",()=>{
        tareaPage.createTask({name: data.task.title.simple});
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.simple);
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.clickElement(tareaPage.elements.NewAdminButton());
        Utils.typeAndPressEnter(tareaPage.elements.NewAdminText(), data.members.adminEmail);
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        homePage.clickHomePage();
        cy.wait(2000);
        Utils.searchElementByTextAndClick(homePage.elements.ListMemberEmail(), data.members.adminEmail);
        Utils.verifyTextInMultipleElements(homePage.elements.NameTaskListInHome(), data.task.title.simple);
        homePage.DeleteTaskInHome(data.task.title.simple);
    })

    it("TC5: Verificar la funcionalidad de añadir colaboradores y asignar administradores de una tarea",()=>{
        tareaPage.createTask({name: data.task.title.simple});
        cy.wait(100);
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.simple);
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.clickElement(tareaPage.elements.AddOrDeleteMenberButton());
        Utils.typeAndPressEnter(tareaPage.elements.TypeNewMemberText(), data.members.member1);
        cy.wait(100);
        //Utils.clickElement(tareaPage.elements.SendInviteButton());
        cy.wait(10000);
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.simple);
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.clickElement(tareaPage.elements.AddOrDeleteMenberButton());
        Utils.verifyTextInMultipleElements(tareaPage.elements.EmailMemberInTaskList(), data.members.member1);
        tareaPage.DeleteTask(data.task.title.simple);

        //Fallo al añadir un mienbro, se buguea y no envia y no funciona, tambien falla el verificar es muy extraño ya intente de todo
    })

    it("TC6: Verificar la funcionalidad de los distintos tipos de agrupaciones",()=>{
        tareaPage.createTask({name: data.task.title.simple});
        tareaPage.searchAndVerifyTaskWithGroup(data.task.title.simple, data.groups.sections);
        tareaPage.searchAndVerifyTaskWithGroup(data.task.title.simple, data.groups.deliveryDate);
        tareaPage.searchAndVerifyTaskWithGroup(data.task.title.simple, data.groups.creator);
        tareaPage.searchAndVerifyTaskWithGroup(data.task.title.simple, data.groups.projects);
        tareaPage.searchAndVerifyTaskWithGroup(data.task.title.simple, data.groups.date);
        tareaPage.DeleteTask(data.task.title.simple);
    })

    it("TC : Verificar la funcionalidad de duplicar tarea",()=>{
        tareaPage.createTask({name: data.task.title.simple});
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.simple);
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.typeText(tareaPage.elements.DescriptionText(), data.task.description.simple);
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(),data.task.title.simple);
        Utils.clickElement(tareaPage.elements.DuplicateTaskOption());
        cy.wait(500)
        Utils.clickElement(tareaPage.elements.CreateNewTaskDuplicate());
        cy.wait(3000)
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.duplicated);
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.verifyTextEquals(tareaPage.elements.DescriptionText(), data.task.description.simple);
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        tareaPage.DeleteTask(data.task.title.duplicated);
    })

    it("TC : Verificar el filtrado rapido de tareas",()=>{
        tareaPage.createTask({name: data.task.title.simple});
        tareaPage.createTask({name: data.task.title.completed, isCompleted:true});
        tareaPage.createTask({name: data.task.title.toThisWeek, dueDate: data.date.toThisWeek})
        tareaPage.createTask({name: data.task.title.forNextWeek, dueDate: data.date.forNextWeek})
        
        tareaPage.searchAndVerifyTaskWithFilter(data.task.title.simple, data.filters.unfinishedTask);
        tareaPage.searchAndVerifyTaskWithFilter(data.task.title.completed, data.filters.completedTask);
        tareaPage.searchAndVerifyTaskWithFilter(data.task.title.toThisWeek, data.filters.toThisWeek);
        tareaPage.searchAndVerifyTaskWithFilter(data.task.title.forNextWeek, data.filters.forNextWeek);

        tareaPage.DeleteTask(data.task.title.simple);
        tareaPage.DeleteTask(data.task.title.completed);
        tareaPage.DeleteTask(data.task.title.toThisWeek);
        tareaPage.DeleteTask(data.task.title.forNextWeek);
    })

    it("TC : Verificar que se pueda añadir un nuevo campo",()=>{
        /*proyectoPage.createSimpleProject("proyectoSimple");
        Utils.clickElement(tareaPage.elements.MyTaskButton());
        tareaPage.createTask({name: "TareaParaProyecto"});
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(),"TareaParaProyecto")
        Utils.clickElement(tareaPage.elements.SeeDetailsTaskOption());
        Utils.clickElement(tareaPage.elements.AddProjectToTaskButton());
        Utils.typeAndPressEnter(tareaPage.elements.AddProjectToTaskText(), "proyectoSimple");
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        tareaPage.DeleteTask("TareaParaProyecto");
        proyectoPage.deleteProject("proyectoSimple");*/
        proyectoPage.createSimpleProject("simpleProyect");
        proyectoPage.deleteProject("simpleProject");
    })

    /*it.only("TC : ",()=>{
        tareaPage.createTask({name: "a"});
        tareaPage.DeleteTask("a");
    })*/

});
