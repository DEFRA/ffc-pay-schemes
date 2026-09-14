const { MANUAL } = require('../constants/scheme-ids')
const manualSources = require('../constants/manual-sources')

const getJournalSourceFromPillar = (schemeId, source, pillar) => {
  if (schemeId !== MANUAL) {
    return source
  }

  const manualSource = manualSources[pillar]
  return manualSource ?? source
}

module.exports = {
  getJournalSourceFromPillar
}
