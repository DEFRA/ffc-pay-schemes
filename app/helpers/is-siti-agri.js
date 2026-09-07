const sitiAgriSchemes = require('../constants/siti-agri-schemes')

const isSitiAgri = (schemeId) => {
  return sitiAgriSchemes.includes(schemeId)
}

module.exports = {
  isSitiAgri
}
