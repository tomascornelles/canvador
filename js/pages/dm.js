import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { header } from './_header.js'
import { isLogged } from './login.js'
import { printChat, saveMsg } from './_chat.js'

export const dm = () => {
  const _init = (user) => {
    if (isLogged(user)) {
      _printLayout()
    }
  }

  const _printLayout = () => {
    let template = `
      <section>
        <h2>${lang.title}</h2>
        <a href="/">Inicio</a><br>
        <textarea placeholder="Escribe DM" class="nes-input js-login-user js-input"></textarea>
        <button class="nes-btn is-primary js-send m-b">Enviar</button>
      </section>
      <div class="nes-container is-rounded with-title">
        <h3 class="title">${lang.chat}</h3>
        <div class="js-chat message-list"></div>
      </div>
    `

    $('.page').innerHTML = header + template

    printChat('test', 'dm')

    $('.js-send').addEventListener('click', function () {
      let input = $('.js-input')
      if (input.value.trim() !== '') saveMsg('test', 'dm', 'Director de juego', input.value)
      input.value = ''
    })
  }

  _init('dm')
}
