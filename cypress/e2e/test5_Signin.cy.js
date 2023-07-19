describe('Sign In', () => {
  beforeEach(() => {
    // Відкриття сторінки входу
    cy.visit('http://localhost:3000/TeamName-project/signin');
  });

  it('should sign in with email and password', () => {
    // Введення електронної пошти
    cy.get(".sc-lbFxqA > :nth-child(1) > .sc-hTlBmN").type(
      "dudkomykola@gmail.com"
    );

    // Введення пароля
    cy.get("#password").type("M15032005o");

    // Знаходимо кнопку "Sign in" і симулюємо наведення (hover) на неї
    cy.get(".sc-jgjOva").trigger("mouseover");

    // Симулюємо фокус на кнопку "Sign in"
    // cy.get('.sc-jgjOva').focus();

    // Клік на кнопку "Sign in"
    cy.get(".sc-jgjOva").click();
  });
});

