import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import NewMemberUI from '../support/uis/new_member_ui.js';
import ScreenshotHelper from '../support/utils/screenshot_helper.js';


describe('Members functionality test set', function() {

    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        StartUI.login("ja.pardor1@uniandes.edu.co", "Aa1234567*");
        
    });

    it("create a new member", function(){
        NavigationUI.goToMembersOption();
        NewMemberUI.goToNewMemberOption();

        let label = faker.commerce.department();
        let name = faker.name.fullName();
        let email = faker.internet.email();
        let note = faker.lorem.lines(10);

        NewMemberUI.setNewName(name);
        NewMemberUI.setNewEmail(email);
        NewMemberUI.setNewNote(note);
        NewMemberUI.setNewLabel(label);

        NewMemberUI.createNewMember();
    });

    it("create a new member with a 500 + characters", function(){
        NavigationUI.goToMembersOption();
        NewMemberUI.goToNewMemberOption();

        let label = faker.commerce.department;
        let name = faker.name.fullName;
        let email = faker.internet.email;
        let note = faker.lorem.lines(10);

        NewMemberUI.setNewName(name);
        NewMemberUI.setNewEmail(email);
        NewMemberUI.setNewNote(note);
        NewMemberUI.setNewLabel(label);
        
        NewMemberUI.createNewMember();

        NewMemberUI.checkNoteIsTooLong();
    });

    






});