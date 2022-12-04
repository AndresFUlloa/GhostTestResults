import StartPage from '../pages/start_page.spec.cy.js'

class StartUI {
    constructor() {
        this.startPage = new StartPage();
    }

    login = (identification, password) => {
        this.startPage.setIdentification(identification);
        this.startPage.setPassword(password);
        this.startPage.clickLoginButton();
    }
}
export default new StartUI();