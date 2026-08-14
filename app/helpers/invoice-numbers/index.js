const { createDefaultInvoiceNumber } = require('./create-default-invoice-number')
const { createESInvoiceNumber } = require('./create-es-invoice-number')
const { createIMPSInvoiceNumber } = require('./create-imps-invoice-number')
const { createSitiAgriInvoiceNumber } = require('./create-siti-agri-invoice-number')
const { createStandardSchemeInvoiceNumber } = require('./create-standard-scheme-invoice-number')
const { useInvoiceNumberAsIs } = require('./use-invoice-number-as-is')

module.exports = {
  createDefaultInvoiceNumber,
  createESInvoiceNumber,
  createIMPSInvoiceNumber,
  createSitiAgriInvoiceNumber,
  createStandardSchemeInvoiceNumber,
  useInvoiceNumberAsIs
}
