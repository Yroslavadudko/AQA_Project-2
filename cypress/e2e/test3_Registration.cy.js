describe('Registration Form', () => {
  it('should fill in registration form fields', () => {
    // Відкриття сторінки реєстрації
    cy.visit('http://localhost:3000/TeamName-project/register');

    // Введення імені
    cy.get('.sc-cBUajo > :nth-child(1) > .sc-jJgVPi').type('Ululu');

    // Введення електронної пошти
    cy.get(':nth-child(2) > .sc-jJgVPi').type('loleher786@msback.com');

    // Введення пароля
    cy.get('#password').type('Ulu777lu');

    // Знаходимо кнопку "Зареєструватися" і симулюємо наведення (hover) на неї
    cy.get('.sc-hieurz').trigger('mouseover');

    // Симулюємо фокус на кнопку "Зареєструватися"
    cy.get('.sc-hieurz').focus();

    // Натискання на кнопку "Зареєструватися"
    cy.get('.sc-hieurz').should('be.visible').click();
  });
});
