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

    it("TC :Verificar que se pueda añadir una tarea creada a un proyecto", ()=>{
        proyectoPage.createSimpleProject(data.project.name.simple);
        Utils.clickElement(tareaPage.elements.MyTaskButton());
        tareaPage.createTask({name: data.task.title.simple});
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(), data.task.title.simple)
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.clickElement(tareaPage.elements.AddProjectToTaskButton());
        Utils.typeAndPressEnter(tareaPage.elements.AddProjectToTaskText(), data.project.name.simple);
        Utils.clickElement(tareaPage.elements.GoToProjectLink());
        Utils.clickElement(tareaPage.elements.CloseDetailButton());
        cy.wait(3000);
        Utils.verifyTextInMultipleElements(proyectoPage.elements.NameTasksList(), data.task.title.simple);
        proyectoPage.deleteProject(data.project.name.simple);
        Utils.clickElement(tareaPage.elements.MyTaskButton());
        tareaPage.DeleteTask(data.task.title.simple)
    })



})