/// <reference types="Cypress" />

context("Callout", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#callout"));

    it('All should be closed by default', () => {
        cy.get("body").vrt("Callout - All Default closed");
    });

    it('Simple should close, when clicking outside', () => {
        cy.contains("Open simple").click();
        cy.get("body").vrt("Callout - Simple - shown");
        cy.get("body").click("topRight").vrt("Callout - Simple - dismissed");
    });

    it('With close, should match screenshot', () => {
        cy.contains("Open with close").click();
        cy.get("body").vrt("Callout - with close");
    });

    it('OOBE should match screenshot', () => {
        cy.contains("Open OOBE").click();
        cy.get("body").vrt("Callout - OOBE");
    });

    it('Should be possible to change position to bottom', () => {
        cy.contains("Open bottom").click();
        cy.get("body").vrt("Callout - bottom");
    });
});