const { getSchemeNames } = require('../../../app/scheme-name/get-scheme-names')
const schemeNames = require('../../../app/constants/scheme-names')

describe('getSchemeNames', () => {
  test('returns all scheme names', () => {
    expect(getSchemeNames()).toEqual(schemeNames)
  })
})
