const { MANUAL, SFI } = require('../../../app/constants/scheme-ids')
const { DA, SFI: SFI_PILLAR } = require('../../../app/constants/pillars')
const manualSources = require('../../../app/constants/manual-sources')
const { getJournalSourceFromPillar } = require('../../../app/helpers/get-journal-source-from-pillar')

describe('getJournalSourceFromPillar', () => {
  test('returns the source for non-manual schemes', () => {
    expect(getJournalSourceFromPillar(SFI, 'SOURCE', DA)).toBe('SOURCE')
  })

  test('returns the manual source for a matching pillar', () => {
    expect(getJournalSourceFromPillar(MANUAL, 'SOURCE', DA))
      .toBe(manualSources[DA])
  })

  test('returns the manual source for the SFI pillar', () => {
    expect(getJournalSourceFromPillar(MANUAL, 'SOURCE', SFI_PILLAR))
      .toBe(manualSources[SFI_PILLAR])
  })

  test('returns the original source when the pillar has no manual source', () => {
    expect(getJournalSourceFromPillar(MANUAL, 'SOURCE', 'UNKNOWN'))
      .toBe('SOURCE')
  })
})
