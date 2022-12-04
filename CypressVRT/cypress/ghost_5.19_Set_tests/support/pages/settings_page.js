export default class SettingsPage {

    constructor(){
         this.staffOptionLocator = "a[href='#/settings/staff/']" ;
    }

    clickStaffOption=()=>{
        cy.get(this.staffOptionLocator).click();
    }

}