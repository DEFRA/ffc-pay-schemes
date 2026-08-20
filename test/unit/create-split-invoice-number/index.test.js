const { createSplitInvoiceNumber } = require('../../../app/create-split-invoice-number')
const { createDefaultInvoiceNumber } = require('../../../app/create-split-invoice-number/create-default-invoice-number')
const { createSitiAgriInvoiceNumber } = require('../../../app/create-split-invoice-number/create-siti-agri-invoice-number')
const schemeIds = require('../../../app/constants/scheme-ids')

describe('createSplitInvoiceNumber', () => {
  const invoiceNumber = '1234567890123'
  const splitId = 'A'
  const sitiAgriSchemes = [
    'SFI',
    'SFI_PILOT',
    'LUMP_SUMS',
    'SFI23',
    'DELINKED',
    'SFI_EXPANDED'
  ]

  test.each(Object.entries(schemeIds))(
    'uses the correct invoice format for %s',
    (schemeKey, schemeId) => {
      const expectedInvoiceNumber = sitiAgriSchemes.includes(schemeKey)
        ? createSitiAgriInvoiceNumber(invoiceNumber, splitId)
        : createDefaultInvoiceNumber(invoiceNumber, splitId)

      expect(createSplitInvoiceNumber(invoiceNumber, splitId, schemeId))
        .toBe(expectedInvoiceNumber)
    }
  )

  test('uses the default format for an unknown schemeId', () => {
    expect(createSplitInvoiceNumber(invoiceNumber, splitId, 'unknown-scheme'))
      .toBe(createDefaultInvoiceNumber(invoiceNumber, splitId))
  })
})
