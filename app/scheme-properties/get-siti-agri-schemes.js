const pillars = require('../constants/pillars')
const sitiAgriSchemeIds = require('../constants/siti-agri-schemes')
const schemeNames = require('../constants/scheme-names')
const sourceSystems = require('../constants/source-systems')
const schemeIds = require('../constants/scheme-ids')

const schemeKeyById = Object.entries(schemeIds).reduce((acc, [key, value]) => {
  acc[value] = key
  return acc
}, {})

const getSitiAgriSchemes = () =>
  sitiAgriSchemeIds.map((schemeId) => {
    const schemeKey = schemeKeyById[schemeId]

    if (!schemeKey) {
      throw new Error(`No scheme metadata found for schemeId: ${schemeId}`)
    }

    return {
      schemeId,
      schemeName: schemeNames[schemeKey],
      sourceSystem: sourceSystems[schemeKey],
      pillar: pillars[schemeKey]
    }
  })

module.exports = {
  getSitiAgriSchemes
}
