//const { type } = require("@testing-library/user-event/dist/type");
//const { invoke } = require("cypress/types/lodash");

describe("Add Recipe", () => {
  it("should add a new recipe", () => {
    // Відкрити сторінку "Add recipe"
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

    cy.visit("http://localhost:3000/TeamName-project/main/add");

    // Заповнити текстове поле "Enter item title"
    cy.get(":nth-child(1) > .sc-hZxDUR").type("Horilka");

    // Заповнити текстове поле "Enter about recipe"
    cy.get(":nth-child(2) > .sc-hZxDUR").type("You pour and drink");

    // Вибрати опцію "Coctail" зі списку випадаючого меню "Category"
    //cy.get(
    // ":nth-child(3) > .sc-jNZGmv > .react-select__control > .react-select__value-container"
    //).select("Cocktail");

    // Вибрати елемент з React Select з класом "react_select" та виконати вибір категорії "Cocktail"
    cy.get(":nth-child(3) > .sc-jmvRde > .react-select__control").click(); // Клікнути на React Select для відкриття випадаючого списку
    cy.contains("Ordinary Drink").click(); // Клікнути на елемент зі списку, що містить текст "Cocktail"

    // Вибрати опцію "Highball glass" зі списку випадаючого меню "Glass"
    //cy.get(":nth-child(4) > .sc-jNZGmv > .react-select__control").select(
    // "Highball glass"
    //);

    // Вибрати елемент з React Select з класом "react_select" та виконати вибір категорії "Cocktail"
    cy.get(":nth-child(4) > .sc-jmvRde > .react-select__control").click(); // Клікнути на React Select для відкриття випадаючого списку
    cy.contains("Beer pilsner").click(); // Клікнути на елемент зі списку, що містить текст "Cocktail"

    // Натиснути кнопку "+", щоб додати нове поле
    cy.get(".sc-goYYCM").click();

    // Заповнити нове поле, якщо воно потрібне
    cy.get(".sc-gJVHLD > .react-select__control").click();

    //cy.get(
     // ".sc-gJVHLD > .react-select__control > .react-select__indicators > .react-select__indicator"
    //).click();
    cy.contains("Kiwi").click();
    cy.get(".sc-iWyYSN").invoke("val", "26");
    cy.get(
      ".sc-jKLhie > .react-select__control > .react-select__value-container"
    ).click();
    cy.contains("kg").click();

    cy.get(".sc-hKOqWZ").type("Cut Kiwi and into a glass)");

    // Натиснути кнопку "Add recipe" для збереження рецепту
    cy.get(".sc-bruIjz").click();

    // Перевірити, що рецепт був успішно доданий
    cy.contains("Recipe added to collection successfully");
  });
});
