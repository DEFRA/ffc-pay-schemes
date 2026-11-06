const schemeIds = require('./scheme-ids')

module.exports = Object.freeze([
  {
    schemeId: schemeIds.SFI,
    prefix: 'SFI',
    suffix: ' (SITI_SFI)',
    source: 'SITI_SFI'
  },
  {
    schemeId: schemeIds.SFI_PILOT,
    prefix: 'SFIP',
    suffix: ' (SITISFI)',
    source: 'SITISFI'
  },
  {
    schemeId: schemeIds.LUMP_SUMS,
    prefix: 'LS',
    suffix: ' (LUMP)',
    source: 'SitiLUMP'
  },
  {
    schemeId: schemeIds.VET_VISITS,
    prefix: 'VV',
    suffix: ' (Vet Visits)',
    source: 'AHWR'
  },
  {
    schemeId: schemeIds.CS,
    prefix: 'CS',
    suffix: ' (SITICS)',
    source: 'SITICS'
  },
  {
    schemeId: schemeIds.BPS,
    prefix: 'BPS',
    suffix: ' (SITI)',
    source: 'SITIAgri'
  },
  {
    schemeId: schemeIds.MANUAL,
    prefix: 'Manual',
    suffix: ' (Manual)',
    source: 'M_TEMPLATE'
  },
  {
    schemeId: schemeIds.ES,
    prefix: 'ES',
    suffix: ' (Genesis)',
    source: 'Genesis'
  },
  {
    schemeId: schemeIds.FC,
    prefix: 'FC',
    suffix: ' (GLOS)',
    source: 'GLOS'
  },
  {
    schemeId: schemeIds.IMPS,
    prefix: 'IMPS',
    suffix: ' (IMPS)',
    source: '04'
  },
  {
    schemeId: schemeIds.SFI23,
    prefix: 'SFIA',
    suffix: ' (SFI_SFIA)',
    source: 'SITI_SFIA'
  },
  {
    schemeId: schemeIds.DELINKED,
    prefix: 'DP',
    suffix: ' (SITIDP)',
    source: 'SITIDP'
  },
  {
    schemeId: schemeIds.SFI_EXPANDED,
    prefix: 'ESFIO',
    suffix: ' (SITI_ESFIO)',
    source: 'SITI_ESFIO'
  },
  {
    schemeId: schemeIds.COHT_REVENUE,
    prefix: 'SITICOHTR',
    suffix: ' (SITICOHTR)',
    source: 'SITICOHTR'
  },
  {
    schemeId: schemeIds.COHT_CAPITAL,
    prefix: 'SITICOHTC',
    suffix: ' (SITICOHTC)',
    source: 'SITICOHTC'
  },
  {
    schemeId: schemeIds.FPTT,
    prefix: 'FALS_FPTT',
    suffix: ' (FALS_FPTT)',
    source: 'FALS_FPTT'
  },
  {
    schemeId: schemeIds.WMP,
    prefix: 'FALS_WMP',
    suffix: ' (FALS_WMP)',
    source: 'FALS_WMP'
  },
  {
    schemeId: schemeIds.SFI26,
    prefix: 'SITISFI26',
    suffix: ' (SITISFI26)',
    source: 'SITISFI26'
  }
])
