import {faker} from '@faker-js/faker';
import StartUI from '../support/uis/start_ui.spec.cy.js';
import NavigationUI from '../support/uis/navigation_ui.js';
import TagsListUI from '../support/uis/tags_list_ui.js';
import NewTagUI from '../support/uis/new_tag_ui.js';
import TagDTO from '../support/DTO/tag_dto.js';

describe('ghots tags tests', function() {

    beforeEach(function() {
        cy.visit('http://localhost:2368/ghost/');
        StartUI.login("a.ulloar@uniandes.edu.co", "Mytest1234");
        NavigationUI.goToTags();
    });

    it('Create tag', function(){
        cy.log("Inicia crear tag");
        cy.wait(1000);
        TagsListUI.goToNewTag();
        var tag = new TagDTO(faker.datatype.string(10));
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag);
    });

    it('Crear Tag Descripcion', function(){
        cy.log("Inicia crear tag descripcion");
        cy.wait(1000);
        TagsListUI.goToNewTag();
        var tag = new TagDTO(faker.datatype.string(10), faker.lorem.paragraph());
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag);
    });

    

    it('Borrar tag', function(){
        cy.log("Inicia eliminar tag");
        cy.wait(1000);
        TagsListUI.goToEditRandomTag();
        NewTagUI.deleteTag();
    });

    it('Editar Tag', function(){
        cy.log("Inicia editar tag descripcion");
        cy.wait(1000);
        TagsListUI.goToEditTag();
        var tag = new TagDTO(faker.datatype.string(10));
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag);
    });

    it('Crear 2 tags same name', function(){
        cy.log("Inicia editar tag descripcion");
        cy.wait(1000);
        TagsListUI.goToNewTag();
        var tag = new TagDTO(faker.datatype.string(10));
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag);
        TagsListUI.goToNewTag();
        NewTagUI.createTag(tag);
        NavigationUI.goToTags();
        TagsListUI.validateTag(tag, true);
    });

});