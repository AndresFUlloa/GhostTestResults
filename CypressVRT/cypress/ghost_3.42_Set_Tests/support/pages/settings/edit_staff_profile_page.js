export default class EditStaffProfilePage {

     constructor(){

          this.fullNameLocator = "input#user-name.user-name";
          this.slugLocator = "input#user-slug";
          this.bioLocator = "textarea#user-bio";
          this.saveButtonLocator = "//span[text()='Save']";
     }

     setNewFullName=(fullName)=>{
         cy.get('main').scrollTo('top'); 
         cy.get(this.fullNameLocator).type(fullName);
         cy.get('main').scrollTo('top'); 
    }

    setNewSlug=(newSlug)=>{
        cy.get('main').scrollTo('top'); 
        cy.get(this.slugLocator).type(newSlug);
        cy.get('main').scrollTo('top'); 
    }

    setNewBio=(newBio)=>{
        cy.get('main').scrollTo('top'); 
        cy.get(this.bioLocator).type(newBio);
        cy.get('main').scrollTo('top'); 
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