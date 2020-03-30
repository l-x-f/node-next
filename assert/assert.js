const assert = require('assert')

function add(a, b) {
  return a + b
}

const expected = add(1, 2)
assert(expected === 3, '预期1加2等于3')

assert.equal(expected, 3, '预期1+2等于3')

assert.notEqual(expected, 4, '预期不等于4')

var list1 = [1, 2, 3, 4, 5]
var list2 = [1, 2, 3, 4, 5]

assert.deepEqual(list1, list2, 'kojkok')

assert.fail(21, 42, undefined, '###')
