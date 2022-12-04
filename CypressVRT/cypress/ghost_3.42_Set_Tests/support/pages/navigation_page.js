export default class NavigationPage {

    constructor(){
        this.postsLocator = "li a[href='#/posts/']";
        this.tagsLocator = "li a[href='#/tags/']";
        this.settingsOptionLocator = "a[href='#/settings/']" ;
        this.staffOptionLocator = "a[href='#/staff/']";
        this.WhatIsNewOplocator = "a[href='#/whatsnew/']";
       // this.whatsNewOpChck = "h2.gh-whats-new-heading";
        this.whatsNewOpChck = "#ember-basic-dropdown-content-ember25 > ul > li:nth-child(2) > button"
        this.yourProfile = "a[href*='#/settings/staff/'] ";
        this.userOptionslocator = "div.gh-user-avatar";
        this.menuLocator = "section.gh-nav-body"

    }

    clickStaffOption=()=>{
        cy.get(this.staffOptionLocator).first().click();
    }

    clickPosts = () => {
        cy.get(this.postsLocator).click();
    }

    clickTags = () => {
        cy.get(this.tagsLocator).click();
    }
        
    clickSettingsOption=()=>{
        cy.get(this.settingsOptionLocator).first().click();
    }

    clickUserOptions=()=>{


        cy.on('uncaught:exception', (err, runnable) => {
                console.log(err);
        })
        cy.wait(2000);
        cy.get(this.menuLocator).scrollTo('bottom'); 
        cy.wait(5000);
        cy.get(this.userOptionslocator).click();
        cy.wait(2000);
    }


    clickWhatIsNewButton=()=>{
       // cy.get(this.WhatIsNewOplocator).first().click();
    }   
    checkWhatsNewOption=()=>{
        //cy.get(this.whatsNewOpChck).should("exist"); 
    }

    goToYourProfileOption=()=>{
        this.clickUserOptions();
        cy.get(this.yourProfile).first().click();
    }

}