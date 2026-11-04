jest.mock('../../../app/scheme-properties/get-scheme-properties', () => ({
  getSchemeProperties: jest.fn()
}))

const { getDeliveryBodyFromSchemeId } = require('../../../app/helpers/get-delivery-body-from-scheme-id')
const { getSchemeProperties } = require('../../../app/scheme-properties/get-scheme-properties')

describe('getDeliveryBodyFromSchemeId', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns the deliveryBody for the matching scheme id', () => {
    getSchemeProperties.mockReturnValue({
      deliveryBody: 'RP00'
    })

    const result = getDeliveryBodyFromSchemeId(1)

    expect(getSchemeProperties).toHaveBeenCalledWith(1)
    expect(result).toBe('RP00')
  })

  test('returns undefined when no scheme properties are found', () => {
    getSchemeProperties.mockReturnValue(undefined)

    const result = getDeliveryBodyFromSchemeId(99)

    expect(getSchemeProperties).toHaveBeenCalledWith(99)
    expect(result).toBeUndefined()
  })

  test('returns undefined when deliveryBody is missing from scheme properties', () => {
    getSchemeProperties.mockReturnValue({
      name: 'No delivery body here'
    })

    const result = getDeliveryBodyFromSchemeId(29)

    expect(result).toBeUndefined()
  })
})
