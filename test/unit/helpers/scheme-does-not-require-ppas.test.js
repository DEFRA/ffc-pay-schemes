const { schemeDoesNotRequirePPAs } = require('../../../app/helpers/scheme-does-not-require-ppas')
const schemeIds = require('../../../app/constants/scheme-ids')
const schemesNotRequiringPPAs = require('../../../app/constants/schemes-not-requiring-ppas')

describe('schemeDoesNotRequirePPAs', () => {
  test.each(Object.entries(schemeIds))(
    'returns the expected result for %s',
    (schemeKey, schemeId) => {
      expect(schemeDoesNotRequirePPAs(schemeId))
        .toBe(schemesNotRequiringPPAs.includes(schemeId))
    }
  )

  test('returns false for an unknown schemeId', () => {
    expect(schemeDoesNotRequirePPAs(999)).toBe(false)
  })
})
