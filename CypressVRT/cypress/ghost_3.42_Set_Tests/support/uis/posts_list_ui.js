import PostsListPage from "../pages/posts_list_page.js";
class PostListUI {
    
    constructor(){
        this.postsListPage = new PostsListPage();
    }

    goToNewPost = () => {
        this.postsListPage.clickNewPost();
    }

    editPost = (pos=0) => {
        this.postsListPage.clickEditPosts(pos);
    }

    validatePos = (postName) => {
        this.postsListPage.postExist(postName);
    }

}
export default new PostListUI();