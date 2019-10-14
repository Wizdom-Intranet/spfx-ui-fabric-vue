// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('vrt', { prevSubject: true }, (prevSubject, ssName) => {
    var takenScreenshotPath = "";
    cy.wrap(prevSubject).screenshot(ssName, {
            onAfterScreenshot(document, properties){
                console.log("screenshot taken", properties);
                takenScreenshotPath = properties.path;
            }
        })
        .then((mon)=>{
            var ssFile = takenScreenshotPath; //"./cypress/screenshots/" + ssName + ".png";
            var baseFile = "./cypress/screenshots_base/" + ssName + ".png";
            var diffFile = takenScreenshotPath + ".diff.png"; //"./cypress/screenshots/" + ssName + ".diff.png";
            var cmd = ".\\node_modules\\.bin\\pixelmatch \"" + baseFile + "\" \"" + ssFile + "\" \"" + diffFile + "\" 0.1";
            cy.exec(cmd , { failOnNonZeroExit : false}).then((result)=>{
                console.log("pixelmatch", result);
                var errorPercent = result.stdout.split('error: ')[1].split('%')[0] * 1;
                if(errorPercent<0.1)
                {
                    cy.task("delete", diffFile);
                    cy.task("delete", ssFile);
                }
                cy.then(()=>{
                    assert(errorPercent < 0.1, "Visual comparison: '" + ssName + "' are " + errorPercent + "% different");
                })
            });
        })
});