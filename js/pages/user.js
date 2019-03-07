import { $, changetab } from '../utils.js'
import { lang } from '../config/lang.js'
import { header } from './_header.js'
import { printChat } from './_chat.js'
import { isLogged } from './login.js'

export const user = (response) => {
  const _init = (user) => {
    if (isLogged(user)) {
      _printUser(user)
    }
  }

  const _printUser = (user) => {
    const template = `
      <h2 className="title">${user}</h2>
      <p>${lang.title}</p>
      <ul class="tabs">
        <li class="tab js-tab tab--active" data-tab="ficha">Ficha</li>
        <li class="tab js-tab" data-tab="chat">Chat</li>
        <li class="tab js-tab" data-tab="lista">Lista</li>
      </ul>
      <div class="container container--border js-tab-content" id="ficha">
        <h3 class="title">Ficha</h3>
      </div>
      <div class="container container--border js-tab-content hidden" id="chat">
        <h3 class="title">Chat</h3>
        <div class="js-chat message-list"></div>
      </div>
      <div class="container container--border js-tab-content hidden" id="lista">
        <h3 class="title">Lista</h3>
      </div>
    `
    $('.page').innerHTML = header() + template

    $('.tab', true).forEach(tab => {
      tab.addEventListener('click', function () {
        changetab(tab)
      })
    })

    printChat('test', user)
  }

  _init(response.params.user)
}
