/**
 * Determinator module.
 *
 * @module src/determinator
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
function tellType (data) {
  let result = 'You sent me a'
  if (data === null) {
    result += ' null value.'
  } else if (typeof data === 'undefined') {
    result += 'n undefined value.'
  } else if (typeof data === 'object') {
    if (Array.isArray(data)) {
      result += 'n array.'
    } else {
      result += 'n object.'
    }
  } else if (typeof data === 'boolean') {
    result += ' boolean.'
  } else if (typeof data === 'number') {
    result += ' number.'
  } else if (typeof data === 'string') {
    result += ' string.'
  } else if (typeof data === 'function') {
    result += ' function.'
  }
  return result
}

exports.tellType = tellType
