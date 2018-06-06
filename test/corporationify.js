/**
 * Dependencie(s)
 */

const test = require('tape')
const extract = require('..')

test('should get corporation name from string', assert => {
  assert.plan(1)
  const {name} = extract('Tether')
  assert.equal(name, 'Tether')
})

test('should get corporation name from string ending with a dot', assert => {
  assert.plan(1)
  const {name} = extract('Google.')
  assert.equal(name, 'Google')
})
