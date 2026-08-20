jest.mock('../../../app/create-invoice-number/create-standard-scheme-invoice-number', () => ({
  createStandardSchemeInvoiceNumber: jest.fn()
}))
jest.mock('../../../app/create-invoice-number/create-siti-agri-invoice-number', () => ({
  createSitiAgriInvoiceNumber: jest.fn()
}))
jest.mock('../../../app/create-invoice-number/create-es-invoice-number', () => ({
  createESInvoiceNumber: jest.fn()
}))
jest.mock('../../../app/create-invoice-number/create-imps-invoice-number', () => ({
  createIMPSInvoiceNumber: jest.fn()
}))
jest.mock('../../../app/create-invoice-number/create-default-invoice-number', () => ({
  createDefaultInvoiceNumber: jest.fn()
}))

const { createInvoiceNumber } = require('../../../app/create-invoice-number')
const { createStandardSchemeInvoiceNumber } = require('../../../app/create-invoice-number/create-standard-scheme-invoice-number')
const { createSitiAgriInvoiceNumber } = require('../../../app/create-invoice-number/create-siti-agri-invoice-number')
const { createESInvoiceNumber } = require('../../../app/create-invoice-number/create-es-invoice-number')
const { createIMPSInvoiceNumber } = require('../../../app/create-invoice-number/create-imps-invoice-number')
const { createDefaultInvoiceNumber } = require('../../../app/create-invoice-number/create-default-invoice-number')

const schemeIds = require('../../../app/constants/scheme-ids')
const sourceSystems = require('../../../app/constants/source-systems')

describe('createInvoiceNumber', () => {
  const paymentRequest = {
    invoiceNumber: 'INV123',
    schemeId: schemeIds.SFI,
    sourceSystem: 'SOURCE',
    contractNumber: 'CON123',
    agreementNumber: 'AGR123',
    paymentRequestNumber: 1,
    trader: 'TRADER'
  }

  beforeEach(() => {
    jest.clearAllMocks()

    createStandardSchemeInvoiceNumber.mockReturnValue('standard-invoice')
    createSitiAgriInvoiceNumber.mockReturnValue('siti-agri-invoice')
    createESInvoiceNumber.mockReturnValue('es-invoice')
    createIMPSInvoiceNumber.mockReturnValue('imps-invoice')
    createDefaultInvoiceNumber.mockReturnValue('default-invoice')
  })

  test.each(['MANUAL', 'FC', 'FPTT', 'WMP'])(
    'returns the existing invoice number for %s',
    (schemeKey) => {
      const request = {
        ...paymentRequest,
        schemeId: schemeIds[schemeKey]
      }

      expect(createInvoiceNumber(request)).toBe(request.invoiceNumber)
    }
  )

  test('returns the existing invoice number for a manual source system', () => {
    const request = {
      ...paymentRequest,
      sourceSystem: sourceSystems.MANUAL
    }

    expect(createInvoiceNumber(request)).toBe(request.invoiceNumber)
  })

  test.each(['DELINKED', 'SFI_EXPANDED', 'COHT_REVENUE', 'COHT_CAPITAL'])(
    'uses the standard scheme invoice number creator for %s',
    (schemeKey) => {
      const request = { ...paymentRequest, schemeId: schemeIds[schemeKey] }

      expect(createInvoiceNumber(request)).toBe('standard-invoice')
      expect(createStandardSchemeInvoiceNumber).toHaveBeenCalledWith(request)
    }
  )

  test.each(['SFI', 'SFI_PILOT', 'LUMP_SUMS', 'CS', 'BPS', 'SFI23'])(
    'uses the SITI Agri invoice number creator for %s',
    (schemeKey) => {
      const request = { ...paymentRequest, schemeId: schemeIds[schemeKey] }

      expect(createInvoiceNumber(request)).toBe('siti-agri-invoice')
      expect(createSitiAgriInvoiceNumber).toHaveBeenCalledWith(request)
    }
  )

  test('uses the ES invoice number creator', () => {
    const request = { ...paymentRequest, schemeId: schemeIds.ES }

    expect(createInvoiceNumber(request)).toBe('es-invoice')
    expect(createESInvoiceNumber).toHaveBeenCalledWith(request)
  })

  test('uses the IMPS invoice number creator', () => {
    const request = { ...paymentRequest, schemeId: schemeIds.IMPS }

    expect(createInvoiceNumber(request)).toBe('imps-invoice')
    expect(createIMPSInvoiceNumber).toHaveBeenCalledWith(request)
  })

  test('uses the default invoice number creator for an unmapped scheme', () => {
    const request = { ...paymentRequest, schemeId: schemeIds.MANUAL + 100 }

    expect(createInvoiceNumber(request)).toBe('default-invoice')
    expect(createDefaultInvoiceNumber).toHaveBeenCalledWith(request)
  })

  test('returns undefined when the payment request is invalid', () => {
    expect(createInvoiceNumber()).toBeUndefined()
  })
})
