describe('Registration Form', () => {
  it('should fill in registration form fields', () => {
    // Відкриття сторінки реєстрації
    cy.visit('http://localhost:3000/TeamName-project/register');

    // Введення імені
    cy.get(".sc-tRvzt > :nth-child(1) > .sc-dkllcU").type("AQA");

    // Введення електронної пошти
    cy.get(":nth-child(2) > .sc-dkllcU").type("loleher786@msback.com");

    // Введення пароля
    cy.get('#password').type('M15032005o');

    // Знаходимо кнопку "Зареєструватися" і симулюємо наведення (hover) на неї
    cy.get(".sc-WuoJl").trigger("mouseover");

    // Симулюємо фокус на кнопку "Зареєструватися"
    //cy.get('.sc-hieurz').focus();

    // Натискання на кнопку "Зареєструватися"
    cy.get(".sc-WuoJl").should("be.visible").click();
  });
});
