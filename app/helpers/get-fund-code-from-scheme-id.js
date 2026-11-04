const { getSchemeProperties } = require('../scheme-properties/get-scheme-properties')

const getFundCodeFromSchemeId = (schemeId) => {
  const schemeProperties = getSchemeProperties(schemeId)
  return schemeProperties?.fundCode
}

module.exports = {
  getFundCodeFromSchemeId
}
