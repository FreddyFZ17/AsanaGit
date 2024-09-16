const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const { merge } = require('mochawesome-merge');
      const generateReport = require('mochawesome-report-generator');

      on('after:run', async (results) => {
        const report = await merge({
          files: [
            'cypress/reports/*.json' // Ruta de los reportes generados
          ]
        });
        await generateReport.create(report, {
          reportDir: 'cypress/reports',
          reportFilename: 'index.html',
          inline: true,
        });
      });
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
});
