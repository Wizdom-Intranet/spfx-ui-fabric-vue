/// <reference types="Cypress" />

context("Pivot", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#pivot"));

    it('default should match screenshot', () => {
        cy.get(".ms-Pivot").first().as("sut");
        cy.get("@sut").vrt("Pivot - default");
        cy.get("@sut").contains("Recent").click()
        cy.get("body").click("right");
        cy.get("@sut").vrt("Pivot - default - Recent selected");
    });

    it('large should match screenshot', () => {
        cy.get(".ms-Pivot--large").first().as("sut");
        cy.get("@sut").vrt("Pivot - large");
        cy.get("@sut").contains("Recent").click()
        cy.get("body").click("right");
        cy.get("@sut").vrt("Pivot - large - Recent selected");
    });

    it('tabs should match screenshot', () => {
        cy.get(".ms-Pivot--tabs").first().as("sut");
        cy.get("@sut").vrt("Pivot - tabs");
        cy.get("@sut").contains("Recent").click()
        cy.get("body").click("right");
        cy.get("@sut").vrt("Pivot - tabs - Recent selected");
    });

    it('large with tabs should match screenshot', () => {
        cy.get(".ms-Pivot--large.ms-Pivot--tabs").first().as("sut");
        cy.get("@sut").vrt("Pivot - large with tabs");
        cy.get("@sut").contains("Recent").click()
        cy.get("body").click("right");
        cy.get("@sut").vrt("Pivot - large with tabs - Recent selected");
    });
});