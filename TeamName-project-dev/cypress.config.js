const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4y4p7c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
