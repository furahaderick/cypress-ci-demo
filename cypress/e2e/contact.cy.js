/// <reference types="cypress" />

describe("Contact Page tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.get("a").contains("Contact").click();
	});

	it("Navigation should work", () => {
		cy.location("pathname").should("eq", "/contact");
	});

	it("Should have correct heading", () => {
		cy.getByDataTestId("heading").should("have.text", "Contact Page");
	});    
});
