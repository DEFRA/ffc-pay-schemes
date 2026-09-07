const sitiAgriSchemes = require('../../../app/constants/siti-agri-schemes')
const { isSitiAgri } = require('../../../app/helpers/is-siti-agri')

describe('isSitiAgri', () => {
  test.each(sitiAgriSchemes)('returns true for SITI scheme: %s', (schemeId) => {
    expect(isSitiAgri(schemeId)).toBe(true)
  })

  test.each([
    'unknown-scheme',
    '',
    null,
    undefined
  ])('returns false for non-SITI scheme: %s', (schemeId) => {
    expect(isSitiAgri(schemeId)).toBe(false)
  })
})
