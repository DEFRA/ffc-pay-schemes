const { getSchemes } = require('./get-schemes')

const getSourceSystem = (schemeId) => {
  const matchingScheme = getSchemes().find((scheme) => scheme.schemeId === schemeId)
  return matchingScheme?.sourceSystem
}

module.exports = {
  getSourceSystem
}
