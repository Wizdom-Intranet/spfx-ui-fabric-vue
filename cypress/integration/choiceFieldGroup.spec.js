/// <reference types="Cypress" />

context("ChoiceFieldGroup", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#choiceFieldGroup"));

    it('Have option 2 default selected', () => {
        cy.get("Body").vrt("ChoiceFieldGroup - Option 2 selected");
    });

    it('Should be posible to change selection', () => {
        cy.contains("Option 4").click();
        cy.get("Body").vrt("ChoiceFieldGroup - Option 4 selected");
    });
});