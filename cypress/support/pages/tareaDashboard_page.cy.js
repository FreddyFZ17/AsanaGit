import Utils from "../../support/utils.cy";

class TareaDashboardPage{
    elements = {
        

        SectionsNameList:()=>cy.get("div[class='BoardColumn-dragHandle']>div>div>h3"),
    }
}

export const tareaDashboardPage = new TareaDashboardPage();
