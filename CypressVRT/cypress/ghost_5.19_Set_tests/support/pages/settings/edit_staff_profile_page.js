export default class EditStaffProfilePage {

     constructor(){

          this.fullNameLocator = "input#user-name";
          this.slugLocator = "input#user-slug";
          this.bioLocator = "textarea#user-bio";
          this.saveButtonLocator = "//span[text()='Save']";
     }

     setNewFullName=(fullName)=>{
        cy.get(this.fullNameLocator).clear().type(fullName);
    }

    setNewSlug=(newSlug)=>{
        cy.get(this.slugLocator).clear().type(newSlug);
    }

    setNewBio=(newBio)=>{
        cy.get(this.bioLocator).clear().type(newBio);
    }

    selectSaveButton=()=>{
        cy.xpath(this.saveButtonLocator).click();
    }

    checkFielUpdatedName=(field,nameField)=>{
        
        let locator=""
        switch(nameField){
           case "fullName":locator=this.fullNameLocator; break;
           case "bio":locator=this.bioLocator; break;
           case "slug":locator=this.slugLocator; break;
        }
        cy.get(locator)
        .invoke('val')
        .then((currentVal)=>{
            assert.equal(field,currentVal, nameField+"updated!!!")
        });
    }




}