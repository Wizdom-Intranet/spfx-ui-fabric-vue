/// <reference types="Cypress" />

context("Messagebar", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#messagebar"));

    it('Info should match screenshot', () => {
        cy.get(".ms-MessageBar").first().vrt("Messagebar info");
    });

    it('Success should match screenshot', () => {
        cy.get(".ms-MessageBar--success").vrt("Messagebar Success");
    });

    it('Blocked should match screenshot', () => {
        cy.get(".ms-MessageBar--blocked").vrt("Messagebar Blocked");
    });
});