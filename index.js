const weeksFromDate = require('./lib/weeks-from-date')
const now = new Date()

module.exports = (dateStart, dateEnd = now) => {
  if (!dateStart) {
    throw new Error('Missing required input start date')
  }
  if (!(dateStart instanceof Date)) {
    throw new TypeError('Input start date must be Date')
  }
  if (!(dateEnd instanceof Date)) {
    throw new TypeError('Input end date must be Date')
  }
  return weeksFromDate(dateStart, dateEnd)
}
