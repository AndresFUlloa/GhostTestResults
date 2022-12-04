import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import ScreenshotHelper from '../support/utils/screenshot_helper.js';
describe('Others test set', function() {
    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        StartUI.login("ja.pardor1@uniandes.edu.co", "Aa1234567*");
        
    });

    it("Check What's new option", function(){
        NavigationUI.goToWhatsNewOption();
        ScreenshotHelper.takeScreenShot('Others', 'Check_Whats_new option', 'NavigationUI', 'Check_Whats_new option_1_after');
        NavigationUI.checkWhatsNewOption();
    });

    it("Check 'your profile' option", function(){
        NavigationUI.goToYourProfileOption();
        ScreenshotHelper.takeScreenShot('Others', 'Check_your_profile_option', 'NavigationUI', 'Check_your_profile_option_1_after');
    });




    

})