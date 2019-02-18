import { $ } from '../utils.js'
import { lang } from '../config/lang.js'

export const dm = () => {
  const _init = () => {
    console.log('Init DM')
    _printLayout()
  }

  const _printLayout = () => {
    let template = `
      <section>
        <h2>${lang.title}</h2>
        <a href="/">Inicio</a><br>
        <input type="text" placeholder="Escribe DM" class="js-input">
      </section>
    `

    document.querySelector('canvador-app').innerHTML = template

    $('.js-input', true).forEach(function (input) {
      input.addEventListener('keyup', function () {
        console.log(this.value)
      })
    })
  }

  _init()
}