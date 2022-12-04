import NewPostPage from "../pages/new_post_page.js";
import ScreenshotHelper from "../utils/screenshot_helper.js";

class NewPostUI {
    constructor() {
        this.newPostPage = new NewPostPage();
    }

    setTitleAndPostText = (title, postText) => {
        this.newPostPage.setTitle(title);
        this.newPostPage.setPostText(postText);
    }

    createPost = (title, postText, url = "") => {
        this.setTitleAndPostText(title, postText);
        if(url.length > 0){
            this.addUrl(url);
            ScreenshotHelper.takeScreenShot("post", "createPostUrl", "new", "postUrl");
        }
        cy.wait(1000);
        this.newPostPage.clickPublish();
    }

    editPost = (title, postText) => {
        this.setTitleAndPostText(title, postText);
        cy.wait(1000);
        this.newPostPage.clickPublish();
    }

    addUrl = (url) => {
        this.newPostPage.clickAddCard();
        this.newPostPage.clickOther();
        this.newPostPage.setUrl(url);
        cy.wait(2000);
        this.newPostPage.clickUrlAsLink();
    }

    openSettings = () => {
        this.newPostPage.clickSettings();
    }

    goToPosts = () => {
        this.newPostPage.clickPosts();
    }
}
export default new NewPostUI();
