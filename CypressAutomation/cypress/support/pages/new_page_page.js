


export default class newPagePage{

   constructor(){
    
    this.pageTitleLocator = "textarea";
    this.pageTextLocator = "div.koenig-editor__editor";
    this.publishLocator = "button.gh-publish-trigger";
    this.pagesLocator = "a[href='#/pages/']";
    this.updateLocator = "button.gh-editor-save-trigger";
    this.updatedLocator = "span.gh-notification-title"
    this.addCardLocator = "button[aria-label='Add a card']";
    this.otherLocator = "div[title='Other...']";
    this.urlLocator = "input[name='url']";
    this.urlAsLinkLocator = "//button/span[text()='Paste URL as link']";
    this.settingsLocator = "button.settings-menu-toggle";
   }

    setPageText = (text) => {
        cy.get(this.pageTextLocator).clear().type(text + "{enter}", {force: true});
    }
    setTitle = (title) => {
        cy.get(this.pageTitleLocator).clear().type(title);
    }

    clickPublish = () => {
        cy.get(this.publishLocator).click();
    }

    clickPages = () => {
        cy.get(this.pagesLocator).first().click();
    }
    clickUpdate = () => {
        cy.get(this.updateLocator).click();
    }

    clickAddCard = () => {
        cy.get(this.addCardLocator).click();
    }

    clickOther = () => {
        cy.get(this.otherLocator).click();
    }

    setUrl = (url) => {
        cy.get(this.urlLocator).type(url + '{enter}');
    }

    clickUrlAsLink = () => {
        cy.xpath(this.urlAsLinkLocator).click()
    }

    clickSettings = () => {
        cy.get(this.settingsLocator).click();
    }

  


}