import PublishPage from "../pages/publish_post_page.js";
import ScreenshotHelper from "../utils/screenshot_helper.js";

class PublishPostUI {
    constructor() {
        this.publishPage = new PublishPage();
    }

    finishPublish = (scheduleForLater = false) => {
        cy.wait(1000);
        if(scheduleForLater){
            //this.publishPage.clickSetTime();
            this.publishPage.clickScheduleForLater();
            this.publishPage.clickScheduele();
        }
        else
        {
            this.publishPage.clickContinue();
            this.publishPage.clickPublishNow();
            cy.wait(1000)
            ScreenshotHelper.takeScreenShot("post", "createPost", "publish", "publishPost", this.publishPage.getContainer())
        }
    }

    publishEdited = () => {
        this.publishPage.clickContinue();
        this.publishPage.clickPublishNow();
    }

    goToEditor = () => {
        this.publishPage.clickEditor();
    }
}
export default new PublishPostUI()