const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1920,

  e2e: {
    
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*'],
    setupNodeEvents(on, config){
      on('task', {downloadFile})
    
    }

    
  
  }
})