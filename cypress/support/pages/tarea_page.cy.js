import Utils from '../utils.cy.js';

class TareaPage {
    
        elements = {
            MyTaskButton: () => cy.get("div[class='Sidebar SidebarResizableContainer-sidebar']>nav>div:nth-child(2)>a"),
            AddTaskButton: () => cy.get("div[class='PrimarySplitDropdownMenuButtonA11y AddTaskDropdownButton']>div:nth-child(1)"),
            DetailsTaskButton: () => cy.get("div[class='SpreadsheetTaskList SpreadsheetPotGridContents-taskList']>div:nth-child(2)>div>div>div>div>div>div:nth-child(5)>div>div:nth-child(2)"),
            TitleText: () => cy.get("div[class='SpreadsheetTaskList SpreadsheetPotGridContents-taskList']>div:nth-child(2)>div>div>div>div>div>label>textarea"),
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
            ForThisWeekFilterButton:()=>cy.get("ul[class='MultiFilterQuickFiltersRefreshed-content']>li:nth-child(3)>div"),
            ForNextWeekFilterButton:()=>cy.get("ul[class='MultiFilterQuickFiltersRefreshed-content']>li:nth-child(4)>div"),
            TaskArea: () => cy.get("div[class='DropTargetRow--inSpreadsheetGrid DropTargetRow MyTasksSpreadsheetGridRow-dropTargetRow']:nth-child(2)"),
            DeleteTaskOption: () => cy.get("div[class='Dropdown']>div>div>div:nth-child(12)>div"),
            PopUpConfirmDeleteTask: () => cy.get("div[class='ToastNotificationContent']>div:nth-child(2)"),
            AddOrDeleteMenberButton:()=> cy.get("div[class='FollowersList EditableFollowersRow-followersList']>div:nth-child(4)"),
            NewAdminButton: ()=> cy.get("div[class='ToastNotificationContent-text']>span[aria-hidden='true']"),
            NewAdmindText: () => cy.get("div[class='DomainUserSelectorTokenTypeahead']>input"),
            GroupTaskButton: ()=> cy.get("div[class='PageToolbarStructure-rightChildren']>div:nth-child(3)"),
            GroupBySectionsOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(1)>div"),
            GroupByDeliveryDateOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(2)>div"),
            GroupByCreator:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(3)>div"),
            GroupByProject:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(4)>div"),
            DeleteFilterGroupButton:()=>cy.get("div[class='MultiSortFilterHeader']>div:nth-child(2)>div"),
            AddSectionButton:()=>cy.get("div[class='Scrollable Scrollable--horizontal SpreadsheetGridScroller-horizontalScroller']>div:nth-child(2)>div[role]"),
            NameCreatorTasks:()=>cy.get("div[class='DomainUserHeaderContents']"),
            DuplicateTaskOption:()=>cy.get("a[data-testid='static-menu-item-base']:nth-child(1)"),
            CreateNewTaskDuplicate:()=>cy.get("div[class='DuplicateObjectDialogStructure-confirmButton']>div"),
            DeliveryDateButton:()=>cy.get("div[id='task_pane_due_date_input']"),
            DeliveryDateText:()=>cy.get("input[id='due_date_input_id_select']"),
            DashboardViewButton:()=>cy.get("nav[class='TabNavigationBar']>ul>li:nth-child(2)>a"),
            ListViewButton:()=>cy.get("nav[class='TabNavigationBar']>ul>li:nth-child(1)>a"),
            DeleteFiltersButton:()=>cy.get("div[class='MultiSortFilterHeader']>div:nth-child(2)>div"),
            SeeDetailsTaskOption:()=>cy.get("a[data-testid='static-menu-item-base']:nth-child(8)"),
            AddProjectToTaskButton:()=>cy.get("div[class='TaskProjects-projects']>div"),
            AddProjectToTaskText:()=>cy.get("div[class='TaskProjects-typeaheadContainer']>input"),
            SeeDetailsToTaskOption:()=>cy.get("div[class='Dropdown']>div>div>div:nth-child(8)>div"),

            NameTaskList:()=>cy.get("div[class='SpreadsheetTaskName-shadow']"),
            NameGroupsSection:()=>cy.get("div[class='DropTargetTaskGroupHeader']>div>div>div>div"),
            //AssignMultipleAdminsOptions: ()=> cy.get("div[data-testid='layer-positioner-layer']>div>div:nth-child(2)>div"),
            //AssignNewAdminToTaskText: ()=> cy.get("input[data-testid='tokenizer-input']"),
            //AssignTaskToNewAdminButton: () => cy.get("div[class='MultiAssignPopup-content']>div>div:nth-child(3)>div:nth-child(2)"),

            // Para encontrar elementos
            UnfinishedTaskList: () => cy.get("div[class='TaskGroup']"),
            TasksUnfinished: () => cy.get("textarea"),
        };

