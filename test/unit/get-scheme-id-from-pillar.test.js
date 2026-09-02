jest.mock('../../app/get-schemes', () => ({
  getSchemes: jest.fn()
}))

const { getSchemes } = require('../../app/get-schemes')
const { getSchemeIdFromPillar } = require('../../app/get-scheme-id-from-pillar')

describe('getSchemeIdFromPillar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns the schemeId for a matching pillar', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source',
        pillar: 'Example Pillar'
      }
    ])

    expect(getSchemeIdFromPillar('Example Pillar')).toBe(1)
  })

  test('returns undefined when the pillar is not found', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source',
        pillar: 'Example Pillar'
      }
    ])

    expect(getSchemeIdFromPillar('Not a real pillar')).toBeUndefined()
  })

  test('returns undefined when no schemes are available', () => {
    getSchemes.mockReturnValue([])

    expect(getSchemeIdFromPillar('Not a real source')).toBeUndefined()
  })

  test('gets schemes before searching for the pillar', () => {
    getSchemes.mockReturnValue([])

    getSchemeIdFromPillar('Not a real source')

    expect(getSchemes).toHaveBeenCalledTimes(1)
  })
})
