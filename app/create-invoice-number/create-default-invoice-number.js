const createDefaultInvoiceNumber = (paymentRequest) => {
  const suffixLength = 3
  if (paymentRequest.agreementNumber && paymentRequest.paymentRequestNumber) {
    return `${paymentRequest.agreementNumber}V${paymentRequest.paymentRequestNumber.toString().padStart(suffixLength, '0')}`
  }
  return null
}

module.exports = {
  createDefaultInvoiceNumber
}
