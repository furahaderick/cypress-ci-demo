/// <reference types="cypress" />

describe("Home Page tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("Should have correct title", () => {
		cy.title().should("eq", "React App");
	});

	it("Should have correct pathname", () => {
		cy.location("pathname").should("eq", "/");
	});

	it("Should have correct heading", () => {
		cy.getByDataTestId("heading").should("have.text", "Home Page");
	});
});
