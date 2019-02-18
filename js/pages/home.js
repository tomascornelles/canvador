import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { db } from '../config/db.js'
import { access } from '../components/access.js'

export const home = () => {
  const _init = () => {
    access.isLogged()
    _printLayout()
  }

  const _printLayout = () => {
    let template = `
      <section>
        <h2>${lang.title}</h2>
        <a href="/dm">DM</a><br>
        <input type="text" placeholder="texto" class="js-input">
        <p></p>
        <p></p>
        <p></p>
      </section>
    `

    $('canvador-app').innerHTML = template

    $('.js-input').addEventListener('keyup', function () {
      console.log(this.value)
    })

    let p = $('p', true)
    p.forEach(element => {
      element.innerHTML = 'Echo!!'
    })
    db.print('p', 'test')
  }

  _init()
}
