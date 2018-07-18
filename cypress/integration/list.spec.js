/// <reference types="Cypress" />

context("List", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#list"));

    it('Should match screenshot', () => {
        cy.get(".ms-List").as("sut");
        cy.get("@sut").vrt("List - default");
        cy.get("@sut").find(".ms-ListItem-selectionTarget").first().click();
        cy.get("@sut").vrt("List - first selected");
    });
});