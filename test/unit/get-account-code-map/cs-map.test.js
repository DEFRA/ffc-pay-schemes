const csMap = require('../../../app/get-account-code-map/cs-map')
const ap = require('../../../app/constants/account-codes/ap')
const arAdmin = require('../../../app/constants/account-codes/ar-admin')
const arIrregular = require('../../../app/constants/account-codes/ar-irregular')
const descriptionCodes = require('../../../app/constants/description-codes')

const expectedMappings = [
  ['G00', 'SOS710', 'SOS750', 'SOS770', true, true, false],
  ['G00', 'SOS228', 'SOS352', 'SOS352', true, true, true],
  ['G00', 'SOS229', 'SOS352', 'SOS352', true, true, true],
  ['P02', 'SOS929', 'SOS949', 'SOS969', true, false, false],
  ['P02', 'SOS928', 'SOS948', 'SOS968', false, true, false],
  ['P02', 'SOS231', 'SOS553', 'SOS553', true, true, true],
  ['P05', 'SOS921', 'SOS941', 'SOS961', true, true, false],
  ['P05', 'SOS233', 'SOS555', 'SOS555', true, true, true],
  ['P06', 'SOS922', 'SOS942', 'SOS962', true, true, false],
  ['P06', 'SOS234', 'SOS556', 'SOS556', true, true, true],
  ['P08', 'SOS923', 'SOS943', 'SOS963', true, true, false],
  ['P08', 'SOS239', 'SOS557', 'SOS557', true, true, true],
  ['P14', 'SOS924', 'SOS944', 'SOS964', true, true, false],
  ['P14', 'SOS236', 'SOS558', 'SOS558', true, true, true],
  ['P22', 'SOS925', 'SOS945', 'SOS965', true, true, false],
  ['P22', 'SOS237', 'SOS559', 'SOS559', true, true, true],
  ['P23', 'SOS926', 'SOS946', 'SOS966', true, true, false],
  ['P23', 'SOS238', 'SOS560', 'SOS560', true, true, true],
  ['P24', 'SOS920', 'SOS940', 'SOS960', true, false, false],
  ['P24', 'SOS927', 'SOS947', 'SOS967', false, true, false],
  ['P24', 'SOS232', 'SOS554', 'SOS554', true, true, true]
]

describe('CS account code map', () => {
  test('contains all expected mappings', () => {
    const expected = expectedMappings.map(
      ([lineCode, apCode, arAdminCode, arIrregularCode, capital, revenue, stateAid]) => ({
        lineCode: descriptionCodes[lineCode],
        ap: ap[apCode],
        arAdmin: arAdmin[arAdminCode],
        arIrregular: arIrregular[arIrregularCode],
        capital,
        revenue,
        stateAid
      })
    )

    expect(csMap).toEqual(expected)
  })

  test.each(expectedMappings)(
    'contains the expected mapping for %s',
    (lineCode, apCode, arAdminCode, arIrregularCode, capital, revenue, stateAid) => {
      expect(csMap).toContainEqual({
        lineCode: descriptionCodes[lineCode],
        ap: ap[apCode],
        arAdmin: arAdmin[arAdminCode],
        arIrregular: arIrregular[arIrregularCode],
        capital,
        revenue,
        stateAid
      })
    }
  )
})
