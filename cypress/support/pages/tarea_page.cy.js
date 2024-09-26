import Utils from '../utils.cy.js';

class TareaPage {
    
        elements = {
            MyTaskButton: () => cy.get("div[class='Sidebar SidebarResizableContainer-sidebar']>nav>div:nth-child(2)>a"),
            AddTaskButton: () => cy.get("div[class='PrimarySplitDropdownMenuButtonA11y AddTaskDropdownButton']>div:nth-child(1)"),
            DetailsTaskButton: () => cy.get("div[class='SpreadsheetTaskList SpreadsheetPotGridContents-taskList']>div:nth-child(2)>div>div>div>div>div>div:nth-child(5)>div>div:nth-child(2)"),
            TitleText: () => cy.get("div[class='SpreadsheetTaskList SpreadsheetPotGridContents-taskList']>div:nth-child(2)>div>div>div>div>div>label>textarea"),
            TitleTextInDetails:()=>cy.get("div[class='AutogrowTextarea-container TitleInput-objectName']>textarea"),
            FirstTaskInList:() => cy.get("div[class='TaskGroup']>div>div:nth-child(2)>div>div>div>div>div>label>textarea"),
            DescriptionText: () => cy.get("div[data-testid='task-description-tec']>div[contenteditable]"),
            CloseDetailButton: () => cy.get("svg[class='Icon CloseIcon']"),
            MakePublicTaskButton: () => cy.get("div[class='MessageBanner-contents MessageBanner-contents--left']>div:nth-child(3)"),
            MakePrivateTaskButton: () => cy.get("div[class='MessageBanner-contents MessageBanner-contents--left']>div:nth-child(2)"),
            CommentTaskText: () => cy.get("div[data-testid='comment-composer-editor-tec']>div[contenteditable]"),
            FinishTaskButton: () => cy.get("div[class='TaskPaneToolbarAnimation']>div>div>div[role='button']"),
            FilterButton: () => cy.get("div[class='PageToolbarStructure-rightChildren']>div:nth-child(1)"),
            CompletedTaskFilterButton: () => cy.get("ul[class='MultiFilterQuickFiltersRefreshed-content']>li>div>div:nth-child(1)"),
            UnfinishedTaskFilterButton: () => cy.get("ul[class='MultiFilterQuickFiltersRefreshed-content']>li:nth-child(1)>div"),
            ForThisWeekFilterButton:()=>cy.get("ul[class='MultiFilterQuickFiltersRefreshed-content']>li:nth-child(3)>div"),
            ForNextWeekFilterButton:()=>cy.get("ul[class='MultiFilterQuickFiltersRefreshed-content']>li:nth-child(4)>div"),
            TaskArea: () => cy.get("div[class='DropTargetRow--inSpreadsheetGrid DropTargetRow MyTasksSpreadsheetGridRow-dropTargetRow']:nth-child(2)"),
            DeleteTaskOption: () => cy.get("div[class='Dropdown']>div>div>div:nth-child(12)>div"),
            PopUpConfirmDeleteTask: () => cy.get("div[class='ToastNotificationContent']>div:nth-child(2)"),
            AddOrDeleteMenberButton:()=> cy.get("div[class='FollowersList EditableFollowersRow-followersList']>div:nth-child(4)"),
            TypeNewMemberText:()=>cy.get("input[data-testid='tokenizer-input']"),
            NewAdminButton: ()=> cy.get("div[id='task_pane_assignee_input']"),
            NewAdminText: () => cy.get("div[class='DomainUserSelectorTokenTypeahead']>input"),
            SendInviteButton:()=>cy.get("div[class='EmailOnlyInviteInputFields-inputRow']>div:nth-child(2)"),
            GroupTaskButton: ()=> cy.get("div[class='PageToolbarStructure-rightChildren']>div:nth-child(3)"),
            GroupBySectionsOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(1)>div"),
            GroupByDeliveryDateOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(2)>div"),
            GroupByCreator:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(3)>div"),
            GroupByProject:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(4)>div"),
            DeleteFilterGroupButton:()=>cy.get("div[class='MultiSortFilterHeader']>div:nth-child(2)>div"),
            AddSectionButton:()=>cy.get("div[class='Scrollable Scrollable--horizontal SpreadsheetGridScroller-horizontalScroller']>div:nth-child(2)>div[role]"),
            NameCreatorTasks:()=>cy.get("div[class='DomainUserHeaderContents']"),
            DuplicateTaskOption:()=>cy.get("div[class='MenuItem TaskMenuItems-duplicateTask']"),
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
            GoToProjectLink:()=>cy.get("a[class='TaskProjectTokenPill-tokenPillWrapper']>div>span>div"),


            GroupList:()=>cy.get("div[class='MultiFieldMenuItemConstructor-labelContainer']>span"),
            EmailMemberInTaskList:()=>cy.get("span[class='TypographyPresentation TypographyPresentation--overflowTruncate']"),
            QuickFilterList:()=>cy.get("ul[class='MultiFilterQuickFiltersRefreshed-content']>li>div"),
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
        //Mejorarlo para que cada que se ejecute priimero verifique que esta en la ventana de my tasks
        Utils.clickElement(this.elements.AddTaskButton());
        Utils.typeText(this.elements.TitleText(), name);
        Utils.clickElementForce(this.elements.DetailsTaskButton());
    
        if (dueDate) {
            Utils.clickElement(this.elements.DeliveryDateButton());
            Utils.typeAndPressEnter(this.elements.DeliveryDateText(), dueDate);
        }
    
        if (isCompleted) {
            Utils.clickElement(this.elements.FinishTaskButton());
        }
    
        Utils.clickElement(this.elements.CloseDetailButton());
        Utils.clickElement(this.elements.DashboardViewButton());
        Utils.clickElement(this.elements.ListViewButton());
    }

