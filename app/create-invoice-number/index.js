const { MANUAL: MANUAL_SOURCE } = require('../constants/source-systems')
const { MANUAL, FC, FPTT, WMP, DELINKED, SFI_EXPANDED, COHT_REVENUE, COHT_CAPITAL, SFI, SFI_PILOT, LUMP_SUMS, CS, BPS, SFI23, ES, IMPS } = require('../constants/scheme-ids')
const { createStandardSchemeInvoiceNumber } = require('./create-standard-scheme-invoice-number')
const { createSitiAgriInvoiceNumber } = require('./create-siti-agri-invoice-number')
const { createESInvoiceNumber } = require('./create-es-invoice-number')
const { createIMPSInvoiceNumber } = require('./create-imps-invoice-number')
const { createDefaultInvoiceNumber } = require('./create-default-invoice-number')

const createInvoiceNumber = (paymentRequest) => {
  try {
    const schemesWithAcceptedInvoiceNumbers = new Set([MANUAL, FC, FPTT, WMP])
    if (schemesWithAcceptedInvoiceNumbers.has(paymentRequest.schemeId) || paymentRequest?.sourceSystem === MANUAL_SOURCE) {
      return paymentRequest.invoiceNumber
    }
    const standardSchemeInvoices = new Set([DELINKED, SFI_EXPANDED, COHT_REVENUE, COHT_CAPITAL])
    if (standardSchemeInvoices.has(paymentRequest.schemeId)) {
      return createStandardSchemeInvoiceNumber(paymentRequest)
    }
    const sitiAgriSchemeInvoices = new Set([SFI, SFI_PILOT, LUMP_SUMS, CS, BPS, SFI23])
    if (sitiAgriSchemeInvoices.has(paymentRequest.schemeId)) {
      return createSitiAgriInvoiceNumber(paymentRequest)
    }
    switch (paymentRequest.schemeId) {
      case ES:
        return createESInvoiceNumber(paymentRequest)
      case IMPS:
        return createIMPSInvoiceNumber(paymentRequest)
      default:
        return createDefaultInvoiceNumber(paymentRequest)
    }
  } catch {
    return undefined
  }
}

module.exports = {
  createInvoiceNumber
}
