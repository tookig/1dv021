/**
 * Team module.
 *
 * @module src/team
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

  /**
   *  Sorts the team objects of an array in place and returns the array. The team
   *  objects is sorted by descending points.
   *
   * @param {Object[]} teams An unordered array of team objects.
   * @returns {Object[]} An ordered array of team objects.
   */
function sortByPoints (teams) {
  if (!Array.isArray(teams)) {
    throw new TypeError('\'teams\' parameter must be an array')
  }
  var newTeams = teams.slice()
  newTeams.sort(function sortTeams (team1, team2) {
    return (team2.points || 0) - (team1.points || 0)
  })
  return newTeams
}

exports.sortByPoints = sortByPoints
