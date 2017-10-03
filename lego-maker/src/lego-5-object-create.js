/**
 * Module for lego part 5.
 *
 * @module src/lego-5-object-create
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const legoBrickPrototype = {
  toString: function toString () {
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
  },

  render: function render () {
    console.log(this.toString())
  }
}

/**
 * Returns an object representing a lego brick.
 *
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - Color of the brick ('blue', 'red', 'green', etc.).
 * @returns {object} obj - Object representing a brick.
 * @returns {number} obj.x - Horizontal number of horizontal nobs of the brick.
 * @returns {number} obj.y - Vertical number of vertical nobs of the brick.
 * @returns {string} obj.color - Color of the brick.
 * @returns {function} obj.toString - A function returning a string representing the object.
 * @returns {function} obj.render - A function rendering the object.
 */
let createLegoBrick = function (x = 2, y = 4, color = 'red') {
  return Object.create(legoBrickPrototype, {
    x: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: x
    },
    y: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: y
    },
    color: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: color
    }
  })
}

// Exports
exports.createLegoBrick = createLegoBrick
