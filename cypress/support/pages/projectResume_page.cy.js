import Utils from '../utils.cy.js';

class ProyectoPageResumen {
    
        elements = {
            AddToPortfolioButton: () => cy.get("div[class='ProjectOverviewPortfoliosEmptyState-rightChild']>div:nth-child(2)"),
            AddNamePortfolioText:()=>cy.get("div[class='ProjectOverviewPortfoliosEmptyState-rightChild']>input"),
            AddMemberButton:()=>cy.get("div[class='ProjectOverviewMembersSection-membersGrid']>div:nth-child(1)"),
            AddMemberText:()=>cy.get("input[data-testid='tokenizer-input']"),
            SelectRolMemberButton:()=>cy.get("div[class='ShareModalInvitePage-permissions']>div"),
            InviteMemberButton:()=>cy.get("div[class='ShareModalInvitePage ShareModalInvitePage-streamlined']>div:nth-child(1)>div>div:nth-child(2)>div>div:nth-child(2)"),
            CloseInviteMembersButton:()=>cy.get("div[class='ShareModalHeader-rightButtons']>div:nth-child(2)"),
            DeleteMemberOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(3)>div"),
            AssigneAdminOption:()=>cy.get("div[data-testid='layer-positioner-layer']>div>div>div:nth-child(2)>div"),
            ProjectResumeButton:()=>cy.get("nav[class='ObjectReorderableTabNavigationBar']>ul>div:nth-child(2)>div>div:nth-child(1)>div>div>li>div>div"),
            DescriptionProjectElement:()=>cy.get("div[class='ProjectOverview-content']>div:nth-child(1)>div:nth-child(2)>div>div>div>p:nth-child(1)"),
            DateDeliveryButton:()=>cy.get("div[class='DueDateToken ProjectOverviewActivityFeed-dueDateToken']>div:nth-child(1)"),
            DateDeliveryTextElement:()=>cy.get("div[class='DateInput DateRange-dueDate']"),
            

            ListNameMenber:()=>cy.get("div[class='ProjectOverviewMember-nameRow']>h6"),
            SelectOptionRolMember:()=>cy.get("span[class='TypographyPresentation TypographyPresentation--overflowTruncate TypographyPresentation--medium LabelDescriptionItemStructure-label']"),
        };

    
    //functionstask
    addNewMemberAndAssignRol(email, rol){
        Utils.clickElement(this.elements.AddMemberButton());
        Utils.typeAndPressEnter(this.elements.AddMemberText(), email);
        Utils.clickElementForce(this.elements.SelectRolMemberButton());
        Utils.searchElementByTextAndClick(this.elements.SelectOptionRolMember(), rol);
        Utils.clickElement(this.elements.InviteMemberButton());
        Utils.clickElement(this.elements.CloseInviteMembersButton());
        cy.wait(5000);
    }

    deleteMember(email){
        Utils.searchElementByTextAndClick(this.elements.ListNameMenber(), email);
        Utils.clickElement(this.elements.DeleteMemberOption());
    }
    //crear eliminar, 

    // CLICK ACTIONS


    // TYPE ACTIONS


    // VERIFY ACTIONS


    //SAVE ELEMENTS

}

export const proyectoPageResume = new ProyectoPageResumen();
