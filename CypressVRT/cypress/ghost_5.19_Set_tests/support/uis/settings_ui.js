import SettingsPage from "../pages/settings_page.js";


  class SettingsUI{
    
    constructor(){
        this.SettingsPage= new SettingsPage();
    }
    
    goToStaffOption=()=>{
        this.SettingsPage.clickStaffOption();
    }
}

export default new SettingsUI();