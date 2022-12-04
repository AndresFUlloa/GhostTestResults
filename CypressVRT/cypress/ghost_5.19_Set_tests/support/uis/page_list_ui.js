import PagesListPage from "../pages/pages_list_page.js";



class PageListUI{
    constructor(){
        this.pagesListPage = new PagesListPage();
    }

    goToNewPage = () => {
        this.pagesListPage.clickNewPage();
    }

    validatePages = (pageName) => {
        this.pagesListPage.pageExist(pageName);
    }

    editPage = (pos=0) => {
        this.pagesListPage.clickEditPages(pos);
    }

    
}

export default new PageListUI();