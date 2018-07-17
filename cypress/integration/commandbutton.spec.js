/// <reference types="Cypress" />

context("Commandbutton", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#commandbutton"));

    it('Simple should match screenshot', () => {
        cy.contains("Simple command").vrt("commandbutton - simple");
    });

    it('With icon should match screenshot', () => {
        cy.contains("Command with icon").vrt("commandbutton - with icon");
    });

    it('No label should match screenshot', () => {
        cy.get(".ms-CommandButton--noLabel").vrt("commandbutton - no label");
    });

    it('Disabled should match screenshot', () => {
        cy.contains("Disabled command").vrt("commandbutton - diabled");
    });

    it('With contextual menu should match screenshot', () => {
        cy.contains("With contextual menu").vrt("commandbutton - with menu");
        cy.contains("With contextual menu").click();
        cy.get("body").vrt("commandbutton - with menu - open");
    });
});