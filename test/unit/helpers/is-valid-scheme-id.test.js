const schemeIds = require('../../../app/constants/scheme-ids')
const { isValidSchemeId } = require('../../../app/helpers/is-valid-scheme-id')

describe('isValidSchemeId', () => {
  test.each(Object.values(schemeIds))(
    'returns true for valid scheme ID: %i',
    (schemeId) => {
      expect(isValidSchemeId(schemeId)).toBe(true)
    }
  )

  test('returns true for a valid scheme ID with surrounding whitespace', () => {
    expect(isValidSchemeId(` ${schemeIds.SFI} `)).toBe(true)
  })

  test('returns false for a scheme ID not included in scheme IDs', () => {
    const invalidSchemeId = Math.max(...Object.values(schemeIds)) + 1

    expect(isValidSchemeId(invalidSchemeId)).toBe(false)
  })
})
