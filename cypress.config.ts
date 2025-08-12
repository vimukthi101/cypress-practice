import { defineConfig } from "cypress";
import {downloadFile} from "cypress-downloadfile/lib/addPlugin";
import cypressMochawesomeReporter from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  e2e: {
    projectId:'matzt8',
    baseUrl: "https://testautomationpractice.blogspot.com/",
    screenshotOnRunFailure: true,
    video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      json: true,
      reportDir: 'reports/mochawesome-report',
    },
    // viewportWidth: 1920,
    // viewportHeight:1080,
    trashAssetsBeforeRuns:true,
    defaultBrowser: "chrome",
    watchForFileChanges:false,
    retries:{
      openMode:0,
      runMode:1
    },
    setupNodeEvents(on, config) {
      cypressMochawesomeReporter(on);
      // implement node event listeners here
      on('task', {downloadFile})
      on('task',{myLog(message){
        return 'THIS IS CUSTOM LOG FOR : ' + message
        }})
    },
  },
});
