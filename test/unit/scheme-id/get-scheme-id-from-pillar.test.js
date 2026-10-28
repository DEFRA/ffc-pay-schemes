jest.mock('../../../app/scheme-properties/get-schemes', () => ({
  getSchemes: jest.fn()
}))

const { getSchemes } = require('../../../app/scheme-properties/get-schemes')
const { getSchemeIdFromPillar } = require('../../../app/scheme-id/get-scheme-id-from-pillar')

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

  test('matches the pillar regardless of case', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 2,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source',
        pillar: 'Example Pillar'
      }
    ])

    expect(getSchemeIdFromPillar('example pillar')).toBe(2)
    expect(getSchemeIdFromPillar('EXAMPLE PILLAR')).toBe(2)
  })

  test('treats nullish pillar values as empty strings when comparing', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 3,
        schemeName: 'Example Scheme',
        sourceSystem: 'Example Source',
        pillar: undefined
      }
    ])

    expect(getSchemeIdFromPillar(undefined)).toBe(3)
    expect(getSchemeIdFromPillar('')).toBe(3)
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
