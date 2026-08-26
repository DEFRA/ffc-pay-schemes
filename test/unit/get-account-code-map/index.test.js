const { getAccountCodeMap } = require('../../../app/get-account-code-map')
const schemeIds = require('../../../app/constants/scheme-ids')

const defaultMap = require('../../../app/get-account-code-map/default-map')
const sfiFrpsMap = require('../../../app/get-account-code-map/sfi-frps-map')
const lumpSumsMap = require('../../../app/get-account-code-map/lump-sums-map')
const vetVisitsMap = require('../../../app/get-account-code-map/vet-visits-map')
const csMap = require('../../../app/get-account-code-map/cs-map')
const bpsMap = require('../../../app/get-account-code-map/bps-map')
const delinkedMap = require('../../../app/get-account-code-map/delinked-map')
const cohtcMap = require('../../../app/get-account-code-map/cohtc-map')

const expectedMaps = {
  SFI: sfiFrpsMap,
  SFI_PILOT: sfiFrpsMap,
  LUMP_SUMS: lumpSumsMap,
  VET_VISITS: vetVisitsMap,
  CS: csMap,
  BPS: bpsMap,
  SFI23: sfiFrpsMap,
  DELINKED: delinkedMap,
  SFI_EXPANDED: sfiFrpsMap,
  COHT_REVENUE: defaultMap,
  COHT_CAPITAL: cohtcMap,
  FPTT: sfiFrpsMap,
  WMP: sfiFrpsMap
}

describe('getAccountCodeMap', () => {
  test.each(Object.entries(expectedMaps))(
    'returns the correct map for %s',
    (schemeKey, expectedMap) => {
      expect(getAccountCodeMap(schemeIds[schemeKey])).toBe(expectedMap)
    }
  )

  test.each(['MANUAL', 'ES', 'FC', 'IMPS'])(
    'throws an error for the unmapped %s scheme',
    (schemeKey) => {
      expect(() => getAccountCodeMap(schemeIds[schemeKey]))
        .toThrow(`No account codes found for scheme ${schemeIds[schemeKey]}`)
    }
  )

  test('throws an error when schemeId is not provided', () => {
    expect(() => getAccountCodeMap()).toThrow('schemeId is required')
  })

  test('throws an error for an unknown schemeId', () => {
    expect(() => getAccountCodeMap(999))
      .toThrow('No account codes found for scheme 999')
  })
})
