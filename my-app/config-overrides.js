console.log('config-overrides.js is loaded')

const { override, addBabelPlugin } = require('customize-cra')

module.exports = override(
    addBabelPlugin(['@babel/plugin-transform-react-jsx', { 'throwIfNamespace': false }])
)
