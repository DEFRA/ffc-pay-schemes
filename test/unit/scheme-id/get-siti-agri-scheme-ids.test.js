const sitiAgriSchemes = require('../../../app/constants/siti-agri-schemes')
const { getSitiAgriSchemeIds } = require('../../../app/scheme-id/get-siti-agri-scheme-ids')

describe('getSitiAgriSchemeIds', () => {
  test('returns the Siti Agri scheme IDs', () => {
    expect(getSitiAgriSchemeIds()).toEqual(sitiAgriSchemes)
  })
})
