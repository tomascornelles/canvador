import page from 'page'

export const logout = () => {
  const _init = () => {
    window.sessionStorage.removeItem('user')
    page('/')
  }

  _init()
}
