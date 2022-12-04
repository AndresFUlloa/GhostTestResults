import NewTagPage from "../pages/new_tag_page.js";

class NewTagUI {

    constructor(){
        this.newTagPage = new NewTagPage();
    }

    createTag = (tagDTO) => {
        this.newTagPage.setTagName(tagDTO.name);
        if(tagDTO.descripcion != null){
            this.newTagPage.setTagDescription(tagDTO.descripcion);
        }
        this.newTagPage.clickSave();
    }

    deleteTag = () => {
        this.newTagPage.clickDelete();
        this.newTagPage.clickConfirmDelete();
    }

}
export default new NewTagUI();