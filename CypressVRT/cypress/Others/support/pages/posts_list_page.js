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

    postExist = (postName) => {
        cy.xpath(`//h3[text()='${postName}']`).should('exist');
    }

}