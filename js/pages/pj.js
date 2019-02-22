import { $ } from '../utils.js'
import { lang, setLang } from '../config/lang.js'
import { header } from './_header.js/'
import { database } from '../config/db.js'
import page from 'page'

export const pj = (response) => {
  const _init = (pj) => {
    database.ref('/users/' + pj).once('value', function (snapshot) {
      let _data = snapshot.val()
      if (_data !== null) {
        setLang(_data.lang)
        _printPJ(pj)
      } else {
        page('/404')
      }
    })
  }

  const _printPJ = (pj) => {
    const template = `
      <h2 className="title">${pj}</h2>
      <p>${lang.title}</p>
    `
    $('.page').innerHTML = header + template
  }

  _init(response.params.pj)
}
