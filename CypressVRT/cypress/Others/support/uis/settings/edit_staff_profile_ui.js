import EditStaffProfilePage from '../../pages/settings/edit_staff_profile_page.js'

class EditStaffProfileUI{
    constructor(){
        this.editStaffProfilePage= new EditStaffProfilePage();
    }

    setNewFullName=(fullName)=>{
        this.editStaffProfilePage.setNewFullName(fullName);
    }
    setNewSlug=(newSlug)=>{
        this.editStaffProfilePage.setNewSlug(newSlug);
    }

    setNewBio=(newBio)=>{
        this.editStaffProfilePage.setNewBio(newBio);
    }

    fieldIsUpdated=(data,fieldName)=>{
        this.editStaffProfilePage.checkFielUpdatedName(data,fieldName);
    }
    saveData(){
        this.editStaffProfilePage.selectSaveButton();
    }
}

export default new EditStaffProfileUI();