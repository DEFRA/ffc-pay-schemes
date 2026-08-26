const { getSchemes } = require('./get-schemes')

const getSchemeNameFromSchemeId = (schemeId) => {
  const matchingScheme = getSchemes().find((scheme) => scheme.schemeId === schemeId)
  return matchingScheme?.schemeName
}

module.exports = {
  getSchemeNameFromSchemeId
}
