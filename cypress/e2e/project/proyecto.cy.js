import { loginPage } from "../../support/pages/login_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import {homePage} from "../../support/pages/home_page.cy"
import Utils from "../../support/utils.cy";
import { tareaPage } from "../../support/pages/tarea_page.cy";
import { proyectoPageResume } from "../../support/pages/projectResume_page.cy";


describe("F1: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("fernandezfreddy1707@gmail.com");
        loginPage.clickContinue();
        loginPage.enterPassword("password1707");
        loginPage.clickLogin();
    });

    it("TC1: Validar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en un proyecto", () => {
        proyectoPage.createSimpleProject("CRUD")
        Utils.verifyTextInMultipleElements(proyectoPage.elements.ProjectListInNavVar(), "CRUD");
        Utils.searchElementByTextAndClick(proyectoPage.elements.ProjectListInNavVar(),"CRUD");
        proyectoPage.clickOptionsProjectButton();
        proyectoPage.clickEditDetailsProjectOption();
        proyectoPage.typeNewNameOfProject("CRUDSITO");
        proyectoPage.typeDescriptionOfProject("descripcion de Crudsito")
        proyectoPage.clickCloseEditProjectDetails()
        tareaPage.clickMyTasks();
        Utils.searchElementByTextAndClick(proyectoPage.elements.ProjectListInNavVar(),"CRUDSITO");
        proyectoPage.clickOptionsProjectButton();
        proyectoPage.clickEditDetailsProjectOption();
        Utils.verifyTextEquals(proyectoPage.elements.DescriptionProjectText(), "descripcion de Crudsito");
        proyectoPage.clickCloseEditProjectDetails()
        proyectoPage.deleteProject("CRUDSITO")
    });

    it("TC2: Verificar que se pueda crear un proyecto usando una plantilla predefinida", ()=>{
        proyectoPage.createProjectWithTemplate("ProyectoConPlantillaLista", "Lista");
        Utils.verifyTextInMultipleElements(proyectoPage.elements.NameSectionListProject(),"Hitos");
        proyectoPage.createProjectWithTemplate("ProyectoConPlantillaTablero", "Tablero");
        Utils.verifyElementExist(proyectoPage.elements.SecondSectionToDashboard());
        proyectoPage.createProjectWithTemplate("ProyectoConPlantillaCronograma", "Cronograma");
        Utils.verifyTextInMultipleElements(proyectoPage.elements.NameTaskInScheduleList(), "[Ejemplo] Desarrollar la página de inscripciones para el evento");
        proyectoPage.deleteProject("ProyectoConPlantillaLista");
        proyectoPage.deleteProject("ProyectoConPlantillaTablero");
        proyectoPage.deleteProject("ProyectoConPlantillaCronograma");
    })

    it("TC3: Verificar que se pueda editar los detalles de un proyecto",()=>{
        proyectoPage.createSimpleProject("TituloSinEditar");
        proyectoPage.clickOptionsProjectButton();
        proyectoPage.clickEditDetailsProjectOption();
        proyectoPage.typeNewNameOfProject("TituloEditado");
        proyectoPage.clickDateDeliveryButton();
        proyectoPage.typeDateDeliveryProject("27/09/24");
        proyectoPage.typeDescriptionOfProject("Descripcion");
        proyectoPage.clickCloseEditProjectDetails();
        Utils.clickElement(proyectoPageResume.elements.ProjectResumeButton());
        cy.wait(2000);
        Utils.verifyTextEquals(proyectoPageResume.elements.DescriptionProjectElement(),"Descripcion");
        proyectoPage.deleteProject("TituloEditado");
    })

    /*it("",()=>{
        proyectoPage.createSimpleProject("proyectoSimple");
        //proyectoPage.deleteProject("proyectoSimple");
    })*/

})  