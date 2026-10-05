const { getSitiAgriSchemeIds, sitiAgriSchemes } = require('../../')

describe('package exports', () => {
  test('exports the Siti Agri scheme IDs and getter', () => {
    expect(sitiAgriSchemes).toEqual(getSitiAgriSchemeIds())
  })
})
