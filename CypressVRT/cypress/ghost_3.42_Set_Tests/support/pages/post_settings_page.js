export default class PostSettingsPage {

    constructor(){
        this.deleteLocator = "button.gh-btn-hover-red";
        this.confirmDeleteLocator = "button.gh-btn-red";
    }

    clickDelete = () => {
        cy.get(this.deleteLocator).click();
    }

    clickConfirmDelete = () => {
        cy.get(this.confirmDeleteLocator).first().click();
    }

}