const { getSourceSystems } = require('../../../app/source-system/get-source-systems')
const sourceSystems = require('../../../app/constants/source-systems')

describe('getSourceSystems', () => {
  test('returns all source systems', () => {
    expect(getSourceSystems()).toEqual(sourceSystems)
  })
})
