jest.mock('../../../app/constants/scheme-ids', () => ({
  SFI: 1,
  IMPS: 11,
  FPTT: 18
}))

jest.mock('../../../app/constants/sequence-positions', () => ({
  SFI: 6
}))

const {
  getBatchSequenceFromFileName
} = require('../../../app/helpers/get-batch-sequence-from-file-name')

const schemeIds = require('../../../app/constants/scheme-ids')

describe('getBatchSequenceFromFileName', () => {
  test('returns the sequence using the scheme sequence position', () => {
    const fileName = 'prefix12345678.csv'

    expect(
      getBatchSequenceFromFileName(schemeIds.SFI, fileName)
    ).toBe(1234)
  })

  test('returns the IMPS sequence between the final underscore and dot', () => {
    expect(
      getBatchSequenceFromFileName(schemeIds.IMPS, 'IMPS_batch_5678.csv')
    ).toBe(5678)
  })

  test('uses the final underscore for IMPS filenames', () => {
    expect(
      getBatchSequenceFromFileName(
        schemeIds.IMPS,
        'IMPS_batch_previous_4321.csv'
      )
    ).toBe(4321)
  })

  test('throws when the scheme ID is unknown', () => {
    expect(() =>
      getBatchSequenceFromFileName(1000, 'filename.csv')
    ).toThrow('Unknown schemeId: 1000')
  })

  test('throws when the scheme has no sequence position', () => {
    expect(() =>
      getBatchSequenceFromFileName(
        schemeIds.FPTT,
        'filename.csv'
      )
    ).toThrow(`No sequence position found for schemeId: ${schemeIds.FPTT}`)
  })
})
