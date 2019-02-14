import {$} from './utils.js'

var firebase = require('firebase/app')

require('firebase/database')

var config = {
  apiKey: 'AIzaSyA9QlXVmuDcG20RGtkkhlMVBOyuSFqcsJ4',
  authDomain: 'rp6d20.firebaseapp.com',
  databaseURL: 'https://rp6d20.firebaseio.com',
  projectId: 'rp6d20'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export let database = firebase.database()

export const get = (selector, elem) => {
  console.log(new Date())
  database.ref('/' + elem).on('value', function (snapshot) {
    var s = $(selector)
    s.forEach(function (e) {
      e.innerHTML = snapshot.val()
      e.addEventListener('click', function () {
        get(selector, 'otra')
      })
    })
  })
}
