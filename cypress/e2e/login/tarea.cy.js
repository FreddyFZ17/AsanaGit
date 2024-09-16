import { loginPage } from "../../support/pages/login_page.cy";
import { tareaPage } from "../../support/pages/tarea_page.cy";
import {home_page} from "../../support/pages/home_page.cy"

describe("F1: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("freddyfernandez778@gmail.com");
        loginPage.clickContinue();
        loginPage.enterPassword("password1707");
        loginPage.clickLogin();
        tareaPage.clickMyTasks();
    });

    it("TC1: Verificar que se pueda crear una tarea nueva", () => {

        tareaPage.clickAddTask();
        tareaPage.clickDetailsTask();
        tareaPage.typeTitleTex("TareitaF");
        tareaPage.typeDescriptionTex("Esto es una descripcionF");
        tareaPage.clickCloseDetailButton();
        tareaPage.verifyLastTaskExistCreatedIs("TareitaF");
        //tareaPage.deleteTask();
    });

    it("TC2: Verificar que un usuario pueda actualizar los detalles de una tarea existente", () => {

        tareaPage.clickDetailsTask();
        tareaPage.clickMakePublicTaskButton();
        tareaPage.clearAndTypeTitleText("TareitaEditada1");
        tareaPage.clearAndTypeDescriptionText("Esto es una descripcion Editada1");
        tareaPage.typeCommentText("Esto es un comentario1");
        tareaPage.clickCloseDetailButton();
        tareaPage.clickDetailsTask();
        tareaPage.verifyLastTaskExistCreatedIs("TareitaEditada1", "Esto es una descripcion Editada1", "Esto es un comentario1");
        tareaPage.clickCloseDetailButton();
        //tareaPage.verifyChanges(tarea); Sin terminar
    });

    it("TC3: Verificar que un usuario pueda marcar una tarea como completada", () => {

        tareaPage.clickDetailsTask();
        tareaPage.clickFinishTaskButton();
        tareaPage.clearAndTypeTitleText("TareitaFinalizada2");
        tareaPage.clickCloseDetailButton();
        tareaPage.clickFilterButton();
        tareaPage.clickCompletedTaskFilterButton();
        tareaPage.clickFilterButton();
        tareaPage.verifyLastTaskCompleted("TareitaFinalizada2");
        //IMPLEMENTAR UN ASSERT QUE BUSQUE EN UNA LISTA DE ELEMENTOS
        tareaPage.clickFilterButton();
        tareaPage.clickUnifinishedTaskFilterButton();
    });

    it.only("TC4: Verificar que un usuario pueda eliminar una tarea existente", () =>{
        //Crear una tarea
        //tareaPage.saveFirstTitleTask();
        tareaPage.rightClickAndSeeOptionsTask();
        tareaPage.clickDeleteTaskOption();
        tareaPage.verifyDeleteTask();
        //tareaPage.verifyTaskExist("Tarea1")
    })

    it("TC5: Verificar la funcionalidad de añadir colaboradores y asignar administradores de una tarea",()=>{

        tareaPage.clickDetailsTask();
        tareaPage.clickAddNewAdmin();
        tareaPage.typeNewAdminAndPressEnter("NewAdmin2@gmail.com");
        tareaPage.clickCloseDetailButton();
        
    })

    /*it("TC5: Verificar la funcionalidad de añadir colaboradores y asignar administradores de una tarea",()=>{

        tareaPage.verifyTaskExist("tarea2");
    })*/
});
