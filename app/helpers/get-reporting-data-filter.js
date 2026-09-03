const { BPS, DELINKED, CS } = require('../constants/scheme-ids')
const { isFRPS } = require('./is-frps')

const getReportingDataFilter = (schemeId) => {
  const defaultFilter = ['marketingYear', 'agreementNumber']
  switch (schemeId) {
    case BPS:
    case DELINKED:
      return ['marketingYear']
    case CS:
      return ['contractNumber']
    default:
      if (isFRPS(schemeId)) {
        return [...defaultFilter, 'correlationId']
      } else {
        return defaultFilter
      }
  }
}

module.exports = {
  getReportingDataFilter
}
