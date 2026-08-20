const { createSitiAgriInvoiceNumber } = require('../../../app/create-split-invoice-number/create-siti-agri-invoice-number')

describe('createSitiAgriInvoiceNumber', () => {
  test.each([
    ['1234567890123', 'A', '12345678A9023'],
    ['ABCDEFGH12345', '9', 'ABCDEFGH91245'],
    ['SITIAGRI000123', 'X', 'SITIAGRIX00023']
  ])(
    'inserts splitId %s into invoice number %s',
    (invoiceNumber, splitId, expectedInvoiceNumber) => {
      expect(createSitiAgriInvoiceNumber(invoiceNumber, splitId))
        .toBe(expectedInvoiceNumber)
    }
  )
})
