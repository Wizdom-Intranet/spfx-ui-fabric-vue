/// <reference types="Cypress" />

context("Textfield", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#textfield"));

    it('Empty should match screenshot', () => {
        cy.get(".ms-TextField").vrt("Textfield empty");
    });

    it('With text it should match screenshot', () => {
        cy.get("input")
            .click()
            .type("hello world");
        cy.get(".ms-TextField").vrt("Textfield with content");
    });
});