    DeleteTask(name){
        Utils.clickElement(this.elements.FilterButton());
        Utils.clickElement(this.elements.DeleteFiltersButton());
        Utils.searchElementByTextAndRightClick(this.elements.NameTaskList(), name);
        Utils.clickElement(this.elements.DeleteTaskOption());
        this.clickUnifinishedTaskFilter();
    }

    searchAndVerifyTaskWithFilter(name, filter){
        Utils.clickElement(this.elements.FilterButton());
        Utils.clickElement(this.elements.DeleteFiltersButton());
        if(filter == "Tareas finalizadas"){
            Utils.clickElement(this.elements.CompletedTaskFilterButton());
        }else{
            Utils.searchElementByTextAndClick(this.elements.QuickFilterList(), filter);
        }
        Utils.searchElementByTextAndClick(this.elements.QuickFilterList(), filter);
        Utils.clickElement(this.elements.FilterButton());
        Utils.verifyTextInMultipleElements(this.elements.NameTaskList(), name)
        this.clickUnifinishedTaskFilter();
    }

    clickUnifinishedTaskFilter(){
        Utils.clickElement(this.elements.FilterButton());
        Utils.clickElement(this.elements.DeleteFiltersButton());
        Utils.clickElement(this.elements.UnfinishedTaskFilterButton());
        Utils.clickElement(this.elements.FilterButton());
    }

    deleteGroupsView(){
        Utils.clickElement(this.elements.GroupTaskButton());
        Utils.clickElement(this.elements.DeleteFiltersButton());
    }

    searchAndVerifyTaskWithGroup(name, group){
        Utils.clickElement(this.elements.GroupTaskButton());
        Utils.searchElementByTextAndClick(this.elements.GroupList(), group);
        Utils.verifyTextInMultipleElements(this.elements.NameTaskList(), name)
        this.deleteGroupsView();
    }
}

export const tareaPage = new TareaPage();
