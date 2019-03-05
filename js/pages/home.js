import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { db } from '../config/db.js'
import { header } from './_header.js'

export const home = () => {
  const _init = () => {
    _printLayout()
  }

  const _printLayout = () => {
    let template = `
      <section>
        <h2>${lang.title}</h2>
        <a href="/dm" class="nes-btn">DM</a><br>
        <input type="text" placeholder="texto"  class="nes-input js-login-user js-input">
        <p></p>
        <p class="js-name"></p>
        <p></p>
      </section>
    `

    $('.page').innerHTML = header + template

    $('.js-input').addEventListener('keyup', function () {
      console.log(this.value)
    })

    let p = $('p', true)
    p.forEach(element => {
      element.innerHTML = 'Echo!!'
    })
    db.print('.js-name', 'mondino', 'name')
  }

  _init()
}
