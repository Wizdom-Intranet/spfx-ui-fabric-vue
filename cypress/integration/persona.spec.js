/// <reference types="Cypress" />

context("Persona", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#persona"));

    it('Should match screenshot', () => {
        cy.get(".ms-Persona").first().vrt("Persona");
    });
});