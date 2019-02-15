import { $ } from './utils.js'

export const dm = () => {
  const _init = () => {
    console.log('Init DM')
    _printLayout()
  }

  const _printLayout = () => {
    let template = `
      <section>
        <input type="text" placeholder="Escribe DM" class="js-input">
      </section>
    `

    document.querySelector('canvador-app').innerHTML = template

    let inputs = $('.js-input')
    inputs.forEach(function (input) {
      input.addEventListener('keyup', function () {
        console.log(this.value)
      })
    })
  }

  _init()
}
