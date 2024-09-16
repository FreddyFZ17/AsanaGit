import {verifyElementTextEquals, getTextFromText, typeAndPressEnter, rightClickElement, typeText, clickElement, clickElementForce, clearAndTypeText, verifyTaskExists, verifyTextEquals, clickAndType, clickSelectorTypeTextAndPressEnter, verifyTextInMultipleElements ,verifyDeleteTask} from './functions.cy.js';


class ProyectoPage {
    
    elements = {
        NewProjectOrPortfolio: () => cy.get("div[class='LinearSortableList Sidebar-sectionsSortableList']>div:nth-child(3)>nav>div:nth-child(1)>div>div:nth-child(2)>div"),
        NewPortfolioOption: () => cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(2)>div"),
        NewProjectOption: () => cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(1)>div"),
        EmptyProjectOption: () => cy.get("div[class='ProjectCreationFlowPicker-tiles']>div:nth-child(1)>div:nth-child(1)"),
        UseTemplateOption: ()=> cy.get("div[class='ProjectCreationFlowPicker-tiles']>div:nth-child(2)>div:nth-child(1)"),
        NameProjectText: () => cy.get("input[id='new_project_dialog_content_name_input']"),
        CreateProjectButton: () => cy.get("div[class='PotSetupFormStructure-submitButton']>div"),
        OptionsProjectButton: ()=>cy.get("div[class='TopbarPageHeaderStructureWithBreadcrumbs-titleAndBreadcrumbs']>div>div:nth-child(2)"),
        EditDetailsProjectOption:() =>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(1)"),
        EditNameProjectText: () =>cy.get("div[class='FormRowStructure-contents']>input"),
        CloseEdiDetailsProject: ()=>cy.get("div[class='ModalWrapper-childContainer']>div:nth-child(1)>div"),
        NameProjectTextInProjectIs:()=>cy.get("div[class='ProjectPageHeaderProjectTitle-container']>div"),
        DeleteProjectOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(14)"),
        ConfirmDeleteProjectButton:()=>cy.get("div[class='ModalWrapper-childContainer']>div:nth-child(3)>div:nth-child(2)"),
        PopUpConfirmDeleteProject:() =>cy.get("div[class='ToastNotificationContent']>div:nth-child(2)"),
        UseCalendarTemplate: ()=>cy.get("div[class='TemplateGalleryV2TemplatesList']>div:nth-child(1)"),
        UseTemplateButton:()=>cy.get("div[class='TemplateGalleryV2Preview-templateHeader']>div:nth-child(2)"),
        CreateProjectWithTemplateButton:()=>cy.get("div[class='ProjectCreationFormStructure ProjectCreationModalContent-form']>div:nth-child(5)"),
        NameFirstSectionBoard:()=>cy.get("div[class='SortableList BoardBody-columnSortableList']>div>div:nth-child(1)>div>div>div:nth-child(1)>div>div>h3"),
        AdminText:()=>cy.get("div[class='OwnerToken-typeaheadContainer']>input"),
        AdminButton:()=>cy.get("div[class='AssigneeTokenButton-label']"),
        DeliveryDateProjectButton:()=>cy.get("div[class='DueDateToken ProjectInformationDialogContent-dueDateToken']>div>span"),
        DeliveryDateProjectText:()=>cy.get("div[class='DueDateInput-inputContainer']>input"),
        DescriptionProjectText:()=>cy.get("div[contenteditable='true']"),
        StartDateProjectText:()=>cy.get("input[id='start_date_input_id_select']"),
        FinishDateProjectText:()=>cy.get("input[id='due_date_input_id_select']")
    };

    //CLICK ACTIONS
    clickOptionsProject(){
        clickElement(this.elements.NewProjectOrPortfolio());
    }

    clickNewProjectOption(){
        clickElement(this.elements.NewProjectOption());
    }

    clickContinuePortfolioNameButton(){
        clickElement(this.elements.ContinueAndGoToPortfolioButtom());
    }

    clickEmptyProjectOption(){
        clickElement(this.elements.EmptyProjectOption());
    }
    
    clickCreateProjectButton(){
        clickElement(this.elements.CreateProjectButton());
    }

    clickOptionsProjectButton(){
        clickElement(this.elements.OptionsProjectButton());
    }

    clickEditDetailsProjectOption(){
        clickElement(this.elements.EditDetailsProjectOption());
    }

    clickCloseEditProjectDetails(){
        clickElement(this.elements.CloseEdiDetailsProject())
    }

    clickDeleteProjectOption(){
        clickElement(this.elements.DeleteProjectOption());
    }

    clickConfirmDeleteProject(){
        clickElement(this.elements.ConfirmDeleteProjectButton());
    }

    clickUseTemplateOption(){
        clickElement(this.elements.UseTemplateOption());
    }

    clickCalendarTemplate(){
        clickElement(this.elements.UseCalendarTemplate());
    }

    clickUseTemplateButton(){
        clickElement(this.elements.UseTemplateButton());
    }

    clickCreateProjectWithTemplateButton(){
        clickElement(this.elements.CreateProjectWithTemplateButton());
    }

    clickAdminButton(){
        clickElement(this.elements.AdminButton());
    }

    clickDateDeliveryButton(){
        clickElement(this.elements.DeliveryDateProjectButton());
    }


    //TYPE ACTIONS

    typeDescriptionOfProject(text){
        clearAndTypeText(this.elements.DescriptionProjectText(),text)
    }

    typeNewAdmin(text){
        typeAndPressEnter(this.elements.AdminText(), text);
    }

    typeDateDeliveryProject(text){
        //clearAndTypeText(this.elements.StartDateProjectText(), text); 
        clearAndTypeText(this.elements.FinishDateProjectText(),text)  
        this.elements.FinishDateProjectText().type('{enter}');
    }

    typeNameProjectText(text){
        typeText(this.elements.NameProjectText(), text);
    }

    typeNewNameOfProject(text){
        clearAndTypeText(this.elements.EditNameProjectText(), text);
    }

    //VERIFY ACTIONS
    VerifyNewNameProjectIs(text){
        verifyTextEquals(this.elements.NameProjectTextInProjectIs(), text);
    }

    VerifyPopUpConfirmDeleteProject(){
        verifyTextEquals(this.elements.PopUpConfirmDeleteProject(), "Deshacer")
    }

    VerifyUseTemplateInProject(){
        verifyTextEquals(this.elements.NameFirstSectionBoard(),"Diseño");
    }

    verifyProjectDetailsChanges(){
        verifyElementTextEquals(this.elements.EditNameProjectText(), "PROfreddyEditOLI")
        verifyTextEquals(this.elements.AdminButton(),"201704849@est.umss.edu")
        verifyTextEquals(this.elements.DeliveryDateProjectButton(),"10 mar")
    }

}
    
export const proyectoPage = new ProyectoPage();

