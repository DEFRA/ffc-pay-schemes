const { getSchemes } = require('../../../app/scheme-properties/get-schemes')
const pillars = require('../../../app/constants/pillars')
const schemeIds = require('../../../app/constants/scheme-ids')
const schemeNames = require('../../../app/constants/scheme-names')
const sourceSystems = require('../../../app/constants/source-systems')

describe('getSchemes', () => {
  test('returns all schemes with their IDs and names', () => {
    expect(getSchemes()).toEqual(
      Object.keys(schemeIds).map((schemeKey) => ({
        schemeId: schemeIds[schemeKey],
        schemeName: schemeNames[schemeKey],
        sourceSystem: sourceSystems[schemeKey],
        pillar: pillars[schemeKey]
      }))
    )
  })

  test.each(Object.keys(schemeIds))(
    'returns the correct details for %s',
    (schemeKey) => {
      expect(getSchemes()).toContainEqual({
        schemeId: schemeIds[schemeKey],
        schemeName: schemeNames[schemeKey],
        sourceSystem: sourceSystems[schemeKey],
        pillar: pillars[schemeKey]
      })
    }
  )
})
