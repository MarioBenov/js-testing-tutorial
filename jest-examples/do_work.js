const axios = require('axios')

function doWork2() {
  return axios.get('url', {body: {test: 'test'}})
}

module.exports = function doWork() {
  return axios.get('url', {body: {test: 'test'}})
}
