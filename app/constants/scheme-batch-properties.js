const schemeIds = require('./scheme-ids')

module.exports = Object.freeze([
  {
    schemeId: schemeIds.SFI,
    prefix: 'FFCSFI',
    suffix: ' (SITI_SFI)',
    source: 'SITI_SFI'
  },
  {
    schemeId: schemeIds.SFI_PILOT,
    prefix: 'FFCSFIP',
    suffix: ' (SITISFI)',
    source: 'SITISFI'
  },
  {
    schemeId: schemeIds.LUMP_SUMS,
    prefix: 'FFCLS',
    suffix: ' (LUMP)',
    source: 'SitiLUMP'
  },
  {
    schemeId: schemeIds.VET_VISITS,
    prefix: 'FFCVV',
    suffix: ' (Vet Visits)',
    source: 'AHWR'
  },
  {
    schemeId: schemeIds.CS,
    prefix: 'FFCCS',
    suffix: ' (SITICS)',
    source: 'SITICS'
  },
  {
    schemeId: schemeIds.BPS,
    prefix: 'FFCBPS',
    suffix: ' (SITI)',
    source: 'SITIAgri'
  },
  {
    schemeId: schemeIds.MANUAL,
    prefix: 'FFCManual',
    suffix: ' (Manual)',
    source: 'M_TEMPLATE'
  },
  {
    schemeId: schemeIds.ES,
    prefix: 'FFCES',
    suffix: ' (Genesis)',
    source: 'Genesis'
  },
  {
    schemeId: schemeIds.FC,
    prefix: 'FFCFC',
    suffix: ' (GLOS)',
    source: 'GLOS'
  },
  {
    schemeId: schemeIds.IMPS,
    prefix: 'FFCIMPS',
    suffix: ' (IMPS)',
    source: '04'
  },
  {
    schemeId: schemeIds.SFI23,
    prefix: 'FFCSFIA',
    suffix: ' (SFI_SFIA)',
    source: 'SITI_SFIA'
  },
  {
    schemeId: schemeIds.DELINKED,
    prefix: 'FFCDP',
    suffix: ' (SITIDP)',
    source: 'SITIDP'
  },
  {
    schemeId: schemeIds.SFI_EXPANDED,
    prefix: 'FFCESFIO',
    suffix: ' (SITI_ESFIO)',
    source: 'SITI_ESFIO'
  },
  {
    schemeId: schemeIds.COHT_REVENUE,
    prefix: 'FFCSITICOHTR',
    suffix: ' (SITICOHTR)',
    source: 'SITICOHTR'
  },
  {
    schemeId: schemeIds.COHT_CAPITAL,
    prefix: 'FFCSITICOHTC',
    suffix: ' (SITICOHTC)',
    source: 'SITICOHTC'
  },
  {
    schemeId: schemeIds.FPTT,
    prefix: 'FFCFALS_FPTT',
    suffix: ' (FALS_FPTT)',
    source: 'FALS_FPTT'
  },
  {
    schemeId: schemeIds.WMP,
    prefix: 'FFCFALS_WMP',
    suffix: ' (FALS_WMP)',
    source: 'FALS_WMP'
  }
])
