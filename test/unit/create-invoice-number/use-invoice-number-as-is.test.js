const { useInvoiceNumberAsIs } = require('../../../app/create-invoice-number/use-invoice-number-as-is')

describe('useInvoiceNumberAsIs', () => {
  test('returns the invoice number unchanged', () => {
    const invoiceNumber = 'INV-12345'

    expect(useInvoiceNumberAsIs(invoiceNumber)).toBe(invoiceNumber)
  })
})
