class ScreenshotHelper{
    
    constructor(){}

    takeScreenShot = (
        moduleName,
        testCaseName,
        UIName,
        fileName,
        element = null) => {
        var url = `${moduleName}/${fileName}`;
        cy.wait(2000);
        if(element == null)
            cy.screenshot(url);
        else
        {
            element.invoke('css', 'position', 'absolute');
            element.screenshot(url);
            element.invoke('css', 'position', null);
        }
            
    }
}
export default new ScreenshotHelper();