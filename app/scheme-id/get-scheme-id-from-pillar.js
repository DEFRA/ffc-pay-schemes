const { getSchemes } = require('../scheme-properties/get-schemes')

const getSchemeIdFromPillar = (pillar) => {
  const matchingScheme = getSchemes().find((scheme) => scheme.pillar === pillar)
  return matchingScheme?.schemeId
}

module.exports = {
  getSchemeIdFromPillar
}
