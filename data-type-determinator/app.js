/**
 * The starting  point of the application.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const determinator = require('./src/determinator')

console.log(determinator.tellType('Hasta la vista, baby.'))
console.log(determinator.tellType(null))
console.log(determinator.tellType(undefined))
console.log(determinator.tellType(true))
console.log(determinator.tellType([1, 2, 3]))
console.log(determinator.tellType({ hej: ' på mig' }))
console.log(determinator.tellType(42))
console.log(determinator.tellType(function () {}))
