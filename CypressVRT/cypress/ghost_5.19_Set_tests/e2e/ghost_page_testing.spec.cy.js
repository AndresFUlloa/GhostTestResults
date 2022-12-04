import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import PageListUI from '../support/uis/page_list_ui';
import NewPageUI from '../support/uis/new_page_ui';
import PublishPageUI from '../support/uis/publish_page_ui.js';
import PageSettingsUI from '../support/uis/page_settings_ui.js';
import ScreenshotHelper from '../support/utils/screenshot_helper.js';
describe('page test set', function() {
    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        StartUI.login("ja.pardor1@uniandes.edu.co", "Aa1234567*");
        NavigationUI.goToPages();
    });


    it('Create page and publish', function(){
        cy.log("**START**");
        cy.wait(3000)
        PageListUI.goToNewPage();
        ScreenshotHelper.takeScreenShot('page', 'Create_page_and_publish', 'PageListUI', 'Create_page_and_publish_1_after');
        let title = faker.name.jobArea();
        let contenido= faker.lorem.sentence(2);
        NewPageUI.createPage(title,contenido);
        
        PublishPageUI.finishPublish();
        PublishPageUI.goToEditor();
        ScreenshotHelper.takeScreenShot('page', 'Create_page_and_publish', 'PageListUI', 'Create_page_and_publish_2_after');
        NewPageUI.goToPages();
        PageListUI.validatePages(title);
    });



    it('Edit page', function(){
        PageListUI.editPage();
        ScreenshotHelper.takeScreenShot('page', 'Edit_page', 'PageListUI', 'Edit_page_1_after');
        let pageName = faker.name.jobArea();
        NewPageUI.editPage(pageName, faker.lorem.sentence());
        NewPageUI.goToPages();
        PageListUI.validatePages(pageName);
    });
    it('Create page with content', function(){
          PageListUI.goToNewPage();
          ScreenshotHelper.takeScreenShot('page', 'Create_page_with_content', 'PageListUI', 'Create_page_with_content_1_after');
          let pageName = faker.name.jobArea();
          NewPageUI.createPage(pageName, faker.lorem.sentence(), faker.internet.url());
          PublishPageUI.finishPublish();
        
           PublishPageUI.goToEditor();
           NewPageUI.goToPages();
           PageListUI.validatePages(pageName);
    });

    it('Delete page', function(){
           PageListUI.editPage();
           ScreenshotHelper.takeScreenShot('page', 'Delete page', 'PageListUI', 'Delete page_1_after');
           NewPageUI.openSettings();
           PageSettingsUI.deletePage();
    });

    

})