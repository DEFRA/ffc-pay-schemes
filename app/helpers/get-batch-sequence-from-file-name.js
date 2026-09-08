const schemeIds = require('../constants/scheme-ids')
const sequencePositions = require('../constants/sequence-positions')

const SEQUENCE_LENGTH = 4
const IMPS_OFFSET = 1

const getBatchSequenceFromFileName = (schemeId, fileName) => {
  if (schemeId === schemeIds.IMPS) {
    return Number(fileName.substring(
      fileName.lastIndexOf('_') + IMPS_OFFSET,
      fileName.lastIndexOf('.')
    ))
  }

  const schemeEntry = Object.entries(schemeIds)
    .find(([, id]) => id === schemeId)

  if (!schemeEntry) {
    throw new Error(`Unknown schemeId: ${schemeId}`)
  }

  const [schemeName] = schemeEntry
  const sequenceStart = sequencePositions[schemeName]

  if (sequenceStart === undefined) {
    throw new Error(`No sequence position found for schemeId: ${schemeId}`)
  }

  return Number(fileName.substr(sequenceStart, SEQUENCE_LENGTH))
}

module.exports = {
  getBatchSequenceFromFileName
}
