/**
 * Module for a very simple adding machine.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of the arguments passed.
 *
 * @param {...*} varArgs
 * @returns {Number} The sum of an arbitrary number of numbers.
 */
function add (varArgs) {
  let sum = 0
  for (let i in arguments) {
    let val = arguments[i]
    if (Array.isArray(val)) {
      val.forEach(function (nextArgs) {
        sum += add(nextArgs)
      })
    } else if (typeof val === 'string') {
      let number = Number.parseFloat(val.replace(',', '.'))
      if (Number.isNaN(number)) {
        throw new TypeError('At least one of the arguments can\'t be parsed as a number.')
      }
      sum += number
    } else if (typeof val === 'number') {
      sum += val
    } else {
      throw new TypeError('At least one of the arguments can\'t be parsed as a number.')
    }
  }
  return sum
}

exports.add = add