    //functionstask

    createTask({ name, dueDate = null, isCompleted = false }) {
        this.clickAddTask();
        this.typeTitleText(name);
        this.clickDetailsTask();
    
        if (dueDate) {
            Utils.clickElement(this.elements.DeliveryDateButton());
            Utils.typeAndPressEnter(this.elements.DeliveryDateText(), dueDate);
        }
    
        if (isCompleted) {
            this.clickFinishTaskButton();
        }
    
        this.clickCloseDetailButton();
        Utils.clickElement(this.elements.DashboardViewButton());
        Utils.clickElement(this.elements.ListViewButton());
        cy.wait(1000);
    }

    DeleteTask(name){
        this.clickFilterButton();
        Utils.clickElement(tareaPage.elements.DeleteFiltersButton());
        Utils.searchElementByTextAndRightClick(this.elements.NameTaskList(), name);
        Utils.clickElement(this.elements.DeleteTaskOption());
    }
    //crear eliminar, 

    // CLICK ACTIONS
    clickMyTasks() {
        Utils.clickElement(this.elements.MyTaskButton());
    }

    clickAddTask() {
        Utils.clickElement(this.elements.AddTaskButton());
    }

    clickDetailsTask() {
        Utils.clickElementForce(this.elements.DetailsTaskButton()); // Utilizar clic forzado
    }

    clickCloseDetailButton() {
        Utils.clickElement(this.elements.CloseDetailButton());
    }

    clickMakePublicTaskButton() {
        Utils.clickElement(this.elements.MakePublicTaskButton());
    }

    clickFinishTaskButton() {
        Utils.clickElement(this.elements.FinishTaskButton());
    }

    clickFilterButton() {
        Utils.clickElement(this.elements.FilterButton());
    }

    clickCompletedTaskFilterButton() {
        Utils.clickElementForce(this.elements.CompletedTaskFilterButton());
    }

    clickUnifinishedTaskFilterButton(){
        Utils.clickElement(this.elements.UnfinishedTaskFilterButton());
    }

    clickDeleteTaskOption(){
        Utils.clickElement(this.elements.DeleteTaskOption());
    }

    rightClickAndSeeOptionsTask(){
        Utils.rightClickElement(this.elements.TaskArea());
    }

    clickAssignNewAdminToTask(){
        Utils.clickElement(this.elements.AssignTaskToNewAdminButton());
    }

    clickAddNewAdmin() {
        Utils.clickElement(this.elements.NewAdminButton());
    }    
    
    clickAndTypeNewMenber(text){
        Utils.clickSelectorTypeTextAndPressEnter(this.elements.AddOrDeleteMenberButton(),text)
    }

    

    // TYPE ACTIONS
    typeTitleText(text){
        Utils.typeText(this.elements.TitleText(), text);
    }

    typeDescriptionTex(text){
        Utils.typeText(this.elements.DescriptionText(), text);
    }

    clearAndTypeTitleText(text) {
        Utils.clearAndTypeText(this.elements.TitleText(), text);
    }

    clearAndTypeDescriptionText(text) {
        Utils.clearAndTypeText(this.elements.DescriptionText(), text);
    }

    clearAndTypeCommentText(text) {
        Utils.clearAndTypeText(this.elements.CommentTaskText(), text);
    }

    typeCommentText(text){
        Utils.typeText(this.elements.CommentTaskText(),text);
    }

    typeNewAdminAndPressEnter(text){
        Utils.typeAndPressEnter(this.elements.NewAdmindText(), text);
    }

    // VERIFY ACTIONS
    verifyTaskExistsinUnfinishedTasks(taskName) {
        Utils.verifyTextInMultipleElements(this.elements.TasksUnfinished(), taskName);
    }

    verifyLastTaskExistCreatedIs(taskName){
        Utils.verifyTextEquals(this.elements.FirstTaskInList(), taskName)
    }

    verifyLastChanges(taskname, description, comment){
        Utils.verifyTextEquals(this.elements.TitleText(),taskname);
        Utils.verifyTextEquals(this.elements.DescriptionText(), description);
        Utils.verifyTextEquals(this.elements.CommentTaskText(), comment);
        Utils.verifyElementTextEquals(this.elements.MakePrivateTaskButton, "Hacer privado");
    }
    
    verifyLastTaskCompleted(taskname){
        Utils.verifyTextEquals(this.elements.FirstTaskInList(),taskname)
    }

    verifyDeleteTask() {
        Utils.verifyDeleteTask(this.elements.PopUpConfirmDeleteTask(), "Deshacer"); 
    }

    verifyNewAminIs(){
        
    }

    //SAVE ELEMENTS
    saveFirstTitleTask() {
        Utils.getTextFromText(this.elements.FirstTaskInList());
    }

}

export const tareaPage = new TareaPage();
