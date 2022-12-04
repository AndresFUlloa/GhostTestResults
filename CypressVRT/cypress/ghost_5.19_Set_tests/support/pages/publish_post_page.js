export default class PublishPage {
    constructor() {
        this.continueLocator = "button.gh-btn-black";
        this.publishRightNowLocator = "button.ember-view";
        this.boomLocator = "span.green";
        this.setTimeLocator = "div.gh-publish-setting.last div span"; //"//span[contains(text(), 'Right now')]";
        this.scheduleForLaterLocator = "//label[text()='Schedule for later']";
        this.editorLocator = "button.gh-publish-back-button";
        this.containerLocator = "div.gh-publish-settings-container";
    }

    clickContinue = () => {
        cy.get(this.continueLocator).click();
    }

    clickPublishNow = () => {
        cy.get(this.publishRightNowLocator).click({force:true});
    }

    clickSetTime = () => {
        cy.get(this.setTimeLocator).click();
    }

    clickScheduleForLater = () => {
        cy.xpath(this.scheduleForLaterLocator).click();
    }

    getGreenText = (textCompare) => {
        cy.get(this.boomLocator).then($span => {
            cy.log('Texo span: ' + $span.text);
            expect($span.text()).to.equal(textCompare);
        });
    }

    clickEditor = () => {
        cy.get(this.editorLocator).click();
    }

    getContainer = () => {
        return cy.get(this.containerLocator);
    }

}