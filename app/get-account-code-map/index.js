const {
  SFI,
  SFI_PILOT,
  LUMP_SUMS,
  VET_VISITS,
  CS,
  BPS,
  SFI23,
  DELINKED,
  SFI_EXPANDED,
  COHT_REVENUE,
  COHT_CAPITAL,
  FPTT,
  WMP
} = require('../constants/scheme-ids')

const defaultMap = require('./default-map')
const sfiFrpsMap = require('./sfi-frps-map')
const lumpSumsMap = require('./lump-sums-map')
const vetVisitsMap = require('./vet-visits-map')
const csMap = require('./cs-map')
const bpsMap = require('./bps-map')
const delinkedMap = require('./delinked-map')
const cohtcMap = require('./cohtc-map')

const schemeMap = new Map([
  [SFI, sfiFrpsMap],
  [SFI_PILOT, sfiFrpsMap],
  [SFI23, sfiFrpsMap],
  [SFI_EXPANDED, sfiFrpsMap],
  [LUMP_SUMS, lumpSumsMap],
  [VET_VISITS, vetVisitsMap],
  [CS, csMap],
  [BPS, bpsMap],
  [DELINKED, delinkedMap],
  [COHT_REVENUE, defaultMap],
  [COHT_CAPITAL, cohtcMap],
  [FPTT, sfiFrpsMap],
  [WMP, sfiFrpsMap]
])

const getAccountCodeMap = (schemeId) => {
  if (!schemeId) {
    throw new Error('schemeId is required')
  }

  const mapForScheme = schemeMap.get(schemeId)
  if (mapForScheme) {
    return mapForScheme
  }

  throw new Error(`No account codes found for scheme ${schemeId}`)
}

module.exports = {
  getAccountCodeMap
}
