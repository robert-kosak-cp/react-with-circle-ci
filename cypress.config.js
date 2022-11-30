const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 2000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    // data from cypress.env.json goes here
  },
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});