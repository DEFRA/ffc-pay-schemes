const schemesProvidingAccountingValues = require('./constants/schemes-providing-account-values')

const schemeProvidesAccountingValues = (schemeId) => {
  return schemesProvidingAccountingValues.includes(schemeId)
}

module.exports = {
  schemeProvidesAccountingValues
}
