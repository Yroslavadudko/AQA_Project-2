describe("Footer", () => {
  beforeEach(() => {
    // Opening the login page
    cy.visit("http://localhost:3000/TeamName-project/signin");
  });

  it("should sign in with email and password, then check page elements", () => {
    // Entering email
    cy.get(".sc-evkebx > :nth-child(1) > .sc-dFlEDi").type(
      "kesidon643@muzitp.com"
    );

    // Password entry
    cy.get("#password").type("M15032005o");

    // We find the "Sign in" button and simulate hovering over it
    cy.get(".sc-bruIjz").trigger("mouseover");

    // We simulate focus on the "Sign in" button
    // cy.get('.sc-bruIjz').focus();

    // Click on the "Sign in" button
    cy.get(".sc-bruIjz").click();
    // cy.wait(2000); // Пауза на 2 секунди
    cy.get("#password").should("not.exist");

    // Checking for the presence of the logo and checking for redirection when it is clicked
    cy.get(".sc-gsMHZj > .sc-fcoGWP")
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

    // Checking the availability of the subscription form
    cy.get(".sc-dFlEDi").should("exist");

    // Submit the form with a valid email address and verify your subscription
    cy.get(".sc-dFlEDi").type("kesidon643@muzitp.com");
    cy.get(".sc-dXhBGb").click();
    cy.get("#NXReportButton").click();

    // Checking the presence of the "Follow us" block
    cy.get(".sc-ipUqZP").should("exist");

    // We get all the links to social networks
    cy.get(".sc-ipUqZP")
      .find("a")
      .then((links) => {
        // Check for 3 links to social networks
        cy.wrap(links).should("have.length", 3);
      });

    // Опціонально можна перевірити, чи з'являється пуш-повідомлення про успішну підписку.
    //cy.get(".push-notification.success").should("be.visible");
  });

  
});
