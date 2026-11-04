jest.mock('../../../app/scheme-properties/get-scheme-properties', () => ({
  getSchemeProperties: jest.fn()
}))

const { getFundCodeFromSchemeId } = require('../../../app/helpers/get-fund-code-from-scheme-id')
const { getSchemeProperties } = require('../../../app/scheme-properties/get-scheme-properties')

describe('getFundCodeFromSchemeId', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns the fundCode for the matching scheme id', () => {
    getSchemeProperties.mockReturnValue({
      fundCode: 'DOM00'
    })

    const result = getFundCodeFromSchemeId(1)

    expect(getSchemeProperties).toHaveBeenCalledWith(1)
    expect(result).toBe('DOM00')
  })

  test('returns undefined when no scheme properties are found', () => {
    getSchemeProperties.mockReturnValue(undefined)

    const result = getFundCodeFromSchemeId(99)

    expect(getSchemeProperties).toHaveBeenCalledWith(99)
    expect(result).toBeUndefined()
  })

  test('returns undefined when fundCode is missing from scheme properties', () => {
    getSchemeProperties.mockReturnValue({
      name: 'No fund code here'
    })

    const result = getFundCodeFromSchemeId(29)

    expect(result).toBeUndefined()
  })
})
