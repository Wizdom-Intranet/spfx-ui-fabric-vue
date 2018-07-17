/// <reference types="Cypress" />

context("Label", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#label"));

    it('Should match screenshot', () => {
        cy.contains("Name").vrt("Label");
    });
});