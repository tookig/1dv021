/**
 * Module for lego part 3.
 *
 * @module src/lego-3-constructor-prototype-pattern
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Creates a LegoBrick instance that represents a lego brick.
 *
 * @constructor
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - The color of the brick ('blue', 'red', 'green', etc.)
 */
function LegoBrick (x = 2, y = 4, color = 'red') {
  this.x = x
  this.y = y
  this.color = color
}

LegoBrick.prototype.toString = function toString () {
  let knobText = ''
  for (let y = 0; y < this.y; y++) {
    for (let x = 0; x < this.x; x++) {
      knobText += '®'
      if (x < this.x - 1) {
        knobText += ' '
      }
    }
    if (y < this.y - 1) {
      knobText += '\n'
    }
  }
  return knobText
}

LegoBrick.prototype.render = function render () {
  console.log(this.toString())
}

// Exports
module.exports = LegoBrick
