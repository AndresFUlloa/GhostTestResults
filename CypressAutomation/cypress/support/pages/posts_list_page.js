export default class PostsListPage {

    constructor(){
        this.newPostLocator = "a.gh-btn[href='#/editor/post/']";
        this.editPostsLocator = "div.gh-list-data-inner > a.ember-view";
    }

    clickNewPost = () => {
        cy.get(this.newPostLocator).click();
    }

    clickEditPosts = (pos) => {
        cy.get(this.editPostsLocator).eq(pos).click();
    }

    clickEditRandPost = () => {
        cy.get(this.editPostsLocator).then($a => {
            var randomPost = $a.get(getRandomInt(0, $a.length));
            cy.wrap(randomPost).click();
        })
    }

    postExist = (postName) => {
        cy.xpath(`//h3[text()='${postName}']`).should('exist');
    }

}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}