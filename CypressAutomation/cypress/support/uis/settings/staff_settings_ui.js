import StaffSettingsPage from "../../pages/settings/staff_settings_page.js";


class StaffSettingsUI{
    constructor(){
        this.staffsettingsPage = new StaffSettingsPage();
         
    }
    selectInvitePeopleOption=()=>{
        this.staffsettingsPage.clickInvitePeopleButton();
    }
    setEmailInvitation=(email)=>{
        this.staffsettingsPage.setNewStaffInvitationEmail(email);
    }
    selectSentInvitationOption=()=>{
        this.staffsettingsPage.clickSentInvitationButton();
    }
    checkSendedInvitation=(email)=>{
        this.staffsettingsPage.checkEmailInvitationSended(email);
    }

    selectResendOption=()=>{
        this.staffsettingsPage.clickResendOptionButton();
    }
    checkConfirmationInvitation=()=>{
        this.staffsettingsPage.checkIfInvitationIsResended();
    }
    //revoke
    selectRevokeInvitationOption=()=>{
        this.staffsettingsPage.clickRevokeOptionButton();
    }
    checkIfInvitationIsRevoked=()=>{
        this.staffsettingsPage.checkIfInvitationIsRevoked();
    }


    ///
    selectActiveUserStaff=()=>{
        this.staffsettingsPage.selectActiveUserStaff();
    }


    ///

    

}

export default new StaffSettingsUI();


