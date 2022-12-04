import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import PostListUI from '../support/uis/posts_list_ui.js';
import NewPostUI from '../support/uis/new_post_ui.js';
import PublishPostUI from '../support/uis/publis_post_ui.js';
import PostSettingsUI from '../support/uis/post_settings_ui.js'


describe('ghots post creation', function() {
    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(3000);
        StartUI.login("a.ulloar@uniandes.edu.co", "s1o9u8l6AU.");
        NavigationUI.goToPosts();
    });

    it('Create post', function(){
        cy.log("Inicia crear post");
        PostListUI.goToNewPost();
        var postName = faker.name.jobArea();
        NewPostUI.createPost(postName, faker.lorem.sentence());
        PublishPostUI.finishPublish();
        PublishPostUI.goToEditor();
        NewPostUI.goToPosts();
        PostListUI.validatePos(postName);
    });

    it('Delete post', function(){
        cy.log("Inicia delete post");
        PostListUI.editPost();
        NewPostUI.openSettings();
        PostSettingsUI.deletePost();
    });

    it('Edit post', function(){
        PostListUI.editPost();
        var postName = faker.name.jobArea();
        NewPostUI.editPost(postName, faker.lorem.sentence());
        NewPostUI.goToPosts();
        PostListUI.validatePos(postName);
    });

    it('Publish post after 5 minutes', function(){
        PostListUI.goToNewPost();
        var postName = faker.name.jobArea();
        NewPostUI.createPost(postName, faker.lorem.sentence());
        PublishPostUI.finishPublish(true);
        PublishPostUI.goToEditor();
        NewPostUI.goToPosts();
        PostListUI.validatePos(postName);
    });

    it('Create post with content', function(){
        PostListUI.goToNewPost();
        var postName = faker.name.jobArea();
        NewPostUI.createPost(postName, faker.lorem.sentence(), faker.internet.url());
        PublishPostUI.finishPublish();
        
        PublishPostUI.goToEditor();
        NewPostUI.goToPosts();
        PostListUI.validatePos(postName);
    });

})