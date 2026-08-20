const { createIMPSInvoiceNumber } = require('../../../app/create-invoice-number/create-imps-invoice-number')

describe('createIMPSInvoiceNumber', () => {
  test('adds the trader to an invoice number', () => {
    expect(createIMPSInvoiceNumber({
      invoiceNumber: 'INV/123',
      trader: 'TRADER'
    })).toBe('INV/TRADER123')
  })

  test('returns the invoice number when it already contains the trader', () => {
    const paymentRequest = {
      invoiceNumber: 'INV/TRADER123',
      trader: 'TRADER'
    }

    expect(createIMPSInvoiceNumber(paymentRequest))
      .toBe(paymentRequest.invoiceNumber)
  })

  test('returns undefined when the invoice number has no separator', () => {
    expect(createIMPSInvoiceNumber({
      invoiceNumber: 'INV123',
      trader: 'TRADER'
    })).toBeUndefined()
  })
})
