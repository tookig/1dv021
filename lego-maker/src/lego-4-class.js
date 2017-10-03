/**
 * Module for lego part 4.
 *
 * @module src/lego-4-class
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Represents a lego brick.
 */
class LegoBrick {
  constructor (x = 2, y = 4, color = 'red') {
    this.x = x
    this.y = y
    this.color = color
  }

  toString () {
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

  render () {
    console.log(this.toString())
  }
}

// Exports
module.exports = LegoBrick
