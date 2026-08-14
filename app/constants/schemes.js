const schemeIds = require('./scheme-ids')
const sourceSystems = require('./source-systems')
const pillars = require('./pillars')
const { RP00, NE00, FC00, RP10 } = require('./delivery-bodies')
const { DRD10, DOM10, ERD14, EGF00, EXQ00, DOM00 } = require('./fund-codes')
const { useInvoiceNumberAsIs, createStandardSchemeInvoiceNumber, createSitiAgriInvoiceNumber, createESInvoiceNumber, createIMPSInvoiceNumber, createDefaultInvoiceNumber } = require('../helpers/invoice-numbers')

module.exports = Object.freeze([
  {
    schemeId: schemeIds.SFI,
    sourceSystem: sourceSystems.SFI,
    pillar: pillars.SFI,
    deliveryBody: RP00,
    fundCode: DRD10,
    providesAccountingValues: false,
    createInvoiceNumber: createSitiAgriInvoiceNumber
  },
  {
    schemeId: schemeIds.SFI_PILOT,
    sourceSystem: sourceSystems.SFI_PILOT,
    pillar: pillars.SFI_PILOT,
    deliveryBody: RP00,
    fundCode: DRD10,
    providesAccountingValues: false,
    createInvoiceNumber: createSitiAgriInvoiceNumber
  },
  {
    schemeId: schemeIds.LUMP_SUMS,
    sourceSystem: sourceSystems.LUMP_SUMS,
    pillar: pillars.LUMP_SUMS,
    deliveryBody: RP00,
    fundCode: DOM10,
    providesAccountingValues: false,
    createInvoiceNumber: createSitiAgriInvoiceNumber
  },
  {
    schemeId: schemeIds.VET_VISITS,
    sourceSystem: sourceSystems.VET_VISITS,
    pillar: pillars.VET_VISITS,
    deliveryBody: RP00,
    fundCode: DOM10,
    providesAccountingValues: false,
    createInvoiceNumber: createDefaultInvoiceNumber
  },
  {
    schemeId: schemeIds.CS,
    sourceSystem: sourceSystems.CS,
    pillar: pillars.CS,
    deliveryBody: NE00,
    fundCode: ERD14,
    providesAccountingValues: false,
    createInvoiceNumber: createSitiAgriInvoiceNumber
  },
  {
    schemeId: schemeIds.BPS,
    sourceSystem: sourceSystems.BPS,
    pillar: pillars.BPS,
    deliveryBody: RP00,
    fundCode: EGF00,
    providesAccountingValues: false,
    createInvoiceNumber: createSitiAgriInvoiceNumber
  },
  {
    schemeId: schemeIds.MANUAL,
    sourceSystem: sourceSystems.MANUAL,
    pillar: undefined,
    deliveryBody: RP00,
    fundCode: DRD10,
    providesAccountingValues: false,
    createInvoiceNumber: useInvoiceNumberAsIs
  },
  {
    schemeId: schemeIds.ES,
    sourceSystem: sourceSystems.ES,
    pillar: pillars.ES,
    deliveryBody: NE00,
    fundCode: EXQ00,
    providesAccountingValues: false,
    createInvoiceNumber: createESInvoiceNumber
  },
  {
    schemeId: schemeIds.FC,
    sourceSystem: sourceSystems.FC,
    pillar: pillars.FC,
    deliveryBody: FC00,
    fundCode: DOM00,
    providesAccountingValues: false,
    createInvoiceNumber: useInvoiceNumberAsIs
  },
  {
    schemeId: schemeIds.IMPS,
    sourceSystem: sourceSystems.IMPS,
    pillar: pillars.IMPS,
    deliveryBody: RP00,
    fundCode: DOM00,
    providesAccountingValues: false,
    createInvoiceNumber: createIMPSInvoiceNumber
  },
  {
    schemeId: schemeIds.SFI23,
    sourceSystem: sourceSystems.SFI23,
    pillar: pillars.SFI23,
    deliveryBody: RP00,
    fundCode: DRD10,
    providesAccountingValues: false,
    createInvoiceNumber: createSitiAgriInvoiceNumber
  },
  {
    schemeId: schemeIds.DELINKED,
    sourceSystem: sourceSystems.DELINKED,
    pillar: pillars.DELINKED,
    deliveryBody: RP00,
    fundCode: DOM10,
    providesAccountingValues: false,
    createInvoiceNumber: createStandardSchemeInvoiceNumber
  },
  {
    schemeId: schemeIds.SFI_EXPANDED,
    sourceSystem: sourceSystems.SFI_EXPANDED,
    pillar: pillars.SFI_EXPANDED,
    deliveryBody: RP00,
    fundCode: DRD10,
    providesAccountingValues: false,
    createInvoiceNumber: createStandardSchemeInvoiceNumber
  },
  {
    schemeId: schemeIds.COHT_REVENUE,
    sourceSystem: sourceSystems.COHT_REVENUE,
    pillar: pillars.COHT_REVENUE,
    deliveryBody: RP00,
    fundCode: DRD10,
    providesAccountingValues: false,
    createInvoiceNumber: createStandardSchemeInvoiceNumber
  },
  {
    schemeId: schemeIds.COHT_CAPITAL,
    sourceSystem: sourceSystems.COHT_CAPITAL,
    pillar: pillars.COHT_CAPITAL,
    deliveryBody: RP00,
    fundCode: DRD10,
    providesAccountingValues: false,
    createInvoiceNumber: createStandardSchemeInvoiceNumber
  },
  {
    schemeId: schemeIds.FPTT,
    sourceSystem: sourceSystems.FPTT,
    pillar: pillars.FPTT,
    deliveryBody: RP00,
    fundCode: DRD10,
    providesAccountingValues: true,
    createInvoiceNumber: useInvoiceNumberAsIs
  },
  {
    schemeId: schemeIds.WMP,
    sourceSystem: sourceSystems.WMP,
    pillar: pillars.WMP,
    deliveryBody: RP10,
    fundCode: DRD10,
    providesAccountingValues: true,
    createInvoiceNumber: useInvoiceNumberAsIs
  }
])
