const { createDefaultInvoiceNumber } = require('../../../app/create-invoice-number/create-default-invoice-number')

describe('createDefaultInvoiceNumber', () => {
  test('creates an invoice number with a padded payment request number', () => {
    expect(createDefaultInvoiceNumber({
      agreementNumber: 'AGR123',
      paymentRequestNumber: 7
    })).toBe('AGR123V007')
  })

  test('returns undefined when required values are missing', () => {
    expect(createDefaultInvoiceNumber({ agreementNumber: 'AGR123' })).toBeUndefined()
    expect(createDefaultInvoiceNumber({ paymentRequestNumber: 7 })).toBeUndefined()
  })
})
