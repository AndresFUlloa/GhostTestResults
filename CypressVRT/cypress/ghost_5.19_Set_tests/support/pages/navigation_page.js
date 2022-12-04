export default class NavigationPage {

    constructor(){
        this.postsLocator = "li a[href='#/posts/']";
        this.pagesLocator = "li a[href='#/pages/']";
        this.tagsLocator = "li a[href='#/tags/']"
        this.settingsOptionLocator = "a[href='#/settings/']" ;
        this.userOptionslocator = "div.gh-user-avatar"
        this.WhatIsNewOplocator = "a[href='#/whatsnew/']"
        this.whatsNewOpChck = "h2.gh-whats-new-heading"
        this.yourProfile = "a[href*='#/settings/staff/'] "
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
    
    clickPages=()=>{
        cy.get(this.pagesLocator).first().click();
    }

    clickUserOptions=()=>{
        cy.get(this.userOptionslocator).click();
    }

    clickWhatIsNewButton=()=>{
        cy.get(this.WhatIsNewOplocator).first().click();
    }
    checkWhatsNewOption=()=>{
        cy.get(this.whatsNewOpChck).should("exist"); 
    }

    goToYourProfileOption=()=>{
        this.clickUserOptions();
        cy.get(this.yourProfile).first().click();
    }


}