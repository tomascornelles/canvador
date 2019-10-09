import { database } from '../config/db.js'
import { $ } from '../utils.js'
export const printChat = (campaign, pj) => {
  let isGM = (window.sessionStorage.getItem('user') === 'gm')
  database.ref('/campaigns/' + campaign + '/chat')
    .on('value', function (snapshot) {
      $('.js-chat').innerHTML = ''
      let messages = snapshot.val()
      for (const key in messages) {
        if (messages.hasOwnProperty(key)) {
          const message = messages[key]
          let element = document.createElement('div')
          let text = message.text.replace(/\n/g, '<br />')
          let chatWall = (message.pj === 'gm')
            ? (message.text.match(/^(http).*(png|gif|jpg|jpeg|webp)$/gmi))
              ? `<div class="text-center">
                  <p><img src="${text}"></p>
                </div>`
              : `<div class="message is--dark">
                  <p>${text}</p>
                </div>`
            : (message.pj === pj)
              ? `<div class="message is--right">
                  <p>${text}</p>
              </div>`
              : `<div class="message is--left">
                  <p class="user">${message.name}:</p>
                  <p>${text}</p>
              </div>`
          let deleteBtn = `<span class="js-delete delete-btn" data-id="${key}" data-campaign="${campaign}" data-pj="${message.pj}">x</span>`
          element.innerHTML = chatWall
          element.innerHTML += (isGM) ? deleteBtn : ''
          $('.js-chat')
            .prepend(element)
          $('.js-delete', true)
            .forEach(element => {
              element.addEventListener('click', function () {
                deleteMessage(this.dataset.campaign, this.dataset.id)
              })
            })
        }
      }
    })
}
export const saveMessage = (campaign, pj, name, text) => {
  if (text.trim() !== '') {
    database.ref('/campaigns/' + campaign + '/chat/' + Date.parse(Date()))
      .set({
        'pj': pj,
        'name': name,
        'text': text
      })
  }
}
export const deleteMessage = (campaign, id) => {
  console.log('cosa:', campaign, id)
  database.ref('/campaigns/' + campaign + '/chat/' + id)
    .remove()
}
