import PostSettingsPage from "../pages/post_settings_page.js";

class PostSettingsUI {

    constructor() {
        this.postSettingsPage = new PostSettingsPage();
    }

    deletePost = () => {
        this.postSettingsPage.clickDelete();
        this.postSettingsPage.clickConfirmDelete();
    }

}
export default new PostSettingsUI();