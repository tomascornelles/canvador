import { $ } from '../utils.js'
import { layouts } from '../layouts.js'
import { db } from '../config/db.js'

export const home = () => {
  // initial function
  const _init = () => {
    _printLayout()
  }

  const _printLayout = () => {
    let template = layouts.home('texto')

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