const { schemeProvidesBatchFiles } = require('../../../app/helpers/scheme-provides-batch-files')

describe('scheme provides batch files', () => {
  test('returns true when the scheme has a file mask', () => {
    expect(schemeProvidesBatchFiles(1)).toBe(true)
  })

  test('returns false when the known scheme has no file mask', () => {
    expect(schemeProvidesBatchFiles(4)).toBe(false)
  })

  test('accepts a numeric scheme ID passed as a string', () => {
    expect(schemeProvidesBatchFiles('1')).toBe(true)
  })

  test('throws when the scheme ID is unknown', () => {
    expect(() => schemeProvidesBatchFiles(999)).toThrow('Unknown scheme ID: 999')
  })
})
