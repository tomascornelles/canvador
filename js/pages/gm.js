import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { db } from '../config/db.js'
import { header } from './_header.js'
import { isLogged } from './login.js'
import { printChat, saveMsg } from './_chat.js'

export const gm = () => {
  const _init = () => {
    console.log('entra')
    if (isLogged('gm')) {
      _printLayout()
    }
    db.get('/users/gm/name', db.print, '.js-name')
  }

  const _printLayout = () => {
    let template = `
      <section>
        <h2>${lang.title}</h2>
        <a href="/" class="btn">Inicio</a><br>
        <textarea placeholder="Escribe GM" class="nes-input js-login-user js-input"></textarea>
        <button class="nes-btn is-primary js-send m-b">Enviar</button>
      </section>
      <p class="js-name"></p>
      <div class="nes-container is-rounded with-title">
        <h3 class="title">${lang.chat}</h3>
        <div class="js-chat message-list"></div>
      </div>
      <p class="js-name"></p>
    `

    $('.page').innerHTML = header + template

    printChat('test', 'gm')

    $('.js-send').addEventListener('click', function () {
      let input = $('.js-input')
      if (input.value.trim() !== '') saveMsg('test', 'gm', 'Director de juego', input.value)
      input.value = ''
    })
  }

  _init()
}
