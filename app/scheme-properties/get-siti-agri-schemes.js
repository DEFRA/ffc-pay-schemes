const pillars = require('../constants/pillars')
const sitiAgriSchemeIds = require('../constants/siti-agri-schemes')
const schemeNames = require('../constants/scheme-names')
const sourceSystems = require('../constants/source-systems')

const getSitiAgriSchemes = () =>
  Object.keys(sitiAgriSchemeIds).map((schemeKey) => ({
    schemeId: sitiAgriSchemeIds[schemeKey],
    schemeName: schemeNames[schemeKey],
    sourceSystem: sourceSystems[schemeKey],
    pillar: pillars[schemeKey]
  }))

module.exports = {
  getSitiAgriSchemes
}
