const { getSchemes } = require('./get-schemes')

const getSchemeName = (schemeId) => {
  const matchingScheme = getSchemes().find((scheme) => scheme.schemeId === schemeId)
  return matchingScheme?.schemeName
}

module.exports = {
  getSchemeName
}
