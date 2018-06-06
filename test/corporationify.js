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

test('should get corporation name from string ending with a comma', assert => {
  assert.plan(1)
  const {name} = extract('Facebook,')
  assert.equal(name, 'Facebook')
})

test('should get and trim corporation name from string ending containing a comma', assert => {
  assert.plan(1)
  const {name} = extract('   Facebook  ,     ')
  assert.equal(name, 'Facebook')
})

test('should get and trim corporation name from string ending containing a dot', assert => {
  assert.plan(1)
  const {name} = extract('   Facebook    .     ')
  assert.equal(name, 'Facebook')
})

test('should get default corporation type', assert => {
  assert.plan(1)
  const {type} = extract('   Facebook    .     ')
  assert.equal(type, 'Incorporated')
})

test('should get given corporation type', assert => {
  assert.plan(1)
  const {type} = extract('   Blahblah    , Limited     ')
  assert.equal(type, 'Limited')
})

test('should accept limited corporation type alias', assert => {
  assert.plan(1)
  const {type} = extract('Tether, Ltd')
  assert.equal(type, 'Limited')
})

test('should accept incorporated corporation type alias', assert => {
  assert.plan(1)
  const {type} = extract('Tether, Inc')
  assert.equal(type, 'Incorporated')
})
