import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { database } from '../config/db.js'
import page from 'page'

export const login = () => {
  const _init = () => {
    _printLayout()
  }

  const _printLayout = (errorMsg) => {
    let msg = (typeof errorMsg !== 'undefined') ? `<p>${errorMsg}</p>` : ''
    let template = `
      <section>
        <h2>${lang.login.title}</h2>
        ${msg}
        <form action="login" class="js-login-form">
          <input type="text" placeholder="user" class="js-login-user">
          <input type="password" placeholder="pass" class="js-login-pass">
          <br>
          <button class="js-login-submit">Entrar</button>
        </form>
      </section>
    `

    $('canvador-app').innerHTML = template

    $('.js-login-form').addEventListener('submit', _submit)
  }

  const _submit = (e) => {
    e.preventDefault()
    let user = $('.js-login-user').value
    let pass = $('.js-login-pass').value

    database.ref('/users/' + user + '/pass').on('value', function (snapshot) {
      console.log(snapshot.val() === pass)
      if (snapshot.val() === pass) {
        window.sessionStorage.setItem('user', user)
        page('/' + user)
      } else {
        _printLayout(lang.login.error)
      }
    })
  }

  _init()
}
