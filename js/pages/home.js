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
        <a href="/dm">DM</a><br>
        <input type="text" placeholder="texto" class="js-input">
        <p></p>
        <p></p>
        <p></p>
        <div>
        <svg width="300" height="300" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <rect width="10" height="10" fill="white"/>
        <path d="M6 1H3V2H2V5H1V7H2V9H3V8H6V9H7V6H9V5H7V2H6V1Z" fill="#EFC7A2" class="av-skin"/>
        <path d="M4 3H3V4H4V3Z" fill="#444444"/>
        <path d="M6 3H5V4H6V3Z" fill="#444444"/>
        <path d="M8 5H1V6H2V7H7V6H8V5Z" fill="#828282"/>
        <path d="M2 7H7V8H2V7Z" fill="#219653"/>
        <rect x="2" y="6" width="5" height="1" fill="#795330"/>
        <path d="M6 1H3V2H2V3H7V2H6V1Z" fill="#828282"/>
        <path d="M2 8H3V9H2V8Z" fill="#4B3636"/>
        <path d="M6 8H7V9H6V8Z" fill="#4B3636"/>
        <path d="M3 1H4V2H3V1Z" fill="black" fill-opacity="0.1"/>
        <path d="M2 2H3V9H2V2Z" fill="black" fill-opacity="0.1"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="10" height="10" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
        </div>
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
    db.print('p', 'test')
  }

  _init()
}
