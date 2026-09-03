jest.mock('../../../app/helpers/is-frps', () => ({
  isFRPS: jest.fn()
}))

const { BPS, DELINKED, CS } = require('../../../app/constants/scheme-ids')
const { isFRPS } = require('../../../app/helpers/is-frps')
const { getReportingDataFilter } = require('../../../app/helpers/get-reporting-data-filter')

describe('getReportingDataFilter', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns marketing year for BPS', () => {
    expect(getReportingDataFilter(BPS)).toEqual(['marketingYear'])
  })

  test('returns marketing year for DELINKED', () => {
    expect(getReportingDataFilter(DELINKED)).toEqual(['marketingYear'])
  })

  test('returns contract number for CS', () => {
    expect(getReportingDataFilter(CS)).toEqual(['contractNumber'])
  })

  test('returns the FRPS filter including correlation ID', () => {
    isFRPS.mockReturnValue(true)

    expect(getReportingDataFilter('frps-scheme')).toEqual([
      'marketingYear',
      'agreementNumber',
      'correlationId'
    ])
  })

  test('returns the default filter for non-FRPS schemes', () => {
    isFRPS.mockReturnValue(false)

    expect(getReportingDataFilter('unknown-scheme')).toEqual([
      'marketingYear',
      'agreementNumber'
    ])
  })
})
