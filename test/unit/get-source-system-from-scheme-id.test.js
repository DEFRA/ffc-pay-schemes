jest.mock('../../app/get-schemes', () => ({
  getSchemes: jest.fn()
}))

const { getSchemes } = require('../../app/get-schemes')
const { getSourceSystemFromSchemeId } = require('../../app/get-source-system-from-scheme-id')

describe('getSourceSystemFromSchemeId', () => {
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

    expect(getSourceSystemFromSchemeId(1)).toBe('Example Source')
  })

  test('returns undefined when the scheme ID is not found', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source'
      }
    ])

    expect(getSourceSystemFromSchemeId(2)).toBeUndefined()
  })

  test('returns undefined when no schemes are available', () => {
    getSchemes.mockReturnValue([])

    expect(getSourceSystemFromSchemeId(2)).toBeUndefined()
  })

  test('gets schemes before searching for the source system', () => {
    getSchemes.mockReturnValue([])

    getSourceSystemFromSchemeId(2)

    expect(getSchemes).toHaveBeenCalledTimes(1)
  })
})
