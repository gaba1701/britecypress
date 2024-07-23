const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    viewportWidth: 1600,
    viewportHeight: 1024
  },
})