/**
 * Harshad module.
 *
 * @module src/harshad
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
* Returns true when the given number is a valid Harshad number.
*
* @param {number} number The given number.
* @returns {boolean}
*/
function isValid (number) {
  let remaining = number
  let sum = 0
  do {
    sum += remaining % 10
    remaining = Number.parseInt(remaining / 10)
  } while (remaining > 0)
  return number % sum === 0
}

/**
* Gets the next Harshad number after the given number.
*
* @param {number} number The given number.
* @returns {number}
*/
function getNext (number) {
  let i = number + 1
  while (!isValid(i)) {
    i += 1
  }
  return i
}

/**
* Returns a sequence of Harshad numbers, starting after a given number.
*
* @param {number} count The number of consecutive Harshad numbers to return.
* @param {number} [start = 0] The number after which the sequence should start; defaults to 0.
* @returns {number[]}
*/
function getSequence (count, start = 0) {
  let current = start
  let sequence = []
  for (let i = 0; i < count; i += 1) {
    current = getNext(current)
    sequence.push(current)
  }
  return sequence
}

// Exports
exports.isValid = isValid
exports.getNext = getNext
exports.getSequence = getSequence
