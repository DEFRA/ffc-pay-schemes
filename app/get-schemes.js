const schemeIds = require('./constants/scheme-ids')
const schemeNames = require('./constants/scheme-names')

const getSchemes = () =>
  Object.keys(schemeIds).map((schemeKey) => ({
    schemeId: schemeIds[schemeKey],
    schemeName: schemeNames[schemeKey]
  }))

module.exports = {
  getSchemes
}
