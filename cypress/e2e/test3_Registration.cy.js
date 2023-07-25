describe("Registration Form", () => {
  it("should fill in registration form fields", () => {
    // Відкриття сторінки реєстрації
    cy.visit("http://localhost:3000/TeamName-project/register");

    // Введення імені
    // Знаходження елемента з текстом "Name" та введення імені "John Doe"
    // cy.contains("Name").next("input").type("AQA ");
    cy.get('[placeholder="Name"]').type("AQRA"); // Введення імені "John Doe" в поле з атрибутом "placeholder"="Enter your name"

    // Введення електронної пошти
    // cy.get(":nth-child(2) > .sc-dkllcU").type("loleher786@msback.com");
    cy.get('[placeholder="Email"]').type("lohjru786@msback.com");

    // Введення пароля
    // cy.get("#password").type("M15032005o");
    cy.get('[placeholder="Password"]').type("M15032005o");

    // Знаходимо кнопку "Зареєструватися" і симулюємо наведення (hover) на неї
    // cy.get(".sc-WuoJl").trigger("mouseover");

    // Симулюємо фокус на кнопку "Зареєструватися"
    //cy.get('.sc-hieurz').focus();

    // Натискання на кнопку "Зареєструватися"
    // cy.get(".sc-WuoJl").should("be.visible").click();
    // cy.get('[placeholder="Sign UP"]').trigger("mouseover");
    // cy.get('[placeholder="Sign UP"]').next("input").click();
    // Знаходження елемента з текстом "Name" та введення імені "John Doe"
    // cy.contains("Sign UP").next("input").click();
    // cy.contains("Sign UP").click(); // Клік на кнопку з текстом "Sign UP"
    // cy.get(".sign-up-button").click(); // Клік на кнопку з класом .sign-up-button
    // cy.contains("Sign UP").trigger("mouseover");
    //
    // Прокрутіть сторінку до кнопки "Sign UP"
    // cy.contains("Sign UP").scrollIntoView();

    // Зробіть паузу на короткий проміжок часу (за потреби)
    // Деякі сторінки потребують короткої затримки перед кліком
    // cy.wait(500);

    // Клікніть на кнопку "Sign UP"
    // cy.contains("Sign UP").click();
    // cy.contains("Sign UP").click();
    // cy.get('button.sc-eGYVfb.dDhexb[type="submit"]').click();
    cy.get('button[type="submit"]').first().click();

  });
});
