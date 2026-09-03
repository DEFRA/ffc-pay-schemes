const frpsSchemes = require('../../../app/constants/frps-schemes')
const { isFRPS } = require('../../../app/helpers/is-frps')

describe('isFRPS', () => {
  test.each(frpsSchemes)('returns true for FRPS scheme: %s', (schemeId) => {
    expect(isFRPS(schemeId)).toBe(true)
  })

  test.each([
    'unknown-scheme',
    '',
    null,
    undefined
  ])('returns false for non-FRPS scheme: %s', (schemeId) => {
    expect(isFRPS(schemeId)).toBe(false)
  })
})
