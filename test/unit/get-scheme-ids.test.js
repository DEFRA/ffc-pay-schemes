const { getSchemeIds } = require('../../app/get-scheme-ids')
const schemeIds = require('../../app/constants/scheme-ids')

describe('getSchemeIds', () => {
  test('returns all scheme IDs', () => {
    expect(getSchemeIds()).toEqual(schemeIds)
  })
})
