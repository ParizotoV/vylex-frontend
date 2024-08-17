/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: true,
  },
});
