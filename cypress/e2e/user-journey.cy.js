/// <reference types="cypress" />

describe("User journey tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("Should navigate to about page", () => {
		cy.get("a").contains("About").click();
		cy.location("pathname").should("eq", "/about");
	});

	it("Should navigate to contact page", () => {
		cy.get("a").contains("Contact").click();
		cy.location("pathname").should("eq", "/contact");
	});

	it("Should navigate back to home page", () => {
		cy.get("a").contains("Home").click();
		cy.location("pathname").should("eq", "/");
	});
});
