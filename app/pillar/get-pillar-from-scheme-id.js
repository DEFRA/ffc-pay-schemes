const { UNKNOWN } = require('../constants/unknown')
const { getSchemes } = require('../scheme-properties/get-schemes')

const getPillarFromSchemeId = (schemeId) => {
  const matchingScheme = getSchemes().find((scheme) => scheme.schemeId === schemeId)
  return matchingScheme?.pillar ?? UNKNOWN
}

module.exports = {
  getPillarFromSchemeId
}
