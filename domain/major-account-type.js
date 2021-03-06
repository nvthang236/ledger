const { DEBIT, CREDIT } = require('./trade-side')

/**
 * The major account types. i.e. Asset, Liability, Owner's Equity, Revenue, Expense
 *
 */
class MajorAccountType {
  /**
   * @param {string} name The name
   * @param {TradeSide} side Debity type or Credit type
   */
  constructor(name, side) {
    this.name = name
    this.side = side
  }
}

const ASSET = new MajorAccountType('asset', DEBIT)
const EXPENSE = new MajorAccountType('expense', DEBIT)
const LIABILITY = new MajorAccountType('liability', CREDIT)
const EQUITY = new MajorAccountType('equity', CREDIT)
const REVENUE = new MajorAccountType('revenue', CREDIT)

module.exports = MajorAccountType
module.exports.ASSET = ASSET
module.exports.EXPENSE = EXPENSE
module.exports.LIABILITY = LIABILITY
module.exports.EQUITY = EQUITY
module.exports.REVENUE = REVENUE
module.exports.ALL_TYPES = [ASSET, EXPENSE, LIABILITY, EQUITY, REVENUE]
