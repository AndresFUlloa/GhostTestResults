import PageSettingsPage from "../pages/post_settings_page.js";

class PageSettingsUI {

    constructor() {
        this.pageSettingsPage = new PageSettingsPage();
    }

    deletePage= () => {
        this.pageSettingsPage.clickDelete();
        this.pageSettingsPage.clickConfirmDelete();
    }

}
export default new PageSettingsUI();