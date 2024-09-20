// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Handle uncaught exceptions globally
import "./commands";
import '@shelex/cypress-allure-plugin';
import 'cypress-mochawesome-reporter/register';
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the ResizeObserver error
    if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
      return false; // Prevents Cypress from failing the test
    }
    return true; // Allows Cypress to handle other errors normally
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar errores relacionados con $CORE_PERF_START_SESSION_EXPERIMENT_PARALLELIZATION
  if (err.message.includes('$CORE_PERF_START_SESSION_EXPERIMENT_PARALLELIZATION is not defined')) {
    return false; // Prevenir que Cypress falle la prueba
  }
  
  // Permitir que Cypress falle en caso de otros errores
  return true;
});

  // Import commands.js using ES2015 syntax:



  // Alternatively you can use CommonJS syntax:
  // require('./commands')
