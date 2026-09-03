const schemeIds = require('../constants/scheme-ids')

const isValidSchemeId = (schemeId) => {
  const numericSchemeId = Number(schemeId)
  return Object.values(schemeIds).includes(numericSchemeId)
}

module.exports = {
  isValidSchemeId
}
