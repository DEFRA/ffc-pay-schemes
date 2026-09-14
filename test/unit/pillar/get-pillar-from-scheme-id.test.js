jest.mock('../../../app/scheme-properties/get-schemes', () => ({
  getSchemes: jest.fn()
}))

const { UNKNOWN } = require('../../../app/constants/unknown')
const { getSchemes } = require('../../../app/scheme-properties/get-schemes')
const { getPillarFromSchemeId } = require('../../../app/pillar/get-pillar-from-scheme-id')

describe('getPillarFromSchemeId', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns the pillar for a matching scheme ID', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        pillar: 'Example Pillar'
      }
    ])

    expect(getPillarFromSchemeId(1)).toBe('Example Pillar')
  })

  test('returns unknown when the scheme ID is not found', () => {
    getSchemes.mockReturnValue([
      {
        schemeId: 1,
        schemeName: 'Example Scheme',
        pillar: 'Example Pillar'
      }
    ])

    expect(getPillarFromSchemeId(2)).toBe(UNKNOWN)
  })

  test('returns unknown when no schemes are available', () => {
    getSchemes.mockReturnValue([])

    expect(getPillarFromSchemeId(2)).toBe(UNKNOWN)
  })

  test('gets schemes before searching for the pillar', () => {
    getSchemes.mockReturnValue([])

    getPillarFromSchemeId(2)

    expect(getSchemes).toHaveBeenCalledTimes(1)
  })
})
