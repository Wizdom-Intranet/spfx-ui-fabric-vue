/// <reference types="Cypress" />

context("Overlay", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#overlay"));

    it('Should hidden by default', () => {
        cy.get("body").vrt("Overlay - Default hidden");
    });

    it('should match screenshot when open', () => {
        cy.contains("Show").click();
        cy.get("body").vrt("Overlay - Open");
    });

    it('should close when clicking overlay', () => {
        cy.contains("Show").click();
        cy.get("body").click();
        cy.wait(500); // wait for panel to close (takes 400ms)
        cy.get("body").vrt("Overlay - Closed again");
    });
});