import { loginPage } from "../../support/pages/login_page.cy";
import { proyectoPage } from "../../support/pages/proyecto_page.cy";
import {homePage} from "../../support/pages/home_page.cy"

describe("F1: Gestión de Tareas en Asana", () => {
    beforeEach("Iniciar Sesion", () => {
        cy.visit("https://app.asana.com/-/login");
        loginPage.enterEmail("freddyfernandez778@gmail.com");
        loginPage.clickContinue();
        loginPage.enterPassword("password1707");
        loginPage.clickLogin();
    });

    it("TC1: Validar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en un portafolio", () => {
        proyectoPage.clickOptionsProject();
        proyectoPage.clickNewProjectOption();
        proyectoPage.clickEmptyProjectOption();
        proyectoPage.typeNameProjectText("proFreddy");
        proyectoPage.clickCreateProjectButton();
        homePage.clickHomePage();
        homePage.verifyLastProjectCreatedIs("proFreddy");
        cy.wait(2000);
        homePage.clickLastProjectCreatedButton();
        proyectoPage.clickOptionsProjectButton();
        proyectoPage.clickEditDetailsProjectOption();
        proyectoPage.typeNewNameOfProject("PROfreddyEdit");
        cy.wait(2000);
        proyectoPage.clickCloseEditProjectDetails()
        proyectoPage.VerifyNewNameProjectIs("PROfreddyEdit");
        proyectoPage.clickOptionsProjectButton();
        proyectoPage.clickDeleteProjectOption();
        proyectoPage.clickConfirmDeleteProject();
        proyectoPage.VerifyPopUpConfirmDeleteProject();

    });

    it("TC2: Verificar que se pueda crear un proyecto usando una plantilla predefinida", ()=>{
        proyectoPage.clickOptionsProject();
        proyectoPage.clickNewProjectOption();
        proyectoPage.clickUseTemplateOption();
        proyectoPage.clickUseTemplateButton();
        cy.wait(1000)
        proyectoPage.clickCreateProjectWithTemplateButton();
        cy.wait(20000)
        proyectoPage.VerifyUseTemplateInProject();
        proyectoPage.clickOptionsProjectButton();
        proyectoPage.clickDeleteProjectOption();
        proyectoPage.clickConfirmDeleteProject();
    })

    it("TC3: Verificar que se pueda editar los detalles de un proyecto",()=>{
        homePage.clickHomePage();
        cy.wait(2000);
        homePage.clickLastProjectCreatedButton();
        proyectoPage.clickOptionsProjectButton();
        proyectoPage.clickEditDetailsProjectOption();
        proyectoPage.typeNewNameOfProject("PROfreddyEditOLI");
        proyectoPage.clickAdminButton();
        proyectoPage.typeNewAdmin("201704849@est.umss.edu");
        proyectoPage.clickDateDeliveryButton();
        proyectoPage.typeDateDeliveryProject("10/03/24");
        proyectoPage.typeDescriptionOfProject("Esto es una descripcion editada");
        proyectoPage.clickCloseEditProjectDetails();
        proyectoPage.clickOptionsProjectButton();
        proyectoPage.clickEditDetailsProjectOption();
        proyectoPage.verifyProjectDetailsChanges();
    })

})  