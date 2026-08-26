const cohtcMap = require('../../../app/get-account-code-map/cohtc-map')
const ap = require('../../../app/constants/account-codes/ap')
const arAdmin = require('../../../app/constants/account-codes/ar-admin')
const arIrregular = require('../../../app/constants/account-codes/ar-irregular')
const descriptionCodes = require('../../../app/constants/description-codes')

describe('COHTC account code map', () => {
  test.each([
    ['G00', 'SOS710', 'SOS750', 'SOS770'],
    ['P02', 'SOS920', 'SOS940', 'SOS960'],
    ['P24', 'SOS929', 'SOS949', 'SOS969']
  ])(
    'returns the correct account codes for %s',
    (lineCode, apCode, arAdminCode, arIrregularCode) => {
      expect(cohtcMap).toContainEqual({
        lineCode: descriptionCodes[lineCode],
        ap: ap[apCode],
        arAdmin: arAdmin[arAdminCode],
        arIrregular: arIrregular[arIrregularCode]
      })
    }
  )

  test('contains exactly the expected mappings', () => {
    expect(cohtcMap).toHaveLength(3)
    expect(cohtcMap.map(item => item.lineCode)).toEqual([
      descriptionCodes.G00,
      descriptionCodes.P02,
      descriptionCodes.P24
    ])
  })
})
