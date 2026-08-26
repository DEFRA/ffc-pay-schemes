const { getSchemes } = require('./get-schemes')

const getSourceSystemFromSchemeId = (schemeId) => {
  const matchingScheme = getSchemes().find((scheme) => scheme.schemeId === schemeId)
  return matchingScheme?.sourceSystem
}

module.exports = {
  getSourceSystemFromSchemeId
}
