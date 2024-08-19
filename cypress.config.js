/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = process.env

      return config
    }
  }
})
