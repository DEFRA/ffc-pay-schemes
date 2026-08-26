const delinkedMap = require('../../../app/get-account-code-map/delinked-map')
const ap = require('../../../app/constants/account-codes/ap')
const arAdmin = require('../../../app/constants/account-codes/ar-admin')
const arIrregular = require('../../../app/constants/account-codes/ar-irregular')
const descriptionCodes = require('../../../app/constants/description-codes')

describe('Delinked account code map', () => {
  test('contains the expected account code mappings', () => {
    expect(delinkedMap).toEqual([
      {
        lineCode: descriptionCodes.G00,
        ap: ap.SOS210,
        arAdmin: arAdmin.SOS330,
        arIrregular: arIrregular.SOS310
      },
      {
        lineCode: descriptionCodes.X01,
        ap: ap.SOS471,
        arAdmin: arAdmin.SOS471,
        arIrregular: arIrregular.SOS471
      },
      {
        lineCode: descriptionCodes.X02,
        ap: ap.SOS472,
        arAdmin: arAdmin.SOS472,
        arIrregular: arIrregular.SOS472
      },
      {
        lineCode: descriptionCodes.X03,
        ap: ap.SOS473,
        arAdmin: arAdmin.SOS473,
        arIrregular: arIrregular.SOS473
      },
      {
        lineCode: descriptionCodes.X04,
        ap: ap.SOS474,
        arAdmin: arAdmin.SOS474,
        arIrregular: arIrregular.SOS474
      }
    ])
  })
})
