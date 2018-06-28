/// <reference types="Cypress" />

context("Checkbox", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#checkbox"));

    it('Checkbox should match screenshot', () => {
        cy.get("Body").vrt("Checkbox");
        cy.contains("Checkbox").click();
        cy.get("Body").vrt("Checkbox - Selected");
    });
});