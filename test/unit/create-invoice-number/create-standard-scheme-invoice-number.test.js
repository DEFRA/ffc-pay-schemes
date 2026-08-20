const { createStandardSchemeInvoiceNumber } = require('../../../app/create-invoice-number/create-standard-scheme-invoice-number')

describe('createStandardSchemeInvoiceNumber', () => {
  test('creates a standard scheme invoice number', () => {
    expect(createStandardSchemeInvoiceNumber({
      invoiceNumber: 'A1234567',
      contractNumber: 'CON123',
      paymentRequestNumber: 5
    })).toBe('A1234567CON123V005')
  })

  test('returns undefined when the invoice number is too short', () => {
    expect(createStandardSchemeInvoiceNumber({
      invoiceNumber: '123456',
      contractNumber: 'CON123',
      paymentRequestNumber: 5
    })).toBeUndefined()
  })

  test('returns undefined when required values are missing', () => {
    expect(createStandardSchemeInvoiceNumber({
      invoiceNumber: 'A1234567',
      paymentRequestNumber: 5
    })).toBeUndefined()

    expect(createStandardSchemeInvoiceNumber({
      invoiceNumber: 'A1234567',
      contractNumber: 'CON123'
    })).toBeUndefined()
  })
})
