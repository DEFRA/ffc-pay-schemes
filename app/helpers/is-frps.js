const frpsSchemes = require('../constants/frps-schemes')

const isFRPS = (schemeId) => {
  return frpsSchemes.includes(schemeId)
}

module.exports = {
  isFRPS
}
