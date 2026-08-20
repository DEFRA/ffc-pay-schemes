const { createESInvoiceNumber } = require('../../../app/create-invoice-number/create-es-invoice-number')

describe('createESInvoiceNumber', () => {
  test('creates an ES invoice number', () => {
    expect(createESInvoiceNumber({
      invoiceNumber: 'INV123',
      contractNumber: 'CON456'
    })).toBe('I(INV123)CON456')
  })
})
