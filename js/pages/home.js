import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { header } from './_header.js'

export const home = () => {
  const _init = () => {
    _printLayout()
  }

  const _printLayout = () => {
    let template = `
      <h1><a href="/">${lang.title}</a></h1>
      <section>
        <h1>Test H1</h1>
        <h2>Test H2</h2>
        <h3>Test H3</h3>
        <h4>Test H4</h4>
        <h5>Test H5</h5>
        <h6>Test H6</h6>
        <p>Test p</p>
        <p>Test p</p>
        <h2>${lang.title}</h2>
        <a href="/login" class="btn">Login</a>
      </section>
    `

    $('.page').innerHTML = header() + template
  }

  _init()
}
