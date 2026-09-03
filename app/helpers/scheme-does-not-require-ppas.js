const schemesNotRequiringPPAs = require('../constants/schemes-not-requiring-ppas')

const schemeDoesNotRequirePPAs = (schemeId) => {
  return schemesNotRequiringPPAs.includes(schemeId)
}

module.exports = {
  schemeDoesNotRequirePPAs
}
