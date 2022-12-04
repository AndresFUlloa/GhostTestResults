export default class NewPostPage{

    constructor(){
        this.postTitleLocator = "textarea";
        this.postTextLocator = "div.koenig-editor__editor";
        this.publishLocator = "button.gh-publish-trigger";
        this.updateLocator = "button.gh-editor-save-trigger";
        this.updatedLocator = "span.gh-notification-title"
        this.settingsLocator = "button.settings-menu-toggle";
        this.addCardLocator = "button[aria-label='Add a card']";
        this.otherLocator = "div[title='Other...']";
        this.urlLocator = "input[name='url']";
        this.urlAsLinkLocator = "//button/span[text()='Paste URL as link']";
        this.postsLocator = "a[href='#/posts/']";
        this.errorLocator = "//*[contains(text(), 'error')]";
    }

    setTitle = (title) => {
        cy.get(this.postTitleLocator).clear().type(title);
    }

    clearTitle = () => {
        cy.get(this.postTitleLocator).clear();
    }

    setPostText = (text) => {
        cy.get(this.postTextLocator).clear().type(text + "{enter}", {force: true});
    }

    clickPublish = () => {
        cy.get(this.publishLocator).click();
    }

    clickUpdate = () => {
        cy.get(this.updateLocator).click();
    }

    clickSettings = () => {
        cy.get(this.settingsLocator).click();
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

    isUpdated = () => {
        cy.get(this.updatedLocator).then($span => {
            cy.log('Texo span:' +$span.text);
            expect($span.text).to.equal('Updated');
        })
    }

    clickPosts = () => {
        cy.get(this.postsLocator).first().click();
    }

    validateError = () => {
        cy.get(this.errorLocator).should('be.visible');
    }

}