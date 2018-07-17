/// <reference types="Cypress" />

context("Panel", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#panel"));

    it('Should closed by default', () => {
        cy.get("body").vrt("Panel - Default closed");
    });

    it('should match screenshot when open', () => {
        cy.contains("Open Panel").click();
        cy.get("body").vrt("Panel - Open");
    });

    it('should close when clicking outside', () => {
        cy.contains("Open Panel").click();
        cy.get("body").click();
        cy.wait(500); // wait for panel to close (takes 400ms)
        cy.get("body").vrt("Panel - Closed again");
    });
});