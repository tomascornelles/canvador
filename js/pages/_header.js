import { lang } from '../config/lang.js'
import { isLogged } from './login.js'

export const header = () => {
  let logout = ''
  if (isLogged()) {
    logout = `<a href="/logout" class="btn btn--danger float--right" title="${lang.login.logout}">${lang.login.logout}</a>`
  }
  return `
    ${logout}
    <h1><a href="/">${lang.title}</a></h1>
  `
}