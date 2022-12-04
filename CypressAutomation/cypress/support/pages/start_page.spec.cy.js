export default class StartPage {

    constructor(){
        this.identificationLocator = 'input[name="identification"]';
        this.passwordLocator = 'input[name="password"]';
        this.loginButtonLocator = 'button[type=submit]';
    }

    setIdentification = (identification) => {
        cy.get(this.identificationLocator).clear().type(identification);
    }

    setPassword = (password) => {
        cy.get(this.passwordLocator).clear().type(password);
    }

    clickLoginButton = () => {
        cy.get(this.loginButtonLocator).click();
    }
}
