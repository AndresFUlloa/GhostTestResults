import NewPagePage from "../pages/new_page_page.js";

class NewPageUI{
   
    constructor(){
        this.newPagePage = new NewPagePage();
    }

    setTitleAndPageText = (title, postText) => {
        this.newPagePage.setTitle(title);
        this.newPagePage.setPageText(postText);
    }

    createPage = (title, pageText, url = "") => {
        this.setTitleAndPageText(title, pageText);
        if(url.length > 0){
            this.addUrl(url);
        }
        cy.wait(1000);
        this.newPagePage.clickPublish();
    }

    goToPages = () => {
        this.newPagePage.clickPages();
    }
    
    editPage = (title, pageText) => {
        this.setTitleAndPageText(title, pageText);
        cy.wait(1000);
        this.newPagePage.clickUpdate();
    }

    addUrl = (url) => {
        this.newPagePage.clickAddCard();
        this.newPagePage.clickOther();
        this.newPagePage.setUrl(url);
        cy.wait(2000);
        this.newPagePage.clickUrlAsLink();
    }
    openSettings = () => {
        this.newPagePage.clickSettings();
    }

}

export default new NewPageUI();