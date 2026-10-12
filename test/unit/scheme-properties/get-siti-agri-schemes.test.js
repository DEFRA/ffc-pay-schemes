const sitiAgriSchemeIds = require('../../../app/constants/siti-agri-schemes')
const schemeNames = require('../../../app/constants/scheme-names')
const sourceSystems = require('../../../app/constants/source-systems')
const pillars = require('../../../app/constants/pillars')
const { getSitiAgriSchemes } = require('../../../app/scheme-properties/get-siti-agri-schemes')

describe('getSitiAgriSchemes', () => {
  test('returns one scheme object for each SITI Agri scheme id', () => {
    const expected = Object.keys(sitiAgriSchemeIds).map((schemeKey) => ({
      schemeId: sitiAgriSchemeIds[schemeKey],
      schemeName: schemeNames[schemeKey],
      sourceSystem: sourceSystems[schemeKey],
      pillar: pillars[schemeKey]
    }))

    expect(getSitiAgriSchemes()).toEqual(expected)
  })
})
