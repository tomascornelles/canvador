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

export const db = {
  get: (query, callback, options) => {
    database.ref(query).on('value', function (snapshot) {
      if (typeof callback !== 'undefined' && typeof options !== 'undefined') {
        callback(snapshot.val(), options)
      } else if (typeof callback !== 'undefined') {
        callback(snapshot.val())
      }
    })
  },
  print: (value, selector) => {
    var s = $(selector, true)
    s.forEach(function (e) {
      e.innerHTML = value
    })
  }
}
