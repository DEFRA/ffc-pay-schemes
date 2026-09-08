jest.mock('../../../app/constants/schemes', () => [
  {
    schemeId: 1,
    fileMask: {
      test: jest.fn((fileName) => fileName === 'sfi-batch.csv')
    }
  },
  {
    schemeId: 2,
    fileMask: {
      test: jest.fn((fileName) => fileName === 'pilot-batch.csv')
    }
  },
  {
    schemeId: 3
  }
])

const schemes = require('../../../app/constants/schemes')
const {
  getSchemeFromBatchFileName
} = require('../../../app/scheme-properties/get-scheme-from-batch-file-name')

describe('getSchemeFromBatchFileName', () => {
  test('returns the first matching scheme', () => {
    expect(
      getSchemeFromBatchFileName('pilot-batch.csv')
    ).toBe(schemes[1])
  })

  test('skips schemes without a file mask', () => {
    expect(
      getSchemeFromBatchFileName('unknown-batch.csv')
    ).toBeUndefined()

    expect(schemes[0].fileMask.test).toHaveBeenCalledWith('unknown-batch.csv')
    expect(schemes[1].fileMask.test).toHaveBeenCalledWith('unknown-batch.csv')
  })

  test('returns undefined when no file mask matches', () => {
    expect(
      getSchemeFromBatchFileName('unknown-batch.csv')
    ).toBeUndefined()
  })

  test('stops checking after finding a match', () => {
    getSchemeFromBatchFileName('sfi-batch.csv')

    expect(schemes[1].fileMask.test).not.toHaveBeenCalledWith('sfi-batch.csv')
  })
})
