import { loginPage } from "../../support/pages/login_page.cy";
import { tareaPage } from "../../support/pages/tarea_page.cy";
import {home_page} from "../../support/pages/home_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import Utils from "../../support/utils.cy";


describe("F1: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("fernandezfreddy1707@gmail.com");
        loginPage.clickContinue();
        loginPage.enterPassword("password1707");
        loginPage.clickLogin();
        tareaPage.clickMyTasks();

    });

    it("TC1: Verificar que se pueda crear una tarea nueva", () => {

        tareaPage.clickAddTask();
        tareaPage.clickDetailsTask();
        tareaPage.typeTitleText("TareitaF");
        tareaPage.typeDescriptionTex("Esto es una descripcionF");
        tareaPage.clickCloseDetailButton();
        Utils.verifyTextInMultipleElements(tareaPage.elements.NameTaskList(), "TareitaF");
        tareaPage.DeleteTask("TareitaF");
    });

    it("TC2: Verificar que un usuario pueda actualizar los detalles de una tarea existente", () => {
        tareaPage.createTask({name: "TareaFinalizada"});
        tareaPage.clickDetailsTask();
        tareaPage.clearAndTypeTitleText("TareitaEditada1");
        tareaPage.clearAndTypeDescriptionText("Esto es una descripcion Editada1");
        tareaPage.typeCommentText("Esto es un comentario1");
        tareaPage.clickCloseDetailButton();
        tareaPage.clickDetailsTask();
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(),"TareitaEditada1");
        Utils.clickElement(tareaPage.elements.SeeDetailsToTaskOption());
        Utils.verifyTextEquals(tareaPage.elements.DescriptionText(),"Esto es una descripcion Editada1");
        tareaPage.clickCloseDetailButton();
        tareaPage.DeleteTask("TareitaEditada1");
        //falta Terminar falla
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

    it("TC4: Verificar que un usuario pueda eliminar una tarea existente", () =>{
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

    it("TC6: Verificar la funcionalidad de los distintos tipos de agrupaciones",()=>{
        //Algo que aclarar es que lo ideal seria que hallan varias tareas creadas para ver que funcionen correctamente pero de momento solo nos enfocaremos en la funcionalidad del boton y un mensaje de confirmacion
        Utils.clickElement(tareaPage.elements.GroupTaskButton());
        Utils.clickElement(tareaPage.elements.GroupBySectionsOption());
        Utils.verifyElementExist(tareaPage.elements.AddSectionButton());
        Utils.clickElement(tareaPage.elements.GroupTaskButton());
        Utils.clickElement(tareaPage.elements.DeleteFilterGroupButton());
        
        Utils.clickElement(tareaPage.elements.GroupTaskButton());
        Utils.clickElement(tareaPage.elements.GroupByDeliveryDateOption());
        Utils.verifyTextInMultipleElements(tareaPage.elements.NameGroupsSection(), 'Sin fecha de entrega');
        Utils.clickElement(tareaPage.elements.GroupTaskButton());
        Utils.clickElement(tareaPage.elements.DeleteFilterGroupButton());
        
        Utils.clickElement(tareaPage.elements.GroupTaskButton());
        Utils.clickElement(tareaPage.elements.GroupByCreator());
        Utils.verifyElementExist(tareaPage.elements.NameCreatorTasks());
        Utils.clickElement(tareaPage.elements.GroupTaskButton());
        Utils.clickElement(tareaPage.elements.DeleteFilterGroupButton());
        
        Utils.clickElement(tareaPage.elements.GroupTaskButton());
        Utils.clickElement(tareaPage.elements.GroupByProject());
        Utils.verifyTextInMultipleElements(tareaPage.elements.NameGroupsSection(),"Sin proyecto");
        Utils.clickElement(tareaPage.elements.GroupTaskButton());
        Utils.clickElement(tareaPage.elements.DeleteFilterGroupButton());
        
    })

    it("TC : Verificar la funcionalidad de duplicar tarea",()=>{
        tareaPage.clickAddTask();
        tareaPage.typeTitleText("Tarea a Duplicar");
        tareaPage.clickDetailsTask();
        tareaPage.typeDescriptionTex("Esto es una descripcionF");
        tareaPage.clickCloseDetailButton();
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(),"Tarea a Duplicar");
        Utils.clickElement(tareaPage.elements.DuplicateTaskOption());
        cy.wait(1000)
        Utils.clickElement(tareaPage.elements.CreateNewTaskDuplicate());
        cy.wait(2000)
        Utils.verifyTextInMultipleElements(tareaPage.elements.NameTaskList(),"Duplicado de Tarea a Duplicar");
    //Falta eliminar la tarea para que sea mas wonito
    })

    it("TC : Verificar el filtrado rapido de tareas",()=>{
        //Este es un TC muy dificil de manejar debido a que primero debo crear una gran cantidad de tareas
        tareaPage.createTask({name: "TareaSimple"});
        tareaPage.createTask({name: "TareaFinalizada", isCompleted:true});
        tareaPage.createTask({name:"ParaEntregarEstaSemana", dueDate: "20/09/24"})
        tareaPage.createTask({name:"ParaEntregarLaProximaSemana", dueDate: "27/09/24"})
        tareaPage.clickFilterButton();
        Utils.verifyTextInMultipleElements(tareaPage.elements.NameTaskList(),"TareaSimple");
        tareaPage.clickFilterButton();
        
        tareaPage.clickFilterButton();
        Utils.clickElement(tareaPage.elements.DeleteFiltersButton());
        Utils.clickElement(tareaPage.elements.ForThisWeekFilterButton());
        Utils.verifyTextInMultipleElements(tareaPage.elements.NameTaskList(),"ParaEntregarEstaSemana");
        tareaPage.clickFilterButton();
        
        tareaPage.clickFilterButton();
        Utils.clickElement(tareaPage.elements.DeleteFiltersButton());
        Utils.clickElement(tareaPage.elements.ForNextWeekFilterButton());
        Utils.verifyTextInMultipleElements(tareaPage.elements.NameTaskList(),"ParaEntregarLaProximaSemana");
        tareaPage.clickFilterButton();
        
        tareaPage.DeleteTask("TareaSimple");
        tareaPage.DeleteTask("TareaFinalizada");
        tareaPage.DeleteTask("ParaEntregarEstaSemana");
        tareaPage.DeleteTask("ParaEntregarLaProximaSemana");
    })

    it("TC : Verificar que se pueda añadir un nuevo campo",()=>{
        proyectoPage.createSimpleProject("proyectoSimple");
        tareaPage.clickMyTasks();
        tareaPage.createTask({name: "TareaParaProyecto"});
        Utils.searchElementByTextAndRightClick(tareaPage.elements.NameTaskList(),"TareaParaProyecto")
        Utils.clickElement(tareaPage.elements.SeeDetailsTaskOption());
        Utils.clickElement(tareaPage.elements.AddProjectToTaskButton());
        Utils.typeAndPressEnter(tareaPage.elements.AddProjectToTaskText(), "proyectoSimple");
        tareaPage.clickCloseDetailButton();
        tareaPage.DeleteTask("TareaParaProyecto");
        proyectoPage.deleteProject("proyectoSimple");
    })

    /*it.only("TC : ",()=>{
        tareaPage.createTask({name: "a"});
    })*/

});
