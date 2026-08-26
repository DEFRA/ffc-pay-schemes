const { createStandardSchemeInvoiceNumber } = require('../../../app/create-invoice-number/create-standard-scheme-invoice-number')

describe('createStandardSchemeInvoiceNumber', () => {
  test('creates a standard scheme invoice number', () => {
    expect(createStandardSchemeInvoiceNumber({
      invoiceNumber: 'A1234567',
      contractNumber: 'CON123',
      paymentRequestNumber: 5
    })).toBe('A1234567CON123V005')
  })

  test('returns null when the invoice number is too short', () => {
    expect(createStandardSchemeInvoiceNumber({
      invoiceNumber: '123456',
      contractNumber: 'CON123',
      paymentRequestNumber: 5
    })).toBeNull()
  })

  test('returns null when required values are missing', () => {
    expect(createStandardSchemeInvoiceNumber({
      invoiceNumber: 'A1234567',
      paymentRequestNumber: 5
    })).toBeNull()

    expect(createStandardSchemeInvoiceNumber({
      invoiceNumber: 'A1234567',
      contractNumber: 'CON123'
    })).toBeNull()
  })
})
