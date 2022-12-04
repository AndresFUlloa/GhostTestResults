

export default class PagesListPage {


    constructor(){
        this.newPageButtonLocator="a[href='#/editor/page/']";
        this.editPagesLocator = "span.gh-post-list-cta.edit";
    }

    clickNewPage = () => {
        cy.wait(2000)
        cy.get(this.newPageButtonLocator).click();
    }

    pageExist = (pageName) => {
        cy.xpath(`//h3[text()='${pageName}']`).should('exist');
    }

    clickEditPages = (pos) => {
        cy.wait(3000)
        cy.get(this.editPagesLocator).eq(pos).click();
    }


}