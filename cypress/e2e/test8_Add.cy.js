//const { type } = require("@testing-library/user-event/dist/type");
//const { invoke } = require("cypress/types/lodash");

describe("Add Recipe", () => {
  it("should add a new recipe", () => {
    // Opening the login page
    cy.visit("http://localhost:3000/TeamName-project/signin");

    // Entering email
    cy.get(".sc-evkebx > :nth-child(1) > .sc-dFlEDi").type(
      "dudkomykola@gmail.com"
    );

    // Password entry
    cy.get("#password").type("M15032005o");

    // We find the "Sign in" button and simulate hovering over it
    cy.get(".sc-bruIjz").trigger("mouseover");

    // Simulate focus on the "Sign in" button"
    // cy.get('.sc-bruIjz').focus();

    // Click on the "Sign in" button"
    cy.get(".sc-bruIjz").click();
    //cy.wait(2000); // Pause for 2 seconds

    // Check that the password input field is gone
    cy.get("#password").should("not.exist");

    // Open the "Add recipe" page
    cy.visit("http://localhost:3000/TeamName-project/main/add");

    // Fill in the text field "Enter item title"
    cy.get(":nth-child(1) > .sc-hZxDUR").type("Horilka");

    // Fill in the "Enter about recipe" text field
    cy.get(":nth-child(2) > .sc-hZxDUR").type("You pour and drink");

    // Вибрати опцію "Coctail" зі списку випадаючого меню "Category"
    //cy.get(
    // ":nth-child(3) > .sc-jNZGmv > .react-select__control > .react-select__value-container"
    //).select("Cocktail");

    // Select an item and select the "Cocktail" category
    cy.get(":nth-child(3) > .sc-jmvRde > .react-select__control").click();
    cy.contains("Ordinary Drink").click();

    // Select the "Highball glass" option from the "Glass" drop-down list
    cy.get(":nth-child(4) > .sc-jmvRde > .react-select__control").click();
    cy.contains("Beer pilsner").click();

    // Click the "+" button to add a new field
    cy.get(".sc-goYYCM").click();

    // Fill in a new field if needed
    cy.get(".sc-gJVHLD > .react-select__control").click();

    cy.contains("Kiwi").click();
    cy.get(".sc-iWyYSN").invoke("val", "26");

    cy.get(
      ".sc-jKLhie > .react-select__control > .react-select__value-container"
    ).click();

    cy.contains("kg").click();

    cy.get(".sc-hKOqWZ").type("Cut Kiwi and into a glass)");

    // Click the "Add recipe" button to save the recipe
    cy.get(".sc-bruIjz").click();

    // Verify that the recipe was successfully added
    cy.contains("Recipe added to collection successfully");
  });
});
