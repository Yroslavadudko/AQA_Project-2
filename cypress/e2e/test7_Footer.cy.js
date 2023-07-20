describe("Footer", () => {
  beforeEach(() => {
    // Відкриття сторінку логанізації
    cy.visit("http://localhost:3000/TeamName-project/signin");
  });

  it("should sign in with email and password, then check page elements", () => {
    // Введення електронної пошти
    cy.get(".sc-gJbavg > :nth-child(1) > .sc-csnruV").type(
      "hoyove8996@paldept.com"
    );

    // Введення пароля
    cy.get("#password").type("M15032005o");

    // Знаходимо кнопку "Sign in" і симулюємо наведення (hover) на неї
    cy.get(".sc-dFlEDi").trigger("mouseover");

    // Симулюємо фокус на кнопку "Sign in"
    // cy.get('.sc-dFlEDi').focus();

    // Клік на кнопку "Sign in"
    cy.get(".sc-dFlEDi").click();
    // cy.wait(2000); // Пауза на 2 секунди
    cy.get("#password").should("not.exist");

    // Перевірка наявності логотипу та перевірка переадресації при його кліку
    cy.get(".sc-jTkTEj > .sc-ckohTs")
      //.should("have.attr", "src")
      .should("contain", "DrinkMaster");
    //cy.get(".sc-dkHyXG > .sc-cseZMA").click();
    //cy.url().should("eq", "http://localhost:3000/TeamName-project/main/home");
    // Перевірка наявності та переадресації по пунктам навігації

    cy.contains(".sc-jTkTEj > nav > ul > :nth-child(1)", "Home");

    cy.contains(".sc-jTkTEj > nav > ul > :nth-child(2)", "Drinks");
    // .should("have.attr", "href")
    // .and("include", "/drinks/Cocktail");

    cy.contains(".sc-jTkTEj > nav > ul > :nth-child(3)", "Add recipe");
    // .should("have.attr", "href")
    // .and("include", "/add-recipe");

    cy.contains(".sc-jTkTEj > nav > ul > :nth-child(4)", "My recipes");
    //.should("have.attr", "href")
    // .and("include", "/user/recipes");

    cy.contains(".sc-jTkTEj > nav > ul > :nth-child(5)", "Favorites");
    //.should("have.attr", "href")
    // .and("include", "/user/favorites");

    // Перевірка наявності форми підписки
    cy.get(".sc-csnruV").should("exist");

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
    cy.get(".sc-csnruV").type("hoyove8996@paldept.com");
    cy.get('.sc-ymkpK').click();
    //cy.get("#NXReportButton").click();

    // Перевірка наявності блоку "Follow us"
    cy.get(".sc-ipUqZP").should("exist");

    // Отримуємо всі посилання на соціальні мережі
    cy.get(".sc-ipUqZP")
      .find("a")
      .then((links) => {
        // Перевірка наявності 3 посилань на соціальні мережі
        cy.wrap(links).should("have.length", 3);
      });

    // Опціонально можна перевірити, чи з'являється пуш-повідомлення про успішну підписку.
    //cy.get(".push-notification.success").should("be.visible");
  });

  
});
