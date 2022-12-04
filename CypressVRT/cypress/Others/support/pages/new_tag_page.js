export default class NewTagPage{

    constructor(){
        this.tagNameLocator = "input#tag-name";
        this.descriptionLocator = "textarea#tag-description";
        this.saveLocator = "button.gh-btn-primary"
        this.deleteLocator = "button.gh-btn-red";
        this.confirmDeleteLocator = "div.modal-footer button.gh-btn-red";
    }

    setTagName = (tagName) => {
        cy.get(this.tagNameLocator).clear().type(tagName);
    }

    setTagDescription = (description) => {
        cy.get(this.descriptionLocator).clear().type(description);
    }

    clickSave = () => {
        cy.get(this.saveLocator).click();
    }

    clickDelete = () => {
        cy.get(this.deleteLocator).click();
    }

    clickConfirmDelete = () => {
        cy.get(this.confirmDeleteLocator).click();
    }

}