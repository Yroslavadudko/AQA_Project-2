describe('Sign In and Check Elements', () => {
  beforeEach(() => {
    // Opening the login page
    cy.visit('http://localhost:3001/TeamName-project/signin');
  });

  it('should sign in with email and password, then check page elements', () => {
    // Entering email
    cy.get(".sc-tRvzt > :nth-child(1) > .sc-dkllcU").type(
      "dudkomykola@gmail.com"
    );

    // Password entry
    cy.get("#password").type("M15032005o");

    // We find the "Sign in" button and simulate hovering over it
    cy.get(".sc-WuoJl").trigger("mouseover");

    // Simulate focus on the "Sign in" button"
    // cy.get('.sc-WuoJl').focus();

    // Click on the "Sign in" button"
    cy.get(".sc-WuoJl").click();
    //cy.wait(2000); // Pause for 2 seconds

    // Check that the password input field is gone
    cy.get("#password").should("not.exist");

    // Checking the presence of the "DrinkMaster" logo
    cy.get(".sc-dkHyXG > .sc-ZGyli").should("contain", "Drink Master");

    // Checking the presence of the navigation menu
    cy.get(":nth-child(1) > .sc-kICFWz").contains("Home"); //.should("be.visible")
    cy.get(":nth-child(2) > .sc-kICFWz").contains("Drinks"); //.should("be.visible")
    cy.get(":nth-child(3) > .sc-kICFWz").contains("Add recipe"); //.should("be.visible")
    cy.get(":nth-child(4) > .sc-kICFWz").contains("My recipes"); //.should("be.visible")
    cy.get(":nth-child(5) > .sc-kICFWz").contains("Favorites"); //.should("be.visible")

    // Checking for a dark/light switch
    cy.get(".sc-HaPHK").should("exist");

    // Switch to light theme
    cy.get(".sc-HaPHK").click();
    //cy.wait(2000); // Pause for 2 seconds
    //cy.get(".sc-bBQvrP").should("have.text", "Light Mode");
    cy.get(".sc-HaPHK").should("have.text", "switch to light theme"); // Перевірити, що змінився логотип на сонце

    // Switch to Dark theme
    cy.get(".sc-HaPHK").click();
    //cy.wait(2000); // Pause for 2 seconds
    cy.get(".sc-HaPHK").should("have.text", "switch to dark theme");

    // Checking the presence of the "Profile" menu
    cy.get(".sc-jIsSBh").should("exist");

    // "Profile"
    cy.get(".sc-hOjwQh").click();
    //cy.wait(2000); // Pause for 2 seconds

    // "Log out"
    cy.get(".sc-dlaqvm").click();
    cy.get(".sc-fHREqx > :nth-child(1)").click();

    // exit
    //cy.get("#NXReportButton").click();
  });
});




