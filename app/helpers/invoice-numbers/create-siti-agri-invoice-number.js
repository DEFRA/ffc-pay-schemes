const createSitiAgriInvoiceNumber = (paymentRequest) => {
  const sitiInvoiceNumberElementLength = 7
  if (paymentRequest.invoiceNumber.length >= sitiInvoiceNumberElementLength && paymentRequest.contractNumber && paymentRequest.paymentRequestNumber) {
    return `S${paymentRequest.invoiceNumber.slice(-sitiInvoiceNumberElementLength)}${paymentRequest.contractNumber}V${paymentRequest.paymentRequestNumber.toString().padStart(3, '0')}`
  }
}

module.exports = {
  createSitiAgriInvoiceNumber
}
