describe("Footer", () => {
  beforeEach(() => {
    // Відкриття сторінку логанізації
    cy.visit("http://localhost:3000/TeamName-project/signin");
  });

  it("should sign in with email and password, then check page elements", () => {
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
    // cy.wait(2000); // Пауза на 2 секунди
    cy.get("#password").should("not.exist");

    // Перевірка наявності логотипу та перевірка переадресації при його кліку
    //cy.get(".sc-dkHyXG > .sc-cseZMA")
    //.should("have.attr", "src")
    //.and("include", "logo.png");
    //cy.get(".sc-dkHyXG > .sc-cseZMA").click();
    //cy.url().should("eq", "http://localhost:3000/TeamName-project/main/home");
    // Перевірка наявності та переадресації по пунктам навігації

    //cy.contains(".sc-glhZnD > :nth-child(2) > .sc-fnqprR", "Drinks")
    // .should("have.attr", "href")
    //.and("include", "/categories/cocktails");
    //cy.contains(".sc-glhZnD > :nth-child(3) > .sc-fnqprR", "Add recipe")
    // .should("have.attr", "href")
    // .and("include", "/add-recipe");
    //cy.contains(".sc-glhZnD > :nth-child(4) > .sc-fnqprRA", "My recipes")
    //.should("have.attr", "href")
    // .and("include", "/user/recipes");
    //cy.contains(".sc-glhZnD > :nth-child(5) > .sc-fnqprR", "Favorites")
    //.should("have.attr", "href")
    // .and("include", "/user/favorites");

    // Перевірка наявності форми підписки
    cy.get(".sc-hTlBmN").should("exist");

    // Валідація поля для вводу емейла
    //cy.get(".sc-hTlBmN").type("dudkomykola@gmail.com");
    //cy.get(".sc-ehLHmL").should("be.disabled");

    //cy.get('footer form.subscription-form input[type="email"]')
    // .clear()
    // .type("valid_email@example.com");
    //cy.get('footer form.subscription-form button[type="submit"]').should(
    // "be.enabled"
    // );

    // Відправка форми з валідним емейлом та перевірка підписки
    //cy.get('footer form.subscription-form input[type="email"]').type(
    // "valid_email@example.com"
    //);
    //cy.get('footer form.subscription-form button[type="submit"]').click();

    // Перевірка наявності блоку "Follow us"
    cy.get(".sc-jTkTEj").should("exist");

    // Отримуємо всі посилання на соціальні мережі
    cy.get(".sc-jTkTEj")
      .find("a")
      .then((links) => {
        // Перевірка наявності 3 посилань на соціальні мережі
        cy.wrap(links).should("have.length", 3);


        
        
      });

      

    // Опціонально можна перевірити, чи з'являється пуш-повідомлення про успішну підписку.
    //cy.get(".push-notification.success").should("be.visible");
  });

  
});
