/// <reference types="Cypress" />

context("Messagebanner", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#messagebanner"));

    it('Should match screenshot', () => {
        cy.contains("Show").click();
        cy.get(".ms-MessageBanner").first().vrt("Messagebanner");
    });
});