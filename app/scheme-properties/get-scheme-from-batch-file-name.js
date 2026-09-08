const schemes = require('../constants/schemes')

const getSchemeFromBatchFileName = (fileName) => {
  return schemes.find(scheme =>
    scheme.fileMask?.test(fileName)
  )
}

module.exports = {
  getSchemeFromBatchFileName
}
