module.exports = (dateStart, dateEnd) => {
  const start = new Date(dateStart.toISOString().substr(0, 10))
  const end = new Date(dateEnd.toISOString().substr(0, 10))
  const millis = end - start
  const days = millis > 0 ? (millis / 3600000) / 24 : 1
  return Math.floor(days / 7)
}
