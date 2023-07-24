describe("Footer", () => {
  beforeEach(() => {
    // Opening the login page
    cy.visit("http://localhost:3000/TeamName-project/signin");
  });

  it("should sign in with email and password, then check page elements", () => {
    // Entering email
    cy.get(".sc-tRvzt > :nth-child(1) > .sc-dkllcU").type(
      "kesidon643@muzitp.com"
    );

    // Password entry
    cy.get("#password").type("M15032005o");

    // We find the "Sign in" button and simulate hovering over it
    cy.get(".sc-WuoJl").trigger("mouseover");

    // We simulate focus on the "Sign in" button
    // cy.get('.sc-WuoJl').focus();

    // Click on the "Sign in" button
    cy.get(".sc-WuoJl").click();
    // cy.wait(2000); // Пауза на 2 секунди
    cy.get("#password").should("not.exist");

    // Checking for the presence of the logo and checking for redirection when it is clicked
    cy.get(".sc-gLfKCG > .sc-ZGyli")
      //.should("have.attr", "src")
      .should("contain", "Drink Master");
    //cy.get(".sc-dkHyXG > .sc-cseZMA").click();
    //cy.url().should("eq", "http://localhost:3000/TeamName-project/main/home");
    // Перевірка наявності та переадресації по пунктам навігації

    cy.contains(".sc-gLfKCG > nav > ul > :nth-child(1)", "Home");

    cy.contains(".sc-gLfKCG > nav > ul > :nth-child(2)", "Drinks");
    // .should("have.attr", "href")
    // .and("include", "/drinks/Cocktail");

    cy.contains(".sc-gLfKCG > nav > ul > :nth-child(3)", "Add recipe");
    // .should("have.attr", "href")
    // .and("include", "/add-recipe");

    cy.contains(".sc-gLfKCG > nav > ul > :nth-child(4)", "My recipes");
    //.should("have.attr", "href")
    // .and("include", "/user/recipes");

    cy.contains(".sc-gLfKCG > nav > ul > :nth-child(5)", "Favorites");
    //.should("have.attr", "href")
    // .and("include", "/user/favorites");

    // Checking the availability of the subscription form
    cy.get(".sc-dkllcU").should("exist");

    // Submit the form with a valid email address and verify your subscription
    cy.get(".sc-dkllcU").type("kesidon643@muzitp.com");
    cy.get(".sc-hsGsFZ").click();
    cy.get("#NXReportButton").click();

    // Checking the presence of the "Follow us" block
    cy.get(".sc-cseZMA").should("exist");

    // We get all the links to social networks
    // cy.get(".sc-ipUqZP")
    //   .find("a")
    //   .then((links) => {
    //     // Check for 3 links to social networks
    //     cy.wrap(links).should("have.length", 3);



    cy.get(".sc-cseZMA")
      .should("have.length", 3) // Перевірка наявності 3 посилань
      .each((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      });

    // Опціонально можна перевірити, чи з'являється пуш-повідомлення про успішну підписку.
    //cy.get(".push-notification.success").should("be.visible");
  });

  
});
