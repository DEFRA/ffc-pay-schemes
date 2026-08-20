const { schemeProvidesAccountingValues } = require('../../app/scheme-provides-accounting-values')
const schemeIds = require('../../app/constants/scheme-ids')
const schemesProvidingAccountingValues = require('../../app/constants/schemes-providing-account-values')

describe('schemeProvidesAccountingValues', () => {
  test.each(Object.entries(schemeIds))(
    'returns the expected result for %s',
    (schemeKey, schemeId) => {
      expect(schemeProvidesAccountingValues(schemeId))
        .toBe(schemesProvidingAccountingValues.includes(schemeId))
    }
  )

  test('returns false for an unknown schemeId', () => {
    expect(schemeProvidesAccountingValues(999)).toBe(false)
  })
})
