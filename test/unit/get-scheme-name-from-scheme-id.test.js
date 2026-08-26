jest.mock('../../app/get-schemes', () => ({
  getSchemes: jest.fn()
}))

const { getSchemes } = require('../../app/get-schemes')
const { getSchemeNameFromSchemeId } = require('../../app/get-scheme-name-from-scheme-id')

describe('getSchemeNameFromSchemeId', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns the source system for a matching scheme ID', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source'
      }
    ])

    expect(getSchemeNameFromSchemeId(1)).toBe('Example Scheme')
  })

  test('returns undefined when the scheme ID is not found', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source'
      }
    ])

    expect(getSchemeNameFromSchemeId(2)).toBeUndefined()
  })

  test('returns undefined when no schemes are available', () => {
    getSchemes.mockReturnValue([])

    expect(getSchemeNameFromSchemeId(2)).toBeUndefined()
  })

  test('gets schemes before searching for the source system', () => {
    getSchemes.mockReturnValue([])

    getSchemeNameFromSchemeId(2)

    expect(getSchemes).toHaveBeenCalledTimes(1)
  })
})
