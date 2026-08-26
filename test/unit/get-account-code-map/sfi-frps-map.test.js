const sfiFrpsMap = require('../../../app/get-account-code-map/sfi-frps-map')
const defaultMap = require('../../../app/get-account-code-map/default-map')
const ap = require('../../../app/constants/account-codes/ap')
const arAdmin = require('../../../app/constants/account-codes/ar-admin')
const arIrregular = require('../../../app/constants/account-codes/ar-irregular')
const descriptionCodes = require('../../../app/constants/description-codes')

describe('SFI FRPS account code map', () => {
  const p02Entry = {
    lineCode: descriptionCodes.P02,
    ap: ap.SOS920,
    arAdmin: arAdmin.SOS940,
    arIrregular: arIrregular.SOS960
  }

  test('contains the complete expected map', () => {
    expect(sfiFrpsMap).toEqual([
      defaultMap[0],
      p02Entry,
      ...defaultMap.slice(1)
    ])
  })

  test.each(defaultMap)('contains default mapping %#', (entry) => {
    expect(sfiFrpsMap).toContainEqual(entry)
  })

  test('contains the P02 mapping', () => {
    expect(sfiFrpsMap).toContainEqual(p02Entry)
  })
})
