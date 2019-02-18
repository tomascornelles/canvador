import { access } from '../components/access.js'

export const login = () => {
  const _init = () => {
    console.log('login page')
    access.login('yo')
  }

  _init()
}
