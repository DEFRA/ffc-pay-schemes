const createIMPSInvoiceNumber = (paymentRequest) => {
  if (paymentRequest.invoiceNumber.includes('/')) {
    if (paymentRequest.invoiceNumber.includes(`/${paymentRequest.trader}`)) {
      return paymentRequest.invoiceNumber
    }
    const invoiceParts = paymentRequest.invoiceNumber.split('/')
    return `${invoiceParts[0]}/${paymentRequest.trader}${invoiceParts[1]}`
  }
  return null
}

module.exports = {
  createIMPSInvoiceNumber
}
