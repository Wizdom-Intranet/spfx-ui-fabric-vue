/// <reference types="Cypress" />

context("Button", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#button"));

    it('Default should match screenshot', () => {
        cy.contains("Default").vrt("Button - Default");
    });

    it('Primary should match screenshot', () => {
        cy.contains("Primary").vrt("Button - Primary");
    });

    it('Custom class should match screenshot', () => {
        cy.contains("Custom class").vrt("Button - Custom class");
    });
});