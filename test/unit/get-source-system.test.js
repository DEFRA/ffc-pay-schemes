jest.mock('../../app/get-schemes', () => ({
  getSchemes: jest.fn()
}))

const { getSchemes } = require('../../app/get-schemes')
const { getSourceSystem } = require('../../app/get-source-system')

describe('getSourceSystem', () => {
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

    expect(getSourceSystem(1)).toBe('Example Source')
  })

  test('returns undefined when the scheme ID is not found', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source'
      }
    ])

    expect(getSourceSystem(2)).toBeUndefined()
  })

  test('returns undefined when no schemes are available', () => {
    getSchemes.mockReturnValue([])

    expect(getSourceSystem(2)).toBeUndefined()
  })

  test('gets schemes before searching for the source system', () => {
    getSchemes.mockReturnValue([])

    getSourceSystem(2)

    expect(getSchemes).toHaveBeenCalledTimes(1)
  })
})
