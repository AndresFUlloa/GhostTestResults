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
    
    goToSettings=()=>{
        this.navigationPage.clickSettingsOption();
    }

    goToStaffSettings=()=>{
        cy.wait(3000);
        this.navigationPage.clickStaffOption();
    }
    goToWhatsNewOption=()=>{
        this.navigationPage.clickUserOptions();
        cy.wait(2000);
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