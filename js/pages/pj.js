import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { header } from './_header.js'
import { printChat } from './_chat.js'
import { isLogged } from './login.js'

export const pj = (response) => {
  const _init = (user) => {
    if (isLogged(user)) {
      _printPJ(user)
    }
  }

  const _printPJ = (pj) => {
    const template = `
      <h2 className="title">${pj}</h2>
      <p>${lang.title}</p>
      <div class="nes-container with-title">
        <h3 class="title">Chat</h3>
        <div class="js-chat message-list"></div>
      </div>
    `
    $('.page').innerHTML = header + template

    printChat('test', pj)
  }

  _init(response.params.pj)
}
