const { getSchemeProperties } = require('../../app/get-scheme-properties')
const schemes = require('../../app/constants/schemes')
const { MANUAL } = require('../../app/constants/scheme-ids')

describe('getSchemeProperties', () => {
  test.each(schemes)(
    'returns the properties for schemeId $schemeId',
    (expectedScheme) => {
      expect(getSchemeProperties(expectedScheme.schemeId))
        .toEqual(expectedScheme)
    }
  )

  test.each(schemes)(
    'returns the properties for schemeId $schemeId, even if sourceSystem does not match',
    (expectedScheme) => {
      expect(getSchemeProperties(expectedScheme.schemeId, 'made up source system'))
        .toEqual(expectedScheme)
    }
  )

  test.each(schemes)(
    'returns the properties for sourceSystem $sourceSystem when schemeId is not present',
    (expectedScheme) => {
      expect(getSchemeProperties(null, expectedScheme.sourceSystem))
        .toEqual(expectedScheme)
    }
  )

  test('throws an error for an unknown schemeId and sourceSystem', () => {
    expect(() => getSchemeProperties('unknown-scheme', 'unknown-source'))
      .toThrow('Scheme with ID unknown-scheme, sourceSystem unknown-source not found')
  })

  test('uses the pillar delivery body and fund code for a manual scheme', () => {
    const manualScheme = schemes.find(scheme => scheme.schemeId === MANUAL)
    const pillarScheme = schemes.find(scheme => scheme.pillar)

    expect(getSchemeProperties(MANUAL, null, pillarScheme.pillar))
      .toEqual({
        ...manualScheme,
        pillar: pillarScheme.pillar,
        deliveryBody: pillarScheme.deliveryBody,
        fundCode: pillarScheme.fundCode
      })
  })

  test('returns the manual scheme unchanged for an unknown pillar', () => {
    const manualScheme = schemes.find(scheme => scheme.schemeId === MANUAL)

    expect(getSchemeProperties(MANUAL, null, 'unknown-pillar'))
      .toEqual(manualScheme)
  })
})
