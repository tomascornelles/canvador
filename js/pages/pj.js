import { $ } from '../utils.js'
import { lang , setLang} from '../config/lang.js'
import { header } from './_header.js/'
import { database } from '../config/db.js'

export const pj = (response) => {
  const _init = (pj) => {
    database.ref('/users/' + pj + '/lang').once('value', function (snapshot) {
      setLang(snapshot.val())
      _printPJ(pj)
    })
    // _printPJ(pj)
  }

  const _printPJ = (pj) => {
    const template = `
      <h2 className="title">${pj}</h2>
      <p>${lang.title}</p>
    `
console.log(lang)
    $('.page').innerHTML = header + template
  }

  _init(response.params.pj)
}
