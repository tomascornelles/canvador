import { database } from '../config/db.js'
import { $ } from '../utils.js'

export const printChat = (campaign, pj) => {
  $('.js-chat').innerHTML = ''
  let isDM = (window.sessionStorage.getItem('user') === 'dm')

  database.ref('/campaigns/' + campaign + '/chat').on('value', function (snapshot) {
    let messages = snapshot.val()
    for (const key in messages) {
      if (messages.hasOwnProperty(key)) {
        const message = messages[key]
        let element = document.createElement('div')
        let text = message.text.replace(/\n/g, '<br />')

        let chatWall = (message.pj === 'dm')
          ? (message.text.match(/^(http).*(png|gif|jpg|jpeg|webp)$/gmi))
            ? `<div class="text-center">
                <p><img src="${text}"></p>
              </div>`
            : `<div class="nes-container is-rounded is-dark">
                <p>${text}</p>
              </div>`
          : (message.pj === pj)
            ? `<div class="message -right">
                <div class="nes-balloon from-right float-right">
                  <p>${text}</p>
                </div>
              </div>`
            : `<div class="message -left">
                <div class="nes-balloon from-left">
                  <p class="nes-text is-primary">${message.name}</p><p>${text}</p>
                </div>
              </div>`

        let deleteBtn = `<span class="js-delete nes-btn is-error delete-btn" data-id="${key}" data-campaign="${campaign}" data-pj="${message.pj}"><i class="nes-icon close is-small"></i></span>`

        element.innerHTML = (isDM) ? deleteBtn : ''
        element.innerHTML += chatWall
        $('.js-chat').prepend(element)

        $('.js-delete', true).forEach(element => {
          element.addEventListener('click', function () {
            deleteMessage(this.dataset.campaign, this.dataset.pj, this.dataset.id)
          })
        })
      }
    }
  })
}

export const saveMsg = (campaign, pj, name, text) => {
  if (text.trim() !== '') {
    database.ref('/campaigns/' + campaign + '/chat/' + Date.parse(Date())).set({
      'pj': pj,
      'name': name,
      'text': text
    })
  }
}

export const deleteMessage = (campaign, id) => {
  database.ref('/campaigns/' + campaign + '/chat/' + id).remove()
}
