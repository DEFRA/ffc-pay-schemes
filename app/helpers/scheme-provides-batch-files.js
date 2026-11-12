const fileMasks = require('../constants/file-masks')
const schemeIds = require('../constants/scheme-ids')

const schemeProvidesBatchFiles = (schemeId) => {
  const schemeEntry = Object.entries(schemeIds).find(([, id]) => id === Number(schemeId))

  if (!schemeEntry) {
    throw new Error(`Unknown scheme ID: ${schemeId}`)
  }

  const [schemeName] = schemeEntry
  return Object.hasOwn(fileMasks, schemeName)
}

module.exports = {
  schemeProvidesBatchFiles
}
