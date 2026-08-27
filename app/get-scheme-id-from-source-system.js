const { getSchemes } = require('./get-schemes')

const getSchemeIdFromSourceSystem = (sourceSystem) => {
  const matchingScheme = getSchemes().find((scheme) => scheme.sourceSystem === sourceSystem)
  return matchingScheme?.schemeId
}

module.exports = {
  getSchemeIdFromSourceSystem
}
