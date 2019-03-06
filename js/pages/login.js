import { $ } from '../utils.js'
import { lang } from '../config/lang.js'
import { database } from '../config/db.js'
import page from 'page'
import { header } from './_header.js'

export const login = () => {
  const _init = () => {
    _printLogin()
  }

  const _printLogin = (errorMsg) => {
    let msg = (typeof errorMsg === 'string') ? `<p class="nes-text is-error">${errorMsg}</p>` : ''
    let template = `
      <section class="nes-container with-title">
        <h2 class="title">${lang.login.title}</h2>
        ${msg}
        <form action="login" class="form js-login-form">
          <div class="nes-field">
            <label for="user">${lang.login.user}</label>
            <input type="text" id="user" data-validator="username" class="nes-input js-login-user"></div>
          <div class="nes-field">
            <label for="pass">${lang.login.pass}</label>
            <input type="password" id="pass" data-validator="password" class="nes-input js-login-pass"></div>
          <br>
          <button class="btn">${lang.login.submit}</button>
          <button class="btn js-login-new">${lang.login.new}</button>
        </form>
      </section>
    `

    $('.page').innerHTML = header + template

    $('.js-login-new').addEventListener('click', _printNewUser)
    $('.js-login-form').addEventListener('submit', _submitLogin)
  }

  const _submitLogin = (e) => {
    e.preventDefault()
    if (_validator()) {
      let user = $('.js-login-user').value
      let pass = $('.js-login-pass').value

      database.ref('/users/' + user + '/pass').on('value', function (snapshot) {
        console.log(snapshot.val() === pass)
        if (snapshot.val() === pass) {
          window.sessionStorage.setItem('user', user)
          page('/user/' + user)
        } else {
          _printLogin(lang.login.error)
        }
      })
    } else {
      _printLogin(lang.login.errorValidator)
    }
  }

  const _printNewUser = (errorMsg) => {
    let msg = (typeof errorMsg === 'string') ? `<p class="nes-text is-error">${errorMsg}</p>` : ''
    const template = `
      <section class="nes-container with-title">
        <h2 class="title">${lang.login.new}</h2>
        ${msg}
        <form action="login" class="form js-login-formNew">
          <div class="nes-field">
            <label for="user">${lang.login.user}</label>
            <input type="text" id="user" data-validator="username" class="nes-input js-login-user"></div>
          <div class="nes-field">
            <label for="pass">${lang.login.pass}</label>
            <input type="password" id="pass" data-validator="password" class="nes-input js-login-pass"></div>
          <div class="nes-field">
            <label for="pass2">${lang.login.passRepeat}</label>
            <input type="password" id="pass2" data-validator="password" class="nes-input js-login-pass2"></div>
          <br>
          <button class="nes-btn is-primary">${lang.login.submit}</button>
          <button class="nes-btn js-login-exist">${lang.login.exist}</button>
        </form>
      </section>
    `

    $('.page').innerHTML = header + template

    $('.js-login-exist').addEventListener('click', _printLogin)
    $('.js-login-formNew').addEventListener('submit', _submitNewUser)
  }

  const _submitNewUser = (e) => {
    e.preventDefault()
    if (_validator()) {
      let user = $('.js-login-user').value
      let pass = $('.js-login-pass').value
      let pass2 = $('.js-login-pass2').value
      if (pass === pass2) {
        database.ref('/users/' + user).on('value', function (snapshot) {
          if (snapshot.val() !== null) {
            if (snapshot.val().pass === pass) {
              window.sessionStorage.setItem('user', user)
              page('/' + user)
            } else {
              _printNewUser(lang.login.errorUserExists)
            }
          } else {
            database.ref('users/' + user).set({
              pass: pass
            })
          }
        })
      } else {
        _printNewUser(lang.login.errorPass2)
      }
    } else {
      _printNewUser(lang.login.errorValidator)
    }
  }

  const _validator = () => {
    let valid = true
    $('form input', true).forEach(input => {
      if (input.dataset.validator === 'username') {
        let re = /^[_a-zA-Z0-9]{1,8}$/
        if (!re.exec(input.value)) valid = false
      }
      if (input.dataset.validator === 'password') {
        let re = /^[_a-zA-Z0-9]{1,8}$/
        if (!re.exec(input.value)) valid = false
      }
    })
    return valid
  }

  _init()
}

export const isLogged = (user) => {
  if (window.sessionStorage.getItem('user') === user) {
    return true
  } else if (window.sessionStorage.getItem('user') !== null) {
    page('/' + window.sessionStorage.getItem('user'))
    return false
  } else {
    page('/login')
    return false
  }
}
