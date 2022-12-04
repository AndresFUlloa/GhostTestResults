import NavigationPage from "../pages/navigation_page.js";

class NavigationUI {
    
    constructor(){
        this.navigationPage = new NavigationPage();
    }

    goToPosts = () => {
        this.navigationPage.clickPosts();
    }

    goToTags = () => {
        this.navigationPage.clickTags();
    }

    goToPages = () => {
        this.navigationPage.clickPages();
    }
    
    goToSettings=()=>{
        this.navigationPage.clickSettingsOption();
    }

    goToWhatsNewOption=()=>{
        this.navigationPage.clickUserOptions();
        this.navigationPage.clickWhatIsNewButton();
    }
    
    checkWhatsNewOption=()=>{
        this.navigationPage.checkWhatsNewOption();
    }

    goToYourProfileOption=()=>{
        this.navigationPage.goToYourProfileOption();
    }
}
export default new NavigationUI();