/// <reference types="Cypress" />

context("Toggle", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#toggle"));

    it('Default should match screenshot', () => {
        cy.get(".ms-Toggle").first().as("sut");
        cy.get("@sut").vrt("toggle - default off");
        cy.get("@sut").find(".ms-Toggle-field").click();
        cy.get("@sut").vrt("toggle - default on");
    });

    it('Disabled should match screenshot', () => {
        cy.get(".ms-Toggle.is-disabled").first().as("sut");
        cy.get("@sut").vrt("toggle - disabled off");
    });

    it('Text left should match screenshot', () => {
        cy.get(".ms-Toggle.ms-Toggle--textLeft").first().as("sut");
        cy.get("@sut").vrt("toggle - textleft off");
        cy.get("@sut").find(".ms-Toggle-field").click();
        cy.get("@sut").vrt("toggle - textleft on");
    });
});