const lumpSumsMap = require('../../../app/get-account-code-map/lump-sums-map')
const ap = require('../../../app/constants/account-codes/ap')
const arAdmin = require('../../../app/constants/account-codes/ar-admin')
const arIrregular = require('../../../app/constants/account-codes/ar-irregular')
const descriptionCodes = require('../../../app/constants/description-codes')

describe('Lump Sums account code map', () => {
  test('contains the expected mapping', () => {
    expect(lumpSumsMap).toEqual([{
      lineCode: descriptionCodes.G00,
      ap: ap.SOS210,
      arAdmin: arAdmin.SOS330,
      arIrregular: arIrregular.SOS310
    }])
  })
})
