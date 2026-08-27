const { getSchemeNames } = require('../../app/get-scheme-names')
const schemeNames = require('../../app/constants/scheme-names')

describe('getSchemeNames', () => {
  test('returns all scheme names', () => {
    expect(getSchemeNames()).toEqual(schemeNames)
  })
})
