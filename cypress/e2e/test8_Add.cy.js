//const { type } = require("@testing-library/user-event/dist/type");
//const { invoke } = require("cypress/types/lodash");

describe("Add Recipe", () => {
  it("should add a new recipe", () => {
    // Відкрити сторінку "Add recipe"
    cy.visit("http://localhost:3000/TeamName-project/signin");

    // Entering email
    cy.get(".sc-iTpZeM > :nth-child(1) > .sc-cjxVAP").type(
      "dudkomykola@gmail.com"
    );

    // Password entry
    cy.get("#password").type("M15032005o");

    // We find the "Sign in" button and simulate hovering over it
    cy.get(".sc-jdbXwy").trigger("mouseover");

    // Simulate focus on the "Sign in" button"
    // cy.get('.sc-jdbXwy').focus();

    // Click on the "Sign in" button"
    cy.get(".sc-jdbXwy").click();
    //cy.wait(2000); // Pause for 2 seconds

    // Check that the password input field is gone
    cy.get("#password").should("not.exist");

    cy.visit("http://localhost:3000/TeamName-project/main/add");

    // Заповнити текстове поле "Enter item title"
    cy.get(":nth-child(1) > .sc-lbpJiu").type("Gorilka");

    // Заповнити текстове поле "Enter about recipe"
    cy.get(":nth-child(2) > .sc-lbpJiu").type("Popel.");

    // Вибрати опцію "Coctail" зі списку випадаючого меню "Category"
    //cy.get(
    // ":nth-child(3) > .sc-jNZGmv > .react-select__control > .react-select__value-container"
    //).select("Cocktail");

    // Вибрати елемент з React Select з класом "react_select" та виконати вибір категорії "Cocktail"
    cy.get(
      ":nth-child(3) > .sc-jNZGmv > .react-select__control > .react-select__value-container"
    ).click(); // Клікнути на React Select для відкриття випадаючого списку
    cy.contains("Cocktail").click(); // Клікнути на елемент зі списку, що містить текст "Cocktail"

    // Вибрати опцію "Highball glass" зі списку випадаючого меню "Glass"
    //cy.get(":nth-child(4) > .sc-jNZGmv > .react-select__control").select(
    // "Highball glass"
    //);

    // Вибрати елемент з React Select з класом "react_select" та виконати вибір категорії "Cocktail"
    cy.get(":nth-child(4) > .sc-jNZGmv > .react-select__control").click(); // Клікнути на React Select для відкриття випадаючого списку
    cy.contains("Beer pilsner").click(); // Клікнути на елемент зі списку, що містить текст "Cocktail"

    // Натиснути кнопку "+", щоб додати нове поле
    cy.get(".sc-ckohTs").click();

    // Заповнити нове поле, якщо воно потрібне
    cy.get(".sc-gVZaFV").click();

    cy.get(
      ".sc-jgjOva > .react-select__control > .react-select__indicators > .react-select__indicator"
    ).click();
    cy.contains("Brandy").click();
    cy.get(".sc-lbFxqA").invoke("val", "50");
    cy.get(
      ".sc-iNOAWR > .react-select__control > .react-select__indicators"
    ).click();
    cy.contains("g").click();

    //cy.get(".sc-bUjxVm").type("Slava");

    // Натиснути кнопку "Add recipe" для збереження рецепту
    cy.get(".sc-jdbXwy").click();

    // Перевірити, що рецепт був успішно доданий
    //cy.contains("Recipe added successfully!");
  });
});
