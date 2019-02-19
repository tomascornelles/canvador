import { $ } from '../utils.js'
import { lang, setLang } from '../config/lang.js'
import { header } from './_header.js'
import { database } from '../config/db.js'

export const dm = () => {
  const _init = () => {
    database.ref('/users/dm/lang').on('value', function (snapshot) {
      setLang(snapshot.val())
      _printLayout()
    })
  }

  const _printLayout = () => {
    let template = `
      <section>
        <h2>${lang.title}</h2>
        <a href="/">Inicio</a><br>
        <input type="text" placeholder="Escribe DM" class="js-input">
      </section>
    `

    $('.page').innerHTML = header + template

    $('.js-input', true).forEach(function (input) {
      input.addEventListener('keyup', function () {
        console.log(this.value)
      })
    })
  }

  _init()
}
