import { config } from './config.js'
import { $ } from '../utils.js'

// Define DB params and initialize
import firebase from 'firebase/app'
require('firebase/database')

var configDB = {
  apiKey: config.db.apiKey,
  authDomain: config.db.authDomain,
  databaseURL: config.db.databaseURL,
  projectId: config.db.projectId
}
if (!firebase.apps.length) {
  firebase.initializeApp(configDB)
}
export let database = firebase.database()
// END DB params

/*
 * FUNCTIONS
 */

// printer
export const db = {
  print: (selector, pj, elem) => {
    var s = $(selector, true)
    database.ref('/pjs/' + pj + '/' + elem).on('value', function (snapshot) {
      s.forEach(function (e) {
        e.innerHTML = snapshot.val()
      })
    })
  }
}
