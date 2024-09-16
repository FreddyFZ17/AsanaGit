import {getTextFromText, typeAndPressEnter, rightClickElement, typeText, clickElement, clickElementForce, clearAndTypeText, verifyTaskExists, verifyTextEquals, clickAndType, clickSelectorTypeTextAndPressEnter, verifyTextInMultipleElements ,verifyDeleteTask} from './functions.cy.js';


class HomePage {
    
        elements = {
            HomeButton: () =>cy.get("div[class='Sidebar SidebarResizableContainer-sidebar']>nav>div:nth-child(1)>a"),
            LastProjecCreatedtName: () =>cy.get("div[class='ProjectsWidgetItemList-items ProjectsWidgetItemList-items--nondraggable']>div:nth-child(2)>div>div>div>div>div>div>div:nth-child(1)>a>span"),
            LastProjectCreatedButton: () =>cy.get("div[class='ProjectsWidgetItemList-items ProjectsWidgetItemList-items--nondraggable']>div:nth-child(2)>div>div>div>div[class='RowStructure-leftChildren']"),
            

            MyTaskButton: () => cy.get("div[class='Sidebar SidebarResizableContainer-sidebar']>nav>div:nth-child(2)>a"),
            AddTaskButton: () => cy.get("div[class='PrimarySplitDropdownMenuButtonA11y AddTaskDropdownButton']>div:nth-child(1)"),
        };

    //functionstask
    //crear eliminar, 

    // CLICK ACTIONS
    clickHomePage() {
        clickElement(this.elements.HomeButton());
    }

    clickLastProjectCreatedButton(){
        clickElementForce(this.elements.LastProjectCreatedButton());
    }

    // TYPE ACTIONS
    typeTitleTex(text){
        typeText(this.elements.TitleText(), text);
    }

    // VERIFY ACTIONS
    verifyTaskExistsinUnfinishedTasks(taskName) {
        verifyTextInMultipleElements(this.elements.TasksUnfinished(), taskName);
    }

    verifyLastProjectCreatedIs(text){
        verifyTextEquals(this.elements.LastProjecCreatedtName(), text);
    }

    //SAVE ELEMENTS
    saveFirstTitleTask() {
        getTextFromText(this.elements.FirstTaskInList());
    }

}

export const homePage = new HomePage();
