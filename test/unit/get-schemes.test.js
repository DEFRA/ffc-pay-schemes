const { getSchemes } = require('../../app/get-schemes')
const schemeIds = require('../../app/constants/scheme-ids')
const schemeNames = require('../../app/constants/scheme-names')

describe('getSchemes', () => {
  test('returns all schemes with their IDs and names', () => {
    expect(getSchemes()).toEqual(
      Object.keys(schemeIds).map((schemeKey) => ({
        schemeId: schemeIds[schemeKey],
        schemeName: schemeNames[schemeKey]
      }))
    )
  })

  test.each(Object.keys(schemeIds))(
    'returns the correct details for %s',
    (schemeKey) => {
      expect(getSchemes()).toContainEqual({
        schemeId: schemeIds[schemeKey],
        schemeName: schemeNames[schemeKey]
      })
    }
  )
})
