import Utils from '../utils.cy.js';
class ProyectoPage {
    
    elements = {
        NewProjectOrPortfolio: () => cy.get("div[aria-label='Nuevo proyecto o portafolio']"),
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
        FinishDateProjectText:()=>cy.get("input[id='due_date_input_id_select']"),
        ProjectWithTemplateNameText:()=>cy.get("input[id='new_project_dialog_content_name_input']"),
        CreateProjectWithScheduletemplateButton:()=>cy.get("div[class='ProjectCreationFormStructure-submitButton ProjectCreationShiftDatesForm-backAndSubmit']>div:nth-child(2)"),


        NameTaskInScheduleList:()=>cy.get("div[class='TaskCell-name']"),
        SecondSectionToDashboard:()=>cy.get("div[class='BoardBody-columns']>div>div>div>div:nth-child(2)"),
        NameSectionListProject:()=>cy.get("button[class='PotColumnName-nameButton']"),
        TypeTemplateElement:()=>cy.get("div[class='MultilineRowMetadataStructure-metadata']>div>span>span"),
        ProjectListInNavVar:()=>cy.get("div[class='SidebarProjectsSectionProjectList-projects']>div>a"),
    };

    createSimpleProject(name){
        this.clickOptionsProject();
        this.clickNewProjectOption();
        this.clickEmptyProjectOption();
        this.typeNameProjectText(name);
        this.clickCreateProjectButton();
        cy.wait(5000);
    }

    deleteProject(name){
        Utils.searchElementByTextAndClick(this.elements.ProjectListInNavVar(),name);
        this.clickOptionsProjectButton();
        this.clickDeleteProjectOption();
        this.clickConfirmDeleteProject();
    }

    createProjectWithTemplate(name, template){
        this.clickOptionsProject();
        this.clickNewProjectOption();
        this.clickUseTemplateOption();
        Utils.searchElementByTextAndClick(this.elements.TypeTemplateElement(), template);
        this.clickUseTemplateButton();
        Utils.clearAndTypeText(this.elements.ProjectWithTemplateNameText(), name);
        this.clickCreateProjectWithTemplateButton();
        if(template == "Cronograma"){
            Utils.clickElement(this.elements.CreateProjectWithScheduletemplateButton());
            cy.wait(42000);
        }
        cy.wait(13000);
    }

    createTaskInProjectListPage(name){
        
    }

    //CLICK ACTIONS
    clickOptionsProject(){
        Utils.clickElement(this.elements.NewProjectOrPortfolio());
    }

    clickNewProjectOption(){
        Utils.clickElement(this.elements.NewProjectOption());
    }

    clickContinuePortfolioNameButton(){
        Utils.clickElement(this.elements.ContinueAndGoToPortfolioButtom());
    }

    clickEmptyProjectOption(){
        Utils.clickElement(this.elements.EmptyProjectOption());
    }
    
    clickCreateProjectButton(){
        Utils.clickElement(this.elements.CreateProjectButton());
    }

    clickOptionsProjectButton(){
        Utils.clickElement(this.elements.OptionsProjectButton());
    }

    clickEditDetailsProjectOption(){
        Utils.clickElement(this.elements.EditDetailsProjectOption());
    }

    clickCloseEditProjectDetails(){
        Utils.clickElement(this.elements.CloseEdiDetailsProject())
    }

    clickDeleteProjectOption(){
        Utils.clickElement(this.elements.DeleteProjectOption());
    }

    clickConfirmDeleteProject(){
        Utils.clickElement(this.elements.ConfirmDeleteProjectButton());
    }

    clickUseTemplateOption(){
        Utils.clickElement(this.elements.UseTemplateOption());
    }

    clickCalendarTemplate(){
        Utils.clickElement(this.elements.UseCalendarTemplate());
    }

    clickUseTemplateButton(){
        Utils.clickElement(this.elements.UseTemplateButton());
    }

    clickCreateProjectWithTemplateButton(){
        Utils.clickElement(this.elements.CreateProjectWithTemplateButton());
    }

    clickAdminButton(){
        Utils.clickElement(this.elements.AdminButton());
    }

    clickDateDeliveryButton(){
        Utils.clickElement(this.elements.DeliveryDateProjectButton());
    }


    //TYPE ACTIONS

    typeDescriptionOfProject(text){
        Utils.clearAndTypeText(this.elements.DescriptionProjectText(),text)
    }

    typeNewAdmin(text){
        Utils.typeAndPressEnter(this.elements.AdminText(), text);
    }

    typeDateDeliveryProject(text){
        //clearAndTypeText(this.elements.StartDateProjectText(), text); 
        Utils.clearAndTypeText(this.elements.FinishDateProjectText(),text)  
        this.elements.FinishDateProjectText().type('{enter}');
    }

    typeNameProjectText(text){
        Utils.typeText(this.elements.NameProjectText(), text);
    }

    typeNewNameOfProject(text){
        Utils.clearAndTypeText(this.elements.EditNameProjectText(), text);
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

