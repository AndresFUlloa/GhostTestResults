import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import SettingsUI from '../support/uis/settings_ui.js'
import StaffSettingsUI from  '../support/uis/settings/staff_settings_ui.js'
import EditStaffProfileUI from  '../support/uis/settings/edit_staff_profile_ui.js'
describe('ghost staff tests', function() {
    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(3000);
        StartUI.login("ja.pardor1@uniandes.edu.co", "Aa1234567*");
    });

     it('Invite Staff', function(){
        cy.log("**START**");
        NavigationUI.goToSettings();
        SettingsUI.goToStaffOption();
        StaffSettingsUI.selectInvitePeopleOption();
        let emailTests = ["alanbrito+eivwji5e1c@gmail.com","alanbrito+yz5vmnrjp9@gmail.com","alanbrito+v5rcfracqn@gmail.com"]
        let email = emailTests[Math.floor(Math.random()*emailTests.length)];
        StaffSettingsUI.setEmailInvitation(email);
        StaffSettingsUI.selectSentInvitationOption();
        cy.intercept('POST', '**/admin/invites/**').as('SendingInvitation')
       // cy.wait('@SendingInvitation');
       cy.wait(10000);
       //cy.visit('http://localhost:2368/ghost/#/settings/staff')
        StaffSettingsUI.checkSendedInvitation(email);
    });

    
    it('Resend staff Invitation',function(){
       cy.log("**START**");
       NavigationUI.goToSettings();
       SettingsUI.goToStaffOption();
       cy.intercept('POST', '**/admin/invites/').as('ResendingInvitation')
       StaffSettingsUI.selectResendOption();
       cy.wait('@ResendingInvitation');
       StaffSettingsUI.checkConfirmationInvitation();
       
    });


    it('Revoke staff Invitation',function(){
        cy.log("**START**");
        NavigationUI.goToSettings();
        SettingsUI.goToStaffOption();
        cy.intercept('DELETE', '**').as('RevokingInvitation')
        StaffSettingsUI.selectRevokeInvitationOption();
        cy.wait('@RevokingInvitation');
        StaffSettingsUI.checkIfInvitationIsRevoked();
        
     });


     it('Update data of staff member',function(){
        cy.log("**START**");
        
        NavigationUI.goToSettings();
        SettingsUI.goToStaffOption();
        StaffSettingsUI.selectActiveUserStaff();
        let fullmame= "Esto es un nombre de pruebas";
        let slug= "nuevoslug";
        let NewBio = faker.lorem.lines(2)

        EditStaffProfileUI.setNewFullName(fullmame);
        EditStaffProfileUI.setNewSlug(slug);
        EditStaffProfileUI.setNewBio(NewBio);
         
        // save data uploaded
        EditStaffProfileUI.saveData();
        cy.wait(3000);
        //
        NavigationUI.goToSettings();
        SettingsUI.goToStaffOption();
        
        StaffSettingsUI.selectActiveUserStaff();
        /// check updated changes
           
        EditStaffProfileUI.fieldIsUpdated(fullmame,'fullName');
        EditStaffProfileUI.fieldIsUpdated(NewBio,'bio');
        EditStaffProfileUI.fieldIsUpdated(slug,'slug');
        
     });

 


     
    
    

})