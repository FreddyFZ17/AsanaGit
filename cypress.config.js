const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    defaultCommandTimeout: 15000, // Ajusta según sea necesario
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      allureWriter(on, config);
      return config;
    },
  },
})