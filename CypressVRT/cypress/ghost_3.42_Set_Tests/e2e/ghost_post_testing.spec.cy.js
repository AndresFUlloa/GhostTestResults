import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import PostListUI from '../support/uis/posts_list_ui.js';
import NewPostUI from '../support/uis/new_post_ui.js';
import PublishPostUI from '../support/uis/publis_post_ui.js';
import PostSettingsUI from '../support/uis/post_settings_ui.js';
import ScreenshotHelper from '../support/utils/screenshot_helper.js';


describe('ghots post creation', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3001/ghost/');
        ScreenshotHelper.takeScreenShot('post', 'beforeEach', 'login', 'loginScreenshot');
        StartUI.login("a.ulloar@uniandes.edu.co", "uniandes2022");
        cy.wait(2000);
        cy.screenshot('posts/dashboard/screenshot');
        NavigationUI.goToPosts();
    });

    it('Create post', function(){
        cy.log("Inicia crear post");
        ScreenshotHelper.takeScreenShot('post', 'createPost', 'list', 'postList');
        PostListUI.goToNewPost();
        ScreenshotHelper.takeScreenShot('post', 'createPost', 'new', 'newPost');
        var postName = faker.name.jobArea();
        NewPostUI.createPost(postName, faker.lorem.sentence());
        PublishPostUI.finishPublish();
        cy.wait(2000);
        NewPostUI.goToPosts();
        PostListUI.validatePos(postName);
    });

    it('Delete post', function(){
        cy.log("Inicia delete post");
        PostListUI.editPost();
        NewPostUI.openSettings();
        ScreenshotHelper.takeScreenShot('post', 'deletePost', 'settings', 'postSettings');
        PostSettingsUI.deletePost();
    });

    it('Edit post', function(){
        PostListUI.editPost();
        var postName = faker.name.jobArea();
        NewPostUI.editPost(postName, faker.lorem.sentence());
        PublishPostUI.publishEdited();
        cy.wait(2000);
        NewPostUI.goToPosts();
        PostListUI.validatePos(postName);
    });

    it('Publish post after 5 minutes', function(){
        PostListUI.goToNewPost();
        var postName = faker.name.jobArea();
        NewPostUI.createPost(postName, faker.lorem.sentence());
        PublishPostUI.finishPublish(true);
        cy.wait(2000);
        NewPostUI.goToPosts();
        PostListUI.validatePos(postName);
    });

    it('Create post with content', function(){
        PostListUI.goToNewPost();
        var postName = faker.name.jobArea();
        NewPostUI.createPost(postName, faker.lorem.sentence(), faker.internet.url());
        PublishPostUI.finishPublish();
        cy.wait(2000);
        NewPostUI.goToPosts();
        PostListUI.validatePos(postName);
    });

})