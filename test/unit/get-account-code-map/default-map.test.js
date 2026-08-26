const defaultMap = require('../../../app/get-account-code-map/default-map')
const ap = require('../../../app/constants/account-codes/ap')
const arAdmin = require('../../../app/constants/account-codes/ar-admin')
const arIrregular = require('../../../app/constants/account-codes/ar-irregular')
const descriptionCodes = require('../../../app/constants/description-codes')

describe('default account code map', () => {
  test('contains the expected account code mappings', () => {
    expect(defaultMap).toEqual([
      {
        lineCode: descriptionCodes.G00,
        ap: ap.SOS710,
        arAdmin: arAdmin.SOS750,
        arIrregular: arIrregular.SOS770
      },
      {
        lineCode: descriptionCodes.P05,
        ap: ap.SOS921,
        arAdmin: arAdmin.SOS941,
        arIrregular: arIrregular.SOS961
      },
      {
        lineCode: descriptionCodes.P06,
        ap: ap.SOS922,
        arAdmin: arAdmin.SOS942,
        arIrregular: arIrregular.SOS962
      },
      {
        lineCode: descriptionCodes.P08,
        ap: ap.SOS923,
        arAdmin: arAdmin.SOS943,
        arIrregular: arIrregular.SOS963
      },
      {
        lineCode: descriptionCodes.P14,
        ap: ap.SOS924,
        arAdmin: arAdmin.SOS944,
        arIrregular: arIrregular.SOS964
      },
      {
        lineCode: descriptionCodes.P22,
        ap: ap.SOS925,
        arAdmin: arAdmin.SOS945,
        arIrregular: arIrregular.SOS965
      },
      {
        lineCode: descriptionCodes.P23,
        ap: ap.SOS926,
        arAdmin: arAdmin.SOS946,
        arIrregular: arIrregular.SOS966
      },
      {
        lineCode: descriptionCodes.P24,
        ap: ap.SOS927,
        arAdmin: arAdmin.SOS947,
        arIrregular: arIrregular.SOS967
      }
    ])
  })
})
