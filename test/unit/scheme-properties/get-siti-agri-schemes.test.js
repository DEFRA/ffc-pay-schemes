const sitiAgriSchemeIds = require('../../../app/constants/siti-agri-schemes')
const schemeIds = require('../../../app/constants/scheme-ids')
const schemeNames = require('../../../app/constants/scheme-names')
const sourceSystems = require('../../../app/constants/source-systems')
const pillars = require('../../../app/constants/pillars')
const { getSitiAgriSchemes } = require('../../../app/scheme-properties/get-siti-agri-schemes')

const schemeKeyById = Object.entries(schemeIds).reduce((acc, [key, value]) => {
  acc[value] = key
  return acc
}, {})

describe('getSitiAgriSchemes', () => {
  test('returns one scheme object for each SITI Agri scheme id', () => {
    const expected = sitiAgriSchemeIds.map((schemeId) => {
      const schemeKey = schemeKeyById[schemeId]

      expect(schemeKey).toBeDefined()

      return {
        schemeId,
        schemeName: schemeNames[schemeKey],
        sourceSystem: sourceSystems[schemeKey],
        pillar: pillars[schemeKey]
      }
    })

    expect(getSitiAgriSchemes()).toEqual(expected)
  })

  test('returns the correct metadata for specific scheme (SFI23)', () => {
    const schemes = getSitiAgriSchemes()
    const sfi23 = schemes.find((scheme) => scheme.schemeId === schemeIds.SFI23)

    expect(sfi23).toEqual({
      schemeId: schemeIds.SFI23,
      schemeName: schemeNames.SFI23,
      sourceSystem: sourceSystems.SFI23,
      pillar: pillars.SFI23
    })
  })
})
