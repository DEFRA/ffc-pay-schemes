const schemes = require('./constants/schemes')

const createInvoiceNumber = (paymentRequest) => {
  const scheme = schemes.find(item => item.schemeId === paymentRequest.schemeId)

  if (!scheme) {
    throw new Error(`Scheme with ID ${paymentRequest.schemeId} not found`)
  }

  return scheme.createInvoiceNumber(paymentRequest)
}

module.exports = {
  createInvoiceNumber
}
