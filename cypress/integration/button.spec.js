/// <reference types="Cypress" />

context("Button", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/doc/button.html"));

    it('should do something', () => {
        cy.get(".ms-button").should('be.visible');

    });
});