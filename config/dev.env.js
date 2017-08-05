var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ENDPOINT: '"http://localhost:3000/api"',
  API_MENU: '"http://localhost:3000/gas/macros/s/AKfycbzUstOklUmuXrgvQAoETCDst3sDfE3d6Re22iXM9LWzTkPPHFQ/exec?id=1dGGG7U7CS5IoymxUDUmOuiQ9s3KuuEqNLik6tHYU1lA&sheet=menu"',
  API_LOCATIONS: '"http://localhost:3000/gas/macros/s/AKfycbzUstOklUmuXrgvQAoETCDst3sDfE3d6Re22iXM9LWzTkPPHFQ/exec?id=1dGGG7U7CS5IoymxUDUmOuiQ9s3KuuEqNLik6tHYU1lA&sheet=locations"'
})
