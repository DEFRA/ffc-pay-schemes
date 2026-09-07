jest.mock('../../../app/helpers/is-siti-agri', () => ({
  isSitiAgri: jest.fn()
}))

const { isSitiAgri } = require('../../../app/helpers/is-siti-agri')
const { createSplitInvoiceNumber } = require('../../../app/create-split-invoice-number')
const { createDefaultInvoiceNumber } = require('../../../app/create-split-invoice-number/create-default-invoice-number')
const { createSitiAgriInvoiceNumber } = require('../../../app/create-split-invoice-number/create-siti-agri-invoice-number')

describe('createSplitInvoiceNumber', () => {
  const invoiceNumber = '1234567890123'
  const splitId = 'A'
  const schemeId = 'SFI'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('uses the Siti Agri invoice format when the scheme is Siti Agri', () => {
    isSitiAgri.mockReturnValue(true)

    expect(createSplitInvoiceNumber(invoiceNumber, splitId, schemeId))
      .toBe(createSitiAgriInvoiceNumber(invoiceNumber, splitId))

    expect(isSitiAgri).toHaveBeenCalledWith(schemeId)
  })

  test('uses the default invoice format when the scheme is not Siti Agri', () => {
    isSitiAgri.mockReturnValue(false)

    expect(createSplitInvoiceNumber(invoiceNumber, splitId, schemeId))
      .toBe(createDefaultInvoiceNumber(invoiceNumber, splitId))

    expect(isSitiAgri).toHaveBeenCalledWith(schemeId)
  })
})
