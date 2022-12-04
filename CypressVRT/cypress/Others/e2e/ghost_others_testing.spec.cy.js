import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';

describe('Others test set', function() {
    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        StartUI.login("ja.pardor1@uniandes.edu.co", "Aa1234567*");
        
    });

    it("Check What's new option", function(){
        NavigationUI.goToWhatsNewOption();
        NavigationUI.checkWhatsNewOption();
    });

    it("Check 'your profile' option", function(){
        NavigationUI.goToYourProfileOption();
    });




    

})