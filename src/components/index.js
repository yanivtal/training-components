const React = require('react')
const ReactDOM = require('react-dom')
const Button = require('./Button/Button')

const SonarComponents = {
  Button,
}

module.exports = SonarComponents

// Export for use by the main application
window.React = React
window.ReactDOM = ReactDOM
