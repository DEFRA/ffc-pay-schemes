const vetVisitsMap = require('../../../app/get-account-code-map/vet-visits-map')
const ap = require('../../../app/constants/account-codes/ap')
const arAdmin = require('../../../app/constants/account-codes/ar-admin')
const arIrregular = require('../../../app/constants/account-codes/ar-irregular')
const descriptionCodes = require('../../../app/constants/description-codes')

describe('Vet Visits account code map', () => {
  test('contains the expected mapping', () => {
    expect(vetVisitsMap).toEqual([{
      lineCode: descriptionCodes.G00,
      ap: ap.SOS210,
      arAdmin: arAdmin.SOS330,
      arIrregular: arIrregular.SOS310
    }])
  })
})
