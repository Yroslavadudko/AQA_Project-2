describe('Sign In', () => {
  beforeEach(() => {
    // Відкриття сторінки входу
    cy.visit('http://localhost:3000/TeamName-project/signin');
  });

  it('should sign in with email and password', () => {
    // Введення електронної пошти
    cy.get('.sc-gSsSbr > :nth-child(1) > .sc-khcxGw').type(
      'dudkomykola@icloud.com'
    );

    // Введення пароля
    cy.get('#password').type('Dudko_78');

    // Знаходимо кнопку "Sign in" і симулюємо наведення (hover) на неї
    cy.get('.sc-hTlBmN').trigger('mouseover');

    // Симулюємо фокус на кнопку "Sign in"
    // cy.get('.sc-bBPCrp').focus();

    // Клік на кнопку "Sign in"
    cy.get('.sc-hTlBmN').click();
  });
});

