const createESInvoiceNumber = (paymentRequest) => {
  return `I(${paymentRequest.invoiceNumber})${paymentRequest.contractNumber}`
}

module.exports = {
  createESInvoiceNumber
}
