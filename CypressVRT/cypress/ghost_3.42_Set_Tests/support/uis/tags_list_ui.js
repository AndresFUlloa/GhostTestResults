import TagsListPage from "../pages/tags_list_page.js";

class TagsListUI {
    constructor(){
        this.tagsListPage = new TagsListPage();
    }

    goToNewTag = () => {
        this.tagsListPage.clickNewTag();
    }

    goToEditTag = (pos = 0) => {
        this.tagsListPage.clickEditTag(pos);
    }

    validateTag = (tag, repetido = false) => {
        this.tagsListPage.tagExists(tag.name, repetido);
        if(tag.descripcion != null)
            this.tagsListPage.tagDescriptionExists(tag.descripcion);
    }
}
export default new TagsListUI();