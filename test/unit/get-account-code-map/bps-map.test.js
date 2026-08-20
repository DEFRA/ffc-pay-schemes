const bpsMap = require('../../../app/get-account-code-map/bps-map')
const ap = require('../../../app/constants/account-codes/ap')
const arAdmin = require('../../../app/constants/account-codes/ar-admin')
const arIrregular = require('../../../app/constants/account-codes/ar-irregular')
const descriptionCodes = require('../../../app/constants/description-codes')

const expectedMappings = {
  G00: ['SOS210', 'SOS330', 'SOS310'],
  P01: ['SOS404', 'SOS465', 'SOS445'],
  P02: ['SOS362', 'SOS450', 'SOS430'],
  P03: ['SOS351', 'SOS451', 'SOS431'],
  P04: ['SOS363', 'SOS452', 'SOS432'],
  P05: ['SOS367', 'SOS453', 'SOS433'],
  P06: ['SOS368', 'SOS454', 'SOS434'],
  P07: ['SOS369', 'SOS455', 'SOS435'],
  P08: ['SOS361', 'SOS456', 'SOS436'],
  P09: ['SOS400', 'SOS457', 'SOS437'],
  P10: ['SOS402', 'SOS458', 'SOS438'],
  P11: ['SOS260', 'SOS466', 'SOS446'],
  P12: ['SOS266', 'SOS267', 'SOS268'],
  P13: ['SOS410', 'SOS459', 'SOS439'],
  P14: ['SOS350', 'SOS464', 'SOS444'],
  P15: ['SOS364', 'SOS336', 'SOS316'],
  P16: ['SOS415', 'SOS460', 'SOS440'],
  P17: ['SOS416', 'SOS461', 'SOS441'],
  P18: ['SOS417', 'SOS462', 'SOS442'],
  P19: ['SOS420', 'SOS463', 'SOS443'],
  P20: ['SOS420', 'SOS463', 'SOS443'],
  P21: ['SOS420', 'SOS463', 'SOS443'],
  R00: ['SOS216', 'SOS217', 'SOS218'],
  X01: ['SOS471', 'SOS471', 'SOS471'],
  X02: ['SOS472', 'SOS472', 'SOS472'],
  X03: ['SOS473', 'SOS473', 'SOS473'],
  X04: ['SOS474', 'SOS474', 'SOS474']
}

describe('BPS account code map', () => {
  test('contains all expected line codes', () => {
    expect(bpsMap).toHaveLength(Object.keys(expectedMappings).length)

    expect(bpsMap.map(item => item.lineCode)).toEqual(
      Object.keys(expectedMappings).map(lineCode => descriptionCodes[lineCode])
    )
  })

  test.each(Object.entries(expectedMappings))(
    'returns the correct account codes for %s',
    (lineCode, [apCode, arAdminCode, arIrregularCode]) => {
      expect(bpsMap.find(item => item.lineCode === descriptionCodes[lineCode]))
        .toEqual({
          lineCode: descriptionCodes[lineCode],
          ap: ap[apCode],
          arAdmin: arAdmin[arAdminCode],
          arIrregular: arIrregular[arIrregularCode]
        })
    }
  )
})
