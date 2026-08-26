const createStandardSchemeInvoiceNumber = (paymentRequest) => {
  const sitiInvoiceNumberElementLength = 7
  const suffixLength = 3
  if (paymentRequest.invoiceNumber.length >= sitiInvoiceNumberElementLength && paymentRequest.contractNumber && paymentRequest.paymentRequestNumber) {
    return `${paymentRequest.invoiceNumber.charAt(0)}${paymentRequest.invoiceNumber.slice(-sitiInvoiceNumberElementLength)}${paymentRequest.contractNumber}V${paymentRequest.paymentRequestNumber.toString().padStart(suffixLength, '0')}`
  }
  return null
}

module.exports = {
  createStandardSchemeInvoiceNumber
}
