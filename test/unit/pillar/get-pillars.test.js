const { getPillars } = require('../../../app/pillar/get-pillars')
const pillars = require('../../../app/constants/pillars')

describe('getPillars', () => {
  test('returns all pillars', () => {
    expect(getPillars()).toEqual(pillars)
  })
})
