const { createSitiAgriInvoiceNumber } = require('../../../app/create-invoice-number/create-siti-agri-invoice-number')

describe('createSitiAgriInvoiceNumber', () => {
  test('creates a SITI Agri invoice number', () => {
    expect(createSitiAgriInvoiceNumber({
      invoiceNumber: 'A1234567',
      contractNumber: 'CON123',
      paymentRequestNumber: 5
    })).toBe('S1234567CON123V005')
  })

  test('returns undefined when the invoice number is too short', () => {
    expect(createSitiAgriInvoiceNumber({
      invoiceNumber: '123456',
      contractNumber: 'CON123',
      paymentRequestNumber: 5
    })).toBeUndefined()
  })

  test('returns undefined when required values are missing', () => {
    expect(createSitiAgriInvoiceNumber({
      invoiceNumber: 'A1234567',
      paymentRequestNumber: 5
    })).toBeUndefined()
  })
})
