describe('Sign In and Check Elements', () => {
  beforeEach(() => {
    // Opening the login page
    cy.visit('http://localhost:3001/TeamName-project/signin');
  });

  it('should sign in with email and password, then check page elements', () => {
    // Entering email
    cy.get(".sc-gJbavg > :nth-child(1) > .sc-csnruV").type(
      "dudkomykola@gmail.com"
    );

    // Password entry
    cy.get("#password").type("M15032005o");

    // We find the "Sign in" button and simulate hovering over it
    cy.get(".sc-dFlEDi").trigger("mouseover");

    // Simulate focus on the "Sign in" button"
    // cy.get('.sc-dFlEDi').focus();

    // Click on the "Sign in" button"
    cy.get(".sc-dFlEDi").click();
    //cy.wait(2000); // Pause for 2 seconds

    // Check that the password input field is gone
    cy.get("#password").should("not.exist");

    // Checking the presence of the "DrinkMaster" logo
    cy.get(".sc-gsMHZj > .sc-ckohTs").should("contain", "DrinkMaster");

    // Checking the presence of the navigation menu
    //cy.get(".sc-bjmMVV > :nth-child(1)").contains("Home").should("be.visible");
    //cy.get(".sc-fxDHCw > :nth-child(2)").contains("Drinks").should("be.visible");
    //cy.get(".sc-glhZnD > :nth-child(3)")
    //.contains("Add recipe")
    // .should("be.visible");
    //cy.get(".sc-glhZnD > :nth-child(4)")
    //.contains("My recipes")
    //.should("be.visible");
    // cy.get(".sc-glhZnD > :nth-child(5)")
    // .contains("Favorites")
    // .should("be.visible");

    // Checking for a dark/light switch
    cy.get(".sc-hOjwQh").should("exist");

    // Switch to light theme
    cy.get(".sc-hOjwQh").click();
    //cy.wait(2000); // Pause for 2 seconds
    //cy.get(".sc-bBQvrP").should("have.text", "Light Mode");
    cy.get(".sc-hOjwQh").should("have.text", "switch to light theme"); // Перевірити, що змінився логотип на сонце

    // Switch to Dark theme
    cy.get(".sc-hOjwQh").click();
    //cy.wait(2000); // Pause for 2 seconds
    cy.get(".sc-hOjwQh").should("have.text", "switch to dark theme");

    // Checking the presence of the "Profile" menu
    cy.get(".sc-jIsSBh").should("exist");

    // "Profile"
    cy.get(".sc-jIsSBh").click();
    //cy.wait(2000); // Pause for 2 seconds

    // "Log out"
    cy.get(".sc-jsDmXc").click();
    cy.get(".sc-EtGjI > :nth-child(1)").click();

    // exit
    cy.get("#NXReportButton").click();

  });
});

//.sc-fFnglj
// .sc-idHovd
// .sc-dHPGRQ


