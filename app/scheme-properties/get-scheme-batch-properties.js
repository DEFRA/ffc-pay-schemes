const schemeBatchProperties = require('../constants/scheme-batch-properties')

const getSchemeBatchProperties = (schemeId) => {
  return schemeBatchProperties.find(scheme => scheme.schemeId === schemeId)
}

module.exports = {
  getSchemeBatchProperties
}
