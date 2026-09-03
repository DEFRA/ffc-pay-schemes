const schemes = require('../constants/schemes')
const { MANUAL } = require('../constants/scheme-ids')

const getSchemeProperties = (schemeId, sourceSystem, pillar) => {
  let scheme = schemeId
    ? schemes.find(item => item.schemeId === schemeId)
    : schemes.find(item => item.sourceSystem === sourceSystem)

  if (!scheme) {
    throw new Error(`Scheme with ID ${schemeId}, sourceSystem ${sourceSystem} not found`)
  }

  if (scheme?.schemeId === MANUAL && pillar) {
    const pillarScheme = schemes.find(item => item.pillar === pillar)

    if (pillarScheme) {
      scheme = {
        ...scheme,
        pillar,
        deliveryBody: pillarScheme.deliveryBody,
        fundCode: pillarScheme.fundCode
      }
    }
  }

  return scheme
}

module.exports = {
  getSchemeProperties
}
