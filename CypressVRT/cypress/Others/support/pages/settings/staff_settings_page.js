export default class StaffSettingsPage {
    constructor(){
        // send invitation locators
        this.InvitePeopleButtonLocator="body > div.gh-app > div > main > section > div > header > section > button";
        this.newStaffInvitationEmailAddress = "input[name=email]";
        this.newStaffInvitationSendInvitationLocator = "//span[text()='Send invitation now →']";
        // re-sending staff invitation locators
        this.resendOptionLocator= "a[href='#resend']";
        this.resendinvitationNotificationLoc = "//span[contains(text(),'Invitation resent!')]";
        this.alertResentLocator = "//div.gh-alert-content[contains(text(),'Error sending email!')]"
        /// revoking invitation locators
        this.revokeInvitationLocator  = "a[href='#revoke']"
        this.revokedInvitationNotificationLoc = "//span[contains(text(),'Invitation revoked')]";
        /// updating staff info locators
        this.selectActiveUserLocator="a[href*='#/settings/staff/']"
        
    }

    ////invite new people
    
    clickInvitePeopleButton=()=>{
        cy.get(this.InvitePeopleButtonLocator).click();
    }
     
    setNewStaffInvitationEmail(email){
        cy.wait(2000);
        cy.get(this.newStaffInvitationEmailAddress).clear().type(email);
    }
     
    clickSentInvitationButton=()=>{
        cy.wait(2000);
        cy.xpath(this.newStaffInvitationSendInvitationLocator).click();
    }

    ////

    checkEmailInvitationSended=(email)=>{
        
        let locator="//h3[text()='"+email+"']"
        cy.xpath(locator).should("exist")
    }

    clickResendOptionButton=()=>{
        cy.get(this.resendOptionLocator).first().click();
    }

    checkIfInvitationIsResended=()=>{
        cy.xpath(this.resendinvitationNotificationLoc).should("exist").then((invitation)=>{
           if(!invitation){
              cy.xpath(this.alertResentLocator).should("exist")
           }
        }); 
    }
    
    clickRevokeOptionButton=()=>{
        cy.get(this.revokeInvitationLocator).first().click();
    }
  
    checkIfInvitationIsRevoked=()=>{
        cy.xpath(this.revokedInvitationNotificationLoc).should("exist"); 
    }
    //

    selectActiveUserStaff=()=>{
        cy.get(this.selectActiveUserLocator).first().click();
    }

    
}