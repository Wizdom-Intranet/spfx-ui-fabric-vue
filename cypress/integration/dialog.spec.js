/// <reference types="Cypress" />

context("Dialog", () =>{
    beforeEach(()=>cy.visit("http://localhost:8081/docs/dialog.html"));

    it('All should be closed by default', () => {
        cy.get("body").vrt("Dialog - All Default closed");
    });

    it('Simple should close, when clicking outside', () => {
        cy.contains("Show simple").click();
        cy.get("body").vrt("Dialog - Simple - shown");
        cy.get("body").click("topRight").vrt("Dialog - Simple - dismissed");
    });

    it('Large header should close, when clicking outside', () => {
        cy.contains("Show large header").click();
        cy.get("body").vrt("Dialog - Large header - shown");
        cy.get("body").click("topRight").vrt("Dialog - Large header - dismissed");
    });

    it('Blocking should not close, when clicking outside', () => {
        cy.contains("Show blocking").click();
        cy.get("body").vrt("Dialog - Blocking - shown");
        cy.get("body").click("topRight").vrt("Dialog - Blocking - dismissed");
    });

    it('Closing should close, when clicking outside', () => {
        cy.contains("Show closing").click();
        cy.get("body").vrt("Dialog - Closing - shown");
        cy.get("body").click("topRight").vrt("Dialog - Closing - dismissed");
    });

    it('Closing should close, when clicking the close icon', () => {
        cy.contains("Show closing").click();
        cy.get("body").vrt("Dialog - Closing - shown");
        cy.get(".ms-Dialog-buttonClose").click();
        cy.get("body").vrt("Dialog - Closing - dismissed using close icon");
    });

    it('Darkoverlay', () => {
        cy.contains("Show with dark overlay").click();
        cy.get("body").vrt("Dialog - dark overlay - shown");
    });

    // it('Primary should match screenshot', () => {
    //     cy.contains("Primary").vrt("Button - Primary");
    // });

    // it('Custom class should match screenshot', () => {
    //     cy.contains("Custom class").vrt("Button - Custom class");
    // });
});