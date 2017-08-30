/**
 * my-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the name of the students whose points is greater than,
 * or equal to, the average of the points.

 * @param {object[]} students
 * @returns {string[]}
 */
function filterBetterThanAverage (students) {
  if (!Array.isArray(students)) {
    throw new TypeError('\'students\' parameter must be an array of objects.')
  }
  // Hitta medelvärdet
  var mean = students.reduce(function (sum, student) {
    return sum + student.points
  }, 0) / students.length
  // Returnera ny array med de studenter som är bättre eller lika bra
  // som medelvärdet
  return students.filter(function (student) {
    return student.points >= mean
  }).map(function (student) {
    return student.name
  })
}

exports.filterBetterThanAverage = filterBetterThanAverage
