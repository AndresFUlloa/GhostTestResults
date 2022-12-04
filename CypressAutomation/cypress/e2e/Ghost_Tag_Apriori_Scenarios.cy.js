import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import TagsListUI from '../support/uis/tags_list_ui.js';
import NewTagUI from '../support/uis/new_tag_ui.js';
import TagDTO from '../support/DTO/tag_dto.js';

var tagData;
var tag2Data;
var tag3Data;

describe('ghots tags tests', function() {

    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        StartUI.login("a.ulloar@uniandes.edu.co", "Mytest1234");
        NavigationUI.goToTags();
        faker.seed(1200);
        tagData = {
            'name': faker.name.jobArea(),
            'description': faker.lorem.paragraph()
        }
        faker.seed(2300);
        tag2Data = {
            'name': faker.name.jobArea(),
            'description': faker.lorem.paragraph()
        }

        faker.seed(4258);
        tag3Data = {
            'name': faker.name.jobArea(),
            'description': faker.lorem.paragraph()
        }


    });

    it('Create tag', function(){
        cy.log("Inicia crear tag");
        cy.wait(1000);
        TagsListUI.goToNewTag();
        var tag = new TagDTO(tagData['name']);
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag);
    });

    it('Borrar tag', function(){
        cy.log("Inicia eliminar tag");
        cy.wait(1000);
        TagsListUI.goToEditTag();
        NewTagUI.deleteTag();
    });

    it('Crear Tag Descripcion', function(){
        cy.log("Inicia crear tag descripcion");
        cy.wait(1000);
        TagsListUI.goToNewTag();
        var tag = new TagDTO(tagData['name'], tagData['description']);
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag);
    });

    it('Editar Tag', function(){
        cy.log("Inicia editar tag descripcion");
        cy.wait(1000);
        TagsListUI.goToEditTag();
        var tag = new TagDTO(tag2Data['name']);
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag);
    });

    it('Crear 2 tags same name', function(){
        cy.log("Inicia editar tag descripcion");
        cy.wait(1000);
        TagsListUI.goToNewTag();
        var tag = new TagDTO(tag3Data['name']);
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag);
        TagsListUI.goToNewTag();
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag, true);
    });

});