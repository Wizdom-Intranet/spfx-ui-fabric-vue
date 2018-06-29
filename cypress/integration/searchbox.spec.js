/// <reference types="Cypress" />

context("Searchbox", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#searchbox"));

    it('Default SearchBox', () => {
        cy.get(".ms-SearchBox:nth-of-type(1)").as("sut");
        cy.get("@sut").vrt("Searchbox - default - empty")
        cy.get("@sut").click();
        cy.get("@sut").find("input").type("test");
        cy.get("@sut").vrt("Searchbox - default - with text");
        cy.get("@sut").find(".ms-Icon--Clear").click();
        cy.get("@sut").vrt("Searchbox - default - cleared");
    });

    it('Collapsed SearchBox', () => {
        cy.get(".ms-SearchBox:nth-of-type(2)").as("sut");
        cy.get("@sut").vrt("Searchbox - Collapsed  - empty")
        cy.get("@sut").click();
        cy.get("@sut").find("input").type("test");
        cy.get("@sut").vrt("Searchbox - Collapsed  - with text");
        cy.get("@sut").find(".ms-Icon--Clear").click();
        cy.get("@sut").vrt("Searchbox - Collapsed  - cleared");
    });

    it('CommandBar SearchBox', () => {
        cy.get(".ms-SearchBox:nth-of-type(3)").as("sut");
        cy.get("@sut").vrt("Searchbox - CommandBar  - empty")
        cy.get("@sut").click();
        cy.get("@sut").find("input").type("test");
        cy.get("@sut").vrt("Searchbox - CommandBar  - with text");
        cy.get("@sut").find(".ms-Icon--Clear").click();
        cy.get("@sut").vrt("Searchbox - CommandBar  - cleared");
    });
    
});