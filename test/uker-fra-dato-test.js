const test = require('ava')
const weeksFromDate = require('../index')

test('returns 0 for today as input', t => {
  const weeks = weeksFromDate(new Date())
  t.is(weeks, 0)
})

test('returns 0 for today as both inputs', t => {
  const weeks = weeksFromDate(new Date(), new Date())
  t.is(weeks, 0)
})

test('returns 0 for today as start dates and end date as 6 days from now', t => {
  const now = new Date()
  const start = new Date(now.toISOString().substr(0, 10))
  const end = new Date(now.toISOString().substr(0, 10))
  end.setDate(end.getDate() + 6)
  const weeks = weeksFromDate(start, end)
  t.is(weeks, 0)
})

test('returns 1 for today as start dates and end date as 7 days from now', t => {
  const now = new Date()
  const start = new Date(now.toISOString().substr(0, 10))
  const end = new Date(now.toISOString().substr(0, 10))
  end.setDate(end.getDate() + 7)
  const weeks = weeksFromDate(start, end)
  t.is(weeks, 1)
})

test('returns 0 for today as start dates and date from the past as end date', t => {
  const weeks = weeksFromDate(new Date(), new Date('2019-05-01'))
  t.is(weeks, 0)
})
