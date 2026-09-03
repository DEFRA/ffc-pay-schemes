const { getSchemeIds } = require('../../../app/scheme-id/get-scheme-ids')
const schemeIds = require('../../../app/constants/scheme-ids')

describe('getSchemeIds', () => {
  test('returns all scheme IDs', () => {
    expect(getSchemeIds()).toEqual(schemeIds)
  })
})
