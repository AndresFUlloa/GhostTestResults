export default class NewPostPage{

    constructor(){
        this.postTitleLocator = "textarea[placeholder='Post Title']";
        this.postTextLocator = "div.koenig-editor__editor";
        this.publishLocator = "//div/span[text()='Publish' or text()='Update']";
        this.updateLocator = "button.gh-editor-save-trigger";
        this.updatedLocator = "span.gh-notification-title"
        this.settingsLocator = "button[title='Settings']";
        this.addCardLocator = "button[aria-label='Add a card']";
        this.otherLocator = "div[title='Other...']";
        this.urlLocator = "input[name='url']";
        this.urlAsLinkLocator = "//button/span[text()='Paste URL as link']";
        this.postsLocator = "a[href='#/posts/']";
    }

    setTitle = (title) => {
        cy.get(this.postTitleLocator).clear().type(title);
    }

    setPostText = (text) => {
        cy.get(this.postTextLocator).clear().type(text + "{enter}", {force: true});
    }

    clickPublish = () => {
        cy.xpath(this.publishLocator).click();
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
        cy.get(this.postsLocator).eq(0).click();
    }

}