const { createDefaultInvoiceNumber } = require('../../../app/create-split-invoice-number/create-default-invoice-number')

describe('createDefaultInvoiceNumber', () => {
  test.each([
    ['INV1234', 'A', 'INVA134'],
    ['123456789', 'B', '12345B689'],
    ['ABC-1234', '9', 'ABC-9134']
  ])(
    'inserts splitId %s into invoice number %s',
    (invoiceNumber, splitId, expectedInvoiceNumber) => {
      expect(createDefaultInvoiceNumber(invoiceNumber, splitId))
        .toBe(expectedInvoiceNumber)
    }
  )
})
