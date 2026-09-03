const { UNKNOWN } = require('../constants/unknown')
const { getSchemes } = require('../scheme-properties/get-schemes')

const getSourceSystemFromSchemeId = (schemeId) => {
  const matchingScheme = getSchemes().find((scheme) => scheme.schemeId === schemeId)
  return matchingScheme?.sourceSystem ?? UNKNOWN
}

module.exports = {
  getSourceSystemFromSchemeId
}
