describe('Registration Form', () => {
  it('should validate registration form fields', () => {
    // Відкриття сторінки реєстрації
    cy.visit('http://localhost:3000/TeamName-project/register');

    // Введення невалідного імені (наприклад, менше 3 символів)
    cy.get(".sc-lbFxqA > :nth-child(1) > .sc-hTlBmN").type("_");

    // Введення невалідної електронної пошти (наприклад, без символу "@")
    cy.get(":nth-child(2) > .sc-hTlBmN").type("johndoe.example.com");

    // Введення невалідного пароля (наприклад, менше 6 символів)
    cy.get('#password').type('pass');

    // Знаходимо кнопку "Зареєструватися" і симулюємо наведення (hover) на неї
    cy.get(".sc-jgjOva").trigger("mouseover");

    // Симулюємо фокус на кнопку "Зареєструватися"
    //cy.get(".sc-jgjOva").focus();

    // Клікаємо на кнопку "Зареєструватися"
    cy.get(".sc-jgjOva").should("be.visible").click();
  });
});
