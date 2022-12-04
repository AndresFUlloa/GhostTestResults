export default class PostsListPage {

    constructor(){
        this.newPostLocator = "a.gh-btn[href='#/editor/post/']";
        this.editPostsLocator = "li.gh-posts-list-item";
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