import Utils from '../utils.cy.js';

class HomePage {
    
        elements = {
            HomeButton: () =>cy.get("div[class='Sidebar SidebarResizableContainer-sidebar']>nav>div:nth-child(1)>a"),
            LastProjecCreatedtName: () =>cy.get("div[class='ProjectsWidgetItemList-items ProjectsWidgetItemList-items--nondraggable']>div:nth-child(2)>div>div>div>div>div>div>div:nth-child(1)>a>span"),
            LastProjectCreatedButton: () =>cy.get("div[class='ProjectsWidgetItemList-items ProjectsWidgetItemList-items--nondraggable']>div:nth-child(2)>div>div>div>div[class='RowStructure-leftChildren']"),
            DeleteTaskOption: () => cy.get("div[class='Dropdown']>div>div>div:nth-child(12)>div"),
            MyTaskButton: () => cy.get("div[class='Sidebar SidebarResizableContainer-sidebar']>nav>div:nth-child(2)>a"),
            AddTaskButton: () => cy.get("div[class='PrimarySplitDropdownMenuButtonA11y AddTaskDropdownButton']>div:nth-child(1)"),
            
            TypeElementInSearch:()=>cy.get("div[class='TabPresentation TabList-tab']>span"),
            AsanaSearchButton:()=> cy.get("div[class='GlobalTopbarStructure-search']>div>div>div>div"),
            AsanaSearchText:()=>cy.get("div[class='TopbarTypeaheadDropdownInput-container']>div>input"),
            DeleteFilterButton:()=>cy.get("div[class='StringFilter AdvancedSearchContent-searchBarInput']>div"),
            ProjectButtonToSearch:()=>cy.get("div[class='TabList SearchPageHeaderTabs-tabList']>div:nth-child(3)"),
            PortfolioButtonToSearch:()=>cy.get("div[class='TabList SearchPageHeaderTabs-tabList']>div:nth-child(4)"),

            LisTasksFound:()=>cy.get("div[class='SpreadsheetTaskName-shadow']"),
            ListProjectAndPortfolioFound:()=>cy.get("div[class='SpreadsheetSearchGridNameCell-name']>div[id]"),
            SearchFilters:()=>cy.get("div[class='TopbarSearchFilterSection-contents']>div"),

            
            ListMemberEmail:()=>cy.get("div[class='PeopleGridWidgetCardStructure-description']"),
            NameTaskListInHome:()=>cy.get("div[class='TabListWithPanel OtherUserProfileTasksWidgetTabs']>div:nth-child(2)>div>div>div>div[class='ItemRowTwoColumnStructure-left']>div[class='TaskName TaskName--notEditable TaskRow-taskName']"),
        };

    //functionstask

    DeleteTaskInHome(name){
        Utils.searchElementByTextAndRightClick(this.elements.NameTaskListInHome(), name);
        Utils.clickElement(this.elements.DeleteTaskOption());
    }

    verifyElementSearch(name, element){
        Utils.clickElement(this.elements.AsanaSearchButton());
        Utils.typeAndPressEnter(this.elements.AsanaSearchText(), name);
        if(element == "Tareas"){
            Utils.verifyTextInMultipleElements(this.elements.LisTasksFound(), name);
        }else if(element == "Proyectos"){
            Utils.clickElement(this.elements.ProjectButtonToSearch());
            Utils.verifyTextInMultipleElements(this.elements.ListProjectAndPortfolioFound(), name);
        }else{
            Utils.clickElement(this.elements.PortfolioButtonToSearch());
            Utils.verifyTextInMultipleElements(this.elements.ListProjectAndPortfolioFound(), name);
        }
        Utils.clickElement(this.elements.AsanaSearchButton());
        Utils.clickElement(this.elements.DeleteFilterButton());
        Utils.clickElement(this.elements.MyTaskButton());
        cy.wait(2000);
    }

    //crear eliminar, 

    // CLICK ACTIONS
    clickHomePage() {
        Utils.clickElement(this.elements.HomeButton());
    }

    clickLastProjectCreatedButton(){
        Utils.clickElementForce(this.elements.LastProjectCreatedButton());
    }

    // TYPE ACTIONS
    typeTitleTex(text){
        Utils.typeText(this.elements.TitleText(), text);
    }

    // VERIFY ACTIONS
    verifyTaskExistsinUnfinishedTasks(taskName) {
        Utils.verifyTextInMultipleElements(this.elements.TasksUnfinished(), taskName);
    }

    verifyLastProjectCreatedIs(text){
        Utils.verifyTextEquals(this.elements.LastProjecCreatedtName(), text);
    }

    //SAVE ELEMENTS
    saveFirstTitleTask() {
        Utils.getTextFromText(this.elements.FirstTaskInList());
    }

}

export const homePage = new HomePage();
