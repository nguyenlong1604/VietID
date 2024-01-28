const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
  projectId: "osyypv",   //npx cypress run --record --key 91db990f-bcfc-455a-a9db-f66b43259416
  // projectId: "qnkvt3",   //nguyenlong1604444@gmail.com//npx cypress run --record --key 11ea5b0c-a788-47f2-b041-af74aa22f509
  // projectId: "yxn4z1",
  // npx cypress run --env TAGS="@smoke" --spec "D:\Cypress\CypressB1\cypress\e2e\tests\features\LoginOrange.feature"

  e2e: {
    chromeWebSecurity: false,
    experimentalStudio: true,
    specPattern: "**/*.feature", // setup cucumber feature
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
  },
});