const defaultMap = require('./default-map')

const { SOS920 } = require('../constants/account-codes/ap')
const { SOS940 } = require('../constants/account-codes/ar-admin')
const { SOS960 } = require('../constants/account-codes/ar-irregular')
const { P02 } = require('../constants/description-codes')

const p02Entry = {
  lineCode: P02,
  ap: SOS920,
  arAdmin: SOS940,
  arIrregular: SOS960
}

module.exports = [defaultMap[0], p02Entry, ...defaultMap.slice(1)]
