import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import PostListUI from '../support/uis/posts_list_ui.js';
import NewPostUI from '../support/uis/new_post_ui.js';
import PublishPostUI from '../support/uis/publis_post_ui.js';
import PostSettingsUI from '../support/uis/post_settings_ui.js';
import ScreenshotHelper from '../support/utils/screenshot_helper.js';

faker.seed(4200);

var postData = {
    'name': faker.name.jobArea(),
    'description': faker.lorem.paragraph(),
    'url': faker.internet.url()
}

describe('Ghost Apriori', function(){

    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(3000);
        ScreenshotHelper.takeScreenShot('post', 'beforeEach', 'login', 'loginScreenshot');
        StartUI.login("a.ulloar@uniandes.edu.co", "Mytest1234");
        cy.wait(2000);
        cy.screenshot('posts/dashboard/screenshot');
        NavigationUI.goToPosts();
        cy.wait(2000);
    });

    it('Create post', function(){
        cy.log("Inicia crear post");
        ScreenshotHelper.takeScreenShot('post', 'createPost', 'list', 'postList');
        PostListUI.goToNewPost();
        ScreenshotHelper.takeScreenShot('post', 'createPost', 'new', 'newPost');
        NewPostUI.createPost(postData['name'], postData['description']);
        PublishPostUI.finishPublish();
        PublishPostUI.goToEditor();
        NewPostUI.goToPosts();
        PostListUI.validatePos(postData['name']);
    });

    it('Edit post', function(){
        PostListUI.editPost();
        NewPostUI.editPost(postData['name'], postData['description']);
        NewPostUI.goToPosts();
        PostListUI.validatePos(postData['name']);
    });

    it('Publish post after 5 minutes', function(){
        PostListUI.goToNewPost();
        NewPostUI.createPost(postData['name'], postData['description']);
        PublishPostUI.finishPublish(true);
        PublishPostUI.goToEditor();
        NewPostUI.goToPosts();
        PostListUI.validatePos(postData['name']);
    });

    it('Create post with content', function(){
        PostListUI.goToNewPost();
        var postName = faker.name.jobArea();
        NewPostUI.createPost(postData['name'], postData['description'], postData['url']);
        PublishPostUI.finishPublish();
        
        PublishPostUI.goToEditor();
        NewPostUI.goToPosts();
        PostListUI.validatePos(postData['name']);
    });

})