const { isSitiAgri } = require('../helpers/is-siti-agri')
const { createDefaultInvoiceNumber } = require('./create-default-invoice-number')
const { createSitiAgriInvoiceNumber } = require('./create-siti-agri-invoice-number')

const createSplitInvoiceNumber = (invoiceNumber, splitId, schemeId) => {
  if (isSitiAgri(schemeId)) {
    return createSitiAgriInvoiceNumber(invoiceNumber, splitId)
  }

  return createDefaultInvoiceNumber(invoiceNumber, splitId)
}

module.exports = {
  createSplitInvoiceNumber
}
