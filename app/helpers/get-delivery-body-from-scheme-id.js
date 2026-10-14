const { getSchemeProperties } = require('../scheme-properties/get-scheme-properties')

const getDeliveryBodyFromSchemeId = (schemeId) => {
  const schemeProperties = getSchemeProperties(schemeId)
  return schemeProperties?.deliveryBody
}

module.exports = {
  getDeliveryBodyFromSchemeId
}
