/// <reference types="Cypress" />

context("ContextualMenu", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#contextualmenu"));

    it('All should be closed by default', () => {
        cy.get("body").vrt("ContextualMenu - All Default closed");
    });

    it('Default should match screenshots', () => {
        cy.contains("Open Default").as("sut");
        cy.get("@sut").click();
        cy.get("body").vrt("ContextualMenu - default");
        cy.get("body").click("topRight").vrt("ContextualMenu - default - dismissed");
    });

    it('Multiselect should match screenshots', () => {
        cy.contains("Open Multiselect").as("sut");
        cy.get("@sut").click();
        cy.get("body").vrt("ContextualMenu - Multiselect");
        cy.contains("Sender").click();
        cy.get("body").vrt("ContextualMenu - Multiselect - Sender selected");
    });

    it('Divides and Submenu should match screenshots', () => {
        cy.contains("Open Dividers and Submenu").as("sut");
        cy.get("@sut").click();
        cy.get("body").vrt("ContextualMenu - Submenu");
        cy.contains("Move").click();
        cy.get("body").vrt("ContextualMenu - Submenu - Move selected");
    });
    
});