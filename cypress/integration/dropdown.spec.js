/// <reference types="Cypress" />

context("Dropdown", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#dropdown"));

    it('Duck should be default selected', () => {
        cy.get("body").vrt("Dropdown - duck selected by default");
    });

    it("Should be possible to change selection", ()=>{
        cy.get(".ms-Dropdown-title").first().click();
        cy.get(".ms-Dropdown-item:nth-of-type(4)").click();
        cy.get("body").vrt("Dropdown - cow should be selected");
    });
});