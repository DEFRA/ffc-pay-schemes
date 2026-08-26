const { getSchemeBatchProperties } = require('../../app/get-scheme-batch-properties')
const schemeBatchProperties = require('../../app/constants/scheme-batch-properties')

describe('get scheme batch properties', () => {
  test.each(schemeBatchProperties)(
    'returns the batch properties for schemeId $schemeId',
    (expectedProperties) => {
      expect(getSchemeBatchProperties(expectedProperties.schemeId))
        .toEqual(expectedProperties)
    }
  )

  test('returns undefined for an unknown schemeId', () => {
    expect(getSchemeBatchProperties('unknown-scheme')).toBeUndefined()
  })
})
