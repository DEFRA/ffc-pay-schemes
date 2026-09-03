jest.mock('../../../app/scheme-properties/get-schemes', () => ({
  getSchemes: jest.fn()
}))

const { getSchemes } = require('../../../app/scheme-properties/get-schemes')
const { getSchemeIdFromSourceSystem } = require('../../../app/scheme-id/get-scheme-id-from-source-system')

describe('getSchemeIdFromSourceSystem', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns the schemeId for a matching source system', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source'
      }
    ])

    expect(getSchemeIdFromSourceSystem('Example Source')).toBe(1)
  })

  test('returns undefined when the source system is not found', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source'
      }
    ])

    expect(getSchemeIdFromSourceSystem('Not a real source')).toBeUndefined()
  })

  test('returns undefined when no schemes are available', () => {
    getSchemes.mockReturnValue([])

    expect(getSchemeIdFromSourceSystem('Not a real source')).toBeUndefined()
  })

  test('gets schemes before searching for the source system', () => {
    getSchemes.mockReturnValue([])

    getSchemeIdFromSourceSystem('Not a real source')

    expect(getSchemes).toHaveBeenCalledTimes(1)
  })
})
