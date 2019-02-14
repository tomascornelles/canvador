import { database, get } from './db.js'
import {$} from './utils.js'

export const home = () => {

  const _init = () => {
    console.log('Init home')
    _printLayout()
  }

  const _printLayout = () => {
    let template = `
      <section>
        <a href="/dm">dm</a><br>
        <input type="text" placeholder="Escribe" class="js-input">
      </section>
    `

    document.querySelector('canvador-app').innerHTML = template

    let inputs = $('.js-input')
    inputs.forEach(function(input) {
      input.addEventListener('keyup', function () {
        console.log(this.value)
      })
    })
  }

  _init()
}
