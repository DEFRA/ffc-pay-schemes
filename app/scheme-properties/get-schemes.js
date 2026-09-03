const pillars = require('../constants/pillars')
const schemeIds = require('../constants/scheme-ids')
const schemeNames = require('../constants/scheme-names')
const sourceSystems = require('../constants/source-systems')

const getSchemes = () =>
  Object.keys(schemeIds).map((schemeKey) => ({
    schemeId: schemeIds[schemeKey],
    schemeName: schemeNames[schemeKey],
    sourceSystem: sourceSystems[schemeKey],
    pillar: pillars[schemeKey]
  }))

module.exports = {
  getSchemes
}
