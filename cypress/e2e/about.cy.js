/// <reference types="cypress" />

describe("About Page tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.get("a").contains("About").click();
	});

	it("Navigation should work", () => {
		cy.location("pathname").should("eq", "/about");
	});

	it("Should have correct heading", () => {
		cy.getByDataTestId("heading").should("have.text", "About Page");
	});
});
