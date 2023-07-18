const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ivr3c7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
