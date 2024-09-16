import {getTextFromText, typeAndPressEnter, rightClickElement, typeText, clickElement, clickElementForce, clearAndTypeText, verifyTaskExists, verifyTextEquals, clickAndType, clickSelectorTypeTextAndPressEnter, verifyTextInMultipleElements ,verifyDeleteTask} from './functions.cy.js';


class TareaPage {
    
        elements = {
            MyTaskButton: () => cy.get("div[class='Sidebar SidebarResizableContainer-sidebar']>nav>div:nth-child(2)>a"),
            AddTaskButton: () => cy.get("div[class='PrimarySplitDropdownMenuButtonA11y AddTaskDropdownButton']>div:nth-child(1)"),
            DetailsTaskButton: () => cy.get("div[class='SpreadsheetTaskList SpreadsheetPotGridContents-taskList']>div:nth-child(2)>div>div>div>div>div>div:nth-child(5)>div>div:nth-child(2)"),
            TitleText: () => cy.get("div[class='AutogrowTextarea-container TitleInput-objectName']>textarea"),
            FirstTaskInList:() => cy.get("div[class='TaskGroup']>div>div:nth-child(2)>div>div>div>div>div>label>textarea"),
            DescriptionText: () => cy.get("div[data-testid='task-description-tec']>div[contenteditable]"),
            CloseDetailButton: () => cy.get("svg[class='Icon CloseIcon']"),
            MakePublicTaskButton: () => cy.get("div[class='MessageBanner-contents MessageBanner-contents--left']>div:nth-child(3)"),
            MakePrivateTaskButton: () => cy.get("div[class='MessageBanner-contents MessageBanner-contents--left']>div:nth-child(2)"),
            CommentTaskText: () => cy.get("div[data-testid='comment-composer-editor-tec']>div[contenteditable]"),
            FinishTaskButton: () => cy.get("div[class='TaskPaneToolbarAnimation']>div>div>div[role='button']"),
            FilterButton: () => cy.get("div[class='PageToolbarStructure-rightChildren']>div:nth-child(1)"),
            CompletedTaskFilterButton: () => cy.get("div[class='MultiFilterQuickFilterCompletionDropdownButton']>div:nth-child(1)"),
            UnfinishedTaskFilterButton: () => cy.get("ul[class='MultiFilterQuickFiltersRefreshed-content']>li:nth-child(1)>div"),
            TaskArea: () => cy.get("div[class='DropTargetRow--inSpreadsheetGrid DropTargetRow MyTasksSpreadsheetGridRow-dropTargetRow']:nth-child(2)"),
            DeleteTaskOption: () => cy.get("div[data-testid='layer-positioner-layer']>div>div>a:nth-child(12)"),
            PopUpConfirmDeleteTask: () => cy.get("div[class='ToastNotificationContent']>div:nth-child(2)"),
            AddOrDeleteMenberButton:()=> cy.get("div[class='FollowersList EditableFollowersRow-followersList']>div:nth-child(4)"),
            NewAdminButton: ()=> cy.get("div[class='ToastNotificationContent-text']>span[aria-hidden='true']"),
            NewAdmindText: () => cy.get("div[class='DomainUserSelectorTokenTypeahead']>input"),
            //AssignMultipleAdminsOptions: ()=> cy.get("div[data-testid='layer-positioner-layer']>div>div:nth-child(2)>div"),
            //AssignNewAdminToTaskText: ()=> cy.get("input[data-testid='tokenizer-input']"),
            //AssignTaskToNewAdminButton: () => cy.get("div[class='MultiAssignPopup-content']>div>div:nth-child(3)>div:nth-child(2)"),

            // Para encontrar elementos
            UnfinishedTaskList: () => cy.get("div[class='TaskGroup']"),
            TasksUnfinished: () => cy.get("textarea"),
        };

    //functionstask
    //crear eliminar, 

    // CLICK ACTIONS
    clickMyTasks() {
        clickElement(this.elements.MyTaskButton());
    }

    clickAddTask() {
        clickElement(this.elements.AddTaskButton());
    }

    clickDetailsTask() {
        clickElementForce(this.elements.DetailsTaskButton()); // Utilizar clic forzado
    }

    clickCloseDetailButton() {
        clickElement(this.elements.CloseDetailButton());
    }

    clickMakePublicTaskButton() {
        clickElement(this.elements.MakePublicTaskButton());
    }

    clickFinishTaskButton() {
        clickElement(this.elements.FinishTaskButton());
    }

    clickFilterButton() {
        clickElement(this.elements.FilterButton());
    }

    clickCompletedTaskFilterButton() {
        clickElementForce(this.elements.CompletedTaskFilterButton());
    }

    clickUnifinishedTaskFilterButton(){
        clickElement(this.elements.UnfinishedTaskFilterButton());
    }

    clickDeleteTaskOption(){
        clickElement(this.elements.DeleteTaskOption());
    }

    rightClickAndSeeOptionsTask(){
        rightClickElement(this.elements.TaskArea());
    }

    clickAssignNewAdminToTask(){
        clickElement(this.elements.AssignTaskToNewAdminButton());
    }

    clickAddNewAdmin() {
        clickElement(this.elements.NewAdminButton());
    }    
    
    clickAndTypeNewMenber(text){
        clickSelectorTypeTextAndPressEnter(this.elements.AddOrDeleteMenberButton(),text)
    }

    

    // TYPE ACTIONS
    typeTitleTex(text){
        typeText(this.elements.TitleText(), text);
    }

    typeDescriptionTex(text){
        typeText(this.elements.DescriptionText(), text);
    }

    clearAndTypeTitleText(text) {
        clearAndTypeText(this.elements.TitleText(), text);
    }

    clearAndTypeDescriptionText(text) {
        clearAndTypeText(this.elements.DescriptionText(), text);
    }

    clearAndTypeCommentText(text) {
        clearAndTypeText(this.elements.CommentTaskText(), text);
    }

    typeCommentText(text){
        typeText(this.elements.CommentTaskText(),text);
    }

    typeNewMenberTotask(text){

    }

    typeNewAdminAndPressEnter(text){
        typeAndPressEnter(this.elements.NewAdmindText(), text);
    }

    // VERIFY ACTIONS
    verifyTaskExistsinUnfinishedTasks(taskName) {
        verifyTextInMultipleElements(this.elements.TasksUnfinished(), taskName);
    }

    verifyLastTaskExistCreatedIs(taskName){
        verifyTextEquals(this.elements.FirstTaskInList(), taskName)
    }

    verifyLastChanges(taskname, description, comment){
        verifyTextEquals(this.elements.TitleText(),taskname);
        verifyTextEquals(this.elements.DescriptionText(), description);
        verifyTextEquals(this.elements.CommentTaskText(), comment);
        verifyElementTextEquals(this.elements.MakePrivateTaskButton, "Hacer privado");
    }
    
    verifyLastTaskCompleted(taskname){
        verifyTextEquals(this.elements.FirstTaskInList(),taskname)
    }

    verifyDeleteTask() {
        verifyDeleteTask(this.elements.PopUpConfirmDeleteTask(), "Deshacer"); 
    }

    verifyNewAminIs(){
        
    }

    //SAVE ELEMENTS
    saveFirstTitleTask() {
        getTextFromText(this.elements.FirstTaskInList());
    }

}

export const tareaPage = new TareaPage();
