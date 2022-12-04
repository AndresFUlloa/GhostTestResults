export default class PublishPage {
    constructor() {
        this.continueLocator = "//button/span[text()='Publish' or text()='Update']";
        this.schedueleLocator = "button.gh-btn-blue";
        this.publishRightNowLocator = "button.ember-view";
        this.boomLocator = "span.green";
        this.setTimeLocator = "div.gh-publish-setting.last div span"; //"//span[contains(text(), 'Right now')]";
        this.scheduleForLaterLocator = "div.gh-publishmenu-radio-button";
        this.editorLocator = "button.gh-publish-back-button";
        this.containerLocator = "div.ember-basic-dropdown-content";
    }

    clickContinue = () => {
        cy.xpath(this.continueLocator).click();
    }

    clickScheduele = () => {
        cy.get(this.schedueleLocator).click();
    }

    clickPublishNow = () => {
        cy.get(this.publishRightNowLocator).click({force:true});
    }

    clickSetTime = () => {
        cy.get(this.setTimeLocator).click();
    }

    clickScheduleForLater = () => {
        cy.get(this.scheduleForLaterLocator).eq(1).click();
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