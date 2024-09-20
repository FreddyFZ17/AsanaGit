import Utils from '../utils.cy.js';
import { proyectoPage } from './proyecto_page.cy.js';

class PortfolioPage {
    
        elements = {
            CreatePortfolioOption:()=>cy.get("div[class='MenuStructure ActionMenu']>div>div:nth-child(2)>div"),
            NamePortfolioText:()=>cy.get("div[class='FormRowStructure-contents']>input"),
            ConfirmNamePortfolioButton:()=>cy.get("div[class='CreatePortfolioModalSetupFormStructure-submitButton']>div"),
            GoToPortfolioButton:()=>cy.get("div[class='CreatePortfolioModalSetupFormStructure-submitButton']>div"),
            SeeAllPortfolioButton:()=>cy.get("div[class='SortableItem LinearSortableList-sortableItem']>nav[aria-label='Análisis de datos']>div>a[aria-label='Portafolios']"),
            SeeOptionsPortfolioButton:()=>cy.get("div[class='TopbarPageHeaderStructureWithBreadcrumbs-titleAndBreadcrumbs']>div>div:nth-child(2)"),
            DeletePortfolioOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(9)>div"),
            ConfirmDeletePortfolioButton:()=>cy.get("div[class='ModalWrapper-childContainer']>div:nth-child(3)>div:nth-child(2)"),
            ProjectSummary:()=>cy.get("nav[class='ObjectReorderableTabNavigationBar']>ul>div:nth-child(2)>div>div:nth-child(1)>div>div>li>div>div"),
            RenamePortfolioOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(1)>div"),
            RenamePortfolioText:()=>cy.get("div[class='FormRowStructure-contents']>input"),
            SaveChangeButton:()=>cy.get("div[class='ModalWrapper-childContainer']>div:nth-child(3)>div:nth-child(2)"),
            NamePprtfolioElement:()=>cy.get("div[class='TopbarPageHeaderStructureWithBreadcrumbs-titleAndBreadcrumbs']>div>h1"),

            ListOfJobs:()=>cy.get("span[class='TypographyPresentation TypographyPresentation--medium']"),
            PortfolioList:()=>cy.get("div[class='TileStructure-name']"),
        };

    //functionstask
    createPortfolio(name){
        proyectoPage.clickOptionsProject();
        Utils.clickElement(this.elements.CreatePortfolioOption());
        cy.wait(1000);
        Utils.typeText(this.elements.NamePortfolioText(), name);
        Utils.clickElement(this.elements.ConfirmNamePortfolioButton());
        Utils.clickElement(this.elements.GoToPortfolioButton());
        cy.wait(5000);
    }

    deletePortfolio(name){
        Utils.clickElement(this.elements.SeeAllPortfolioButton());
        Utils.searchElementByTextAndClick(this.elements.PortfolioList(),name);
        Utils.clickElement(this.elements.SeeOptionsPortfolioButton());
        Utils.clickElement(this.elements.DeletePortfolioOption());
        Utils.clickElement(this.elements.ConfirmDeletePortfolioButton());
    }
    //crear eliminar, 

    // CLICK ACTIONS

    // TYPE ACTIONS
    
    // VERIFY ACTIONS

    //SAVE ELEMENTS

}

export const portfolioPage = new PortfolioPage();
