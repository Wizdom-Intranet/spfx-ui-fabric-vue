/// <reference types="Cypress" />

context("progressIndicator", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#progressIndicator"));

    it('Should match screenshot', () => {
        cy.get(".ms-ProgressIndicator").vrt("progressIndicator");
    });
});