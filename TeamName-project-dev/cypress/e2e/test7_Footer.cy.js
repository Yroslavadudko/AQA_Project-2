describe('Footer', () => {
   beforeEach(() => {
    // Відкриття сторінку логанізації
    cy.visit('http://localhost:3000/TeamName-project/signin'); 
  });

  it('should sign in with email and password, then check page elements', () => {
    // Введення електронної пошти
    cy.get('.sc-lbFxqA > :nth-child(1) > .sc-hTlBmN').type(
      'dudkomykola@gmail.com'
    );

    // Введення пароля
    cy.get('#password').type('M15032005o');

    // Знаходимо кнопку "Sign in" і симулюємо наведення (hover) на неї
    cy.get('.sc-jgjOva').trigger('mouseover');

    // Симулюємо фокус на кнопку "Sign in"
    // cy.get('.sc-jgjOva').focus();

    // Клік на кнопку "Sign in"
    cy.get('.sc-jgjOva').click();
    cy.wait(2000); // Пауза на 2 секунди
  }); 

  it('contains a logo that redirects to the homepage', () => {
    // Перевірка наявності логотипу та перевірка переадресації при його кліку
    cy.get('.sc-dkHyXG > .sc-cseZMA')
      .should('have.attr', 'src')
      .and('include', 'logo.png');
    cy.get('.sc-dkHyXG > .sc-cseZMA').click();
    cy.url().should('eq', 'http://localhost:3000/TeamName-project/main/home');
  });

  it('contains a navigation block with specific links', () => {
    // Перевірка наявності та переадресації по пунктам навігації
    cy.contains(':nth-child(2) > .sc-hBhlLA', 'Drinks')
      .should('have.attr', 'href')
      .and('include', '/categories/cocktails');
    cy.contains(':nth-child(3) > .sc-hBhlLA', 'Add recipe')
      .should('have.attr', 'href')
      .and('include', '/add-recipe');
    cy.contains(':nth-child(4) > .sc-hBhlLA', 'My recipes')
      .should('have.attr', 'href')
      .and('include', '/user/recipes');
    cy.contains(':nth-child(5) > .sc-hBhlLA', 'Favorites')
      .should('have.attr', 'href')
      .and('include', '/user/favorites');
  });

  it('contains a subscription form and validates email input', () => {
    // Перевірка наявності форми підписки
    cy.get('footer form.subscription-form').should('exist');

    // Валідація поля для вводу емейла
    cy.get('footer form.subscription-form input[type="email"]').type(
      'invalid_email'
    );
    cy.get('footer form.subscription-form button[type="submit"]').should(
      'be.disabled'
    );

    cy.get('footer form.subscription-form input[type="email"]')
      .clear()
      .type('valid_email@example.com');
    cy.get('footer form.subscription-form button[type="submit"]').should(
      'be.enabled'
    );
  });

  it('subscribes successfully when a valid email is submitted', () => {
    // Відправка форми з валідним емейлом та перевірка підписки
    cy.get('footer form.subscription-form input[type="email"]').type(
      'valid_email@example.com'
    );
    cy.get('footer form.subscription-form button[type="submit"]').click();

 it('contains a block "Follow us" with social media links', () => {
   // Перевірка наявності блоку "Follow us"
   cy.get('footer .follow-us').should('exist');

   // Перевірка наявності посилань на соціальні мережі та їх валідність
   cy.get('footer .follow-us a')
     .should('have.length', 3) // Перевірка наявності 3 посилань
     .each(link => {
       cy.request(link.prop('href')).its('status').should('eq', 200); // Перевірка, що посилання доступні
     });
 });

    // Опціонально можна перевірити, чи з'являється пуш-повідомлення про успішну підписку.
    cy.get('.push-notification.success').should('be.visible');
  });
});
