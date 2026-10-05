const { sitiAgriSchemes } = require('../../')

describe('tests existing siti Agri scheme exports', () => {
  test('exports the Siti Agri scheme IDs', () => {
    expect(sitiAgriSchemes).toEqual([
      1, 2, 3, 5, 6, 12, 13, 14, 15, 16, 19
    ])
  })
})