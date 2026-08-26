const { getSchemes } = require('./get-schemes')

const getSourceSystem = (schemeId) => {
  const scheme = getSchemes().find((scheme) => scheme.schemeId === schemeId)
  return scheme?.sourceSystem
}

module.exports = {
  getSourceSystem
}
