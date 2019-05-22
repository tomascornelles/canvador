import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { header } from './_header.js'
import { printChat, saveMessage } from './_chat.js'
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
        <div class="message-input">
          <input type="text" class="js-chat-input">
        </div>
        <div class="js-chat message-list"></div>
      </div>
    `
    $('.page').innerHTML = header() + template

    $('.js-chat-input').addEventListener('submit', function () {
      console.log(campaign, pj, pj.name, this.value)
    })
    printChat('test', pj)
  }

  _init(response.params.pj)
}
