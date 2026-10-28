const { getSchemes } = require('../scheme-properties/get-schemes')

const getSchemeIdFromPillar = (pillar) => {
  const matchingScheme = getSchemes().find((scheme) =>
    String(scheme.pillar ?? '').toLowerCase() === String(pillar ?? '').toLowerCase()
  )
  return matchingScheme?.schemeId
}

module.exports = {
  getSchemeIdFromPillar
}
