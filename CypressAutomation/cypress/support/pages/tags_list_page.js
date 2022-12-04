export default class TagsListPage {

    constructor(){
        this.newTagLocator = 'a[href="#/tags/new/"]';
        this.editTagsLocator = "span.nr2";
    }

    clickNewTag = () =>{
        cy.get(this.newTagLocator).click();
    }

    tagExists = (tagName, repetido) => {
        if(!repetido)
            cy.xpath(`//h3[text()='${tagName}']`).should('exist');
        else
            cy.xpath(`//h3[text()='${tagName}']`).should(($h3) => {
                expect($h3.length).to.equal(2);
            });
    }

    tagDescriptionExists = (description) => {
        cy.xpath(`//p[text()='${description}']`).should('exist');
    }

    clickEditTag = (pos) => {
        cy.get(this.editTagsLocator).eq(pos).click();
    }

    clickEditRandomTag = () => {
        cy.get(this.editTagsLocator).then($span => {
            var randomTag = $span.get(getRandomInt(0, $span.length));
            cy.wrap(randomTag).click();
        });
    }

}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